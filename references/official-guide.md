# Condensed AE Scripting Guide

Sources used: official After Effects Scripting Guide at https://ae-scripting.docsforadobe.dev/ , especially Overview, Object Model, Application, Project, ItemCollection, LayerCollection, Property, KeyframeEase, TextDocument, ImportOptions, RenderQueue, and Match Names pages. The site sitemap reported pages last modified 2026-05-04 when this skill was created.

## Mental Model

- AE scripting uses ExtendScript, an Adobe JavaScript dialect. Treat it like old JavaScript: prefer `var`, function declarations, simple arrays/objects, and explicit loops.
- Scripts and expressions are separate. Scripts command AE to create or modify projects; expressions define property values over time.
- The core object chain is `app -> project -> items/comps -> layers -> properties`. Render automation lives at `app.project.renderQueue`.
- AE docs use "attribute" for JavaScript object fields and "property" for animatable AE values such as Transform Position, effect controls, masks, and shape settings.
- Collections are normally 1-based. Use `for (var i = 1; i <= collection.length; i += 1)` or `numItems/numLayers/numProperties`.

## Running JSX

- `.jsx` files are ExtendScript scripts. Use UTF-8.
- `afterfx -r full\path\script.jsx` sends a JSX file to the currently open After Effects instance. On this machine use `D:\AE2025\Adobe After Effects 2025\Support Files\AfterFX.com`.
- If AE must write logs, PNGs, or projects from a script, AE needs Preferences > General > Allow Scripts To Write Files And Access Network.
- Use the bundled runner:

```powershell
& "C:\Users\20235\.codex\skills\ae-dev\scripts\run-ae-script.ps1" -ScriptPath "C:\path\to\script.jsx"
```

## App and Project

- `app.project` is the current project. If missing, call `app.newProject()`.
- `app.activate()` brings AE forward.
- `app.beginUndoGroup("Name")` groups script changes into one undo step; pair with `app.endUndoGroup()`. Do not call `endUndoGroup()` unless the begin call succeeded.
- `app.beginSuppressDialogs()` can suppress script error dialogs, but usually keep dialogs visible while debugging. Prefer logging and rethrowing errors.
- `app.project.items.addFolder(name)` creates a folder.
- `app.project.items.addComp(name, width, height, pixelAspect, duration, frameRate)` creates a comp. Width/height are pixels, duration seconds, frame rate fps.
- `app.project.save(new File(path))` saves without prompting. If no file is passed on an unsaved project, AE prompts the user.

## Items, Layers, and Comps

- A `CompItem` represents a composition and owns `comp.layers`.
- `comp.layers.addSolid(color, name, width, height, pixelAspect, duration)` creates a solid layer.
- `comp.layers.addShape()` creates a shape layer.
- `comp.layers.addText(text)` creates point text; `addBoxText([width, height])` creates paragraph text.
- `addCamera`, `addLight`, `addNull`, and `precompose` are available through `LayerCollection`.
- Common layer attributes: `name`, `enabled`, `solo`, `locked`, `inPoint`, `outPoint`, `startTime`, `stretch`, `parent`, `motionBlur`, `threeDLayer`.

## Properties and Keyframes

- Prefer match names for lookups: `layer.property("ADBE Transform Group").property("ADBE Position")`.
- `Property.setValue(value)` sets a non-animated/static value. It throws when the property already has keyframes.
- `Property.setValueAtTime(time, value)` creates or sets a keyframe at seconds from comp start.
- `Property.setValuesAtTimes(times, values)` can batch keyframes; arrays must match length.
- `Property.setInterpolationTypeAtKey(index, inType, outType)` controls interpolation. Use `KeyframeInterpolationType.BEZIER` for eased AE motion.
- `Property.setTemporalEaseAtKey(index, inEaseArray, outEaseArray)` requires arrays with dimensionality matching the property value type: 1 scalar, 2 for 2D, 3 for 3D. `KeyframeEase(speed, influence)` influence range is 0.1..100.
- For spatial properties, only call spatial tangent/continuity methods when `propertyValueType` is `TwoD_SPATIAL` or `ThreeD_SPATIAL`.
- Key indexes are 1-based. Check `prop.numKeys`.

## Shape Layers

Shape layer creation pattern:

```jsx
var layer = comp.layers.addShape();
var root = layer.property("ADBE Root Vectors Group");
var group = root.addProperty("ADBE Vector Group");
var vectors = group.property("ADBE Vectors Group");
var rect = vectors.addProperty("ADBE Vector Shape - Rect");
rect.property("ADBE Vector Rect Size").setValue([300, 120]);
var fill = vectors.addProperty("ADBE Vector Graphic - Fill");
fill.property("ADBE Vector Fill Color").setValue([1, 0.3, 0.1]);
```

Use shape operators for editable AE Generation:

- rectangles/ellipses/polystars
- fill/stroke/gradient fill/gradient stroke
- trim paths for line reveals
- repeater for repeated dots/bars
- round corners, offset paths, merge paths, pucker/bloat, wiggle paths

## Text

- `comp.layers.addText("Text")` returns a `TextLayer`.
- Source Text is under `layer.property("ADBE Text Properties").property("ADBE Text Document")`.
- Get the `TextDocument`, modify fields, then set it back:

```jsx
var src = textLayer
  .property("ADBE Text Properties")
  .property("ADBE Text Document");
var doc = src.value;
doc.fontSize = 96;
doc.fillColor = [1, 1, 1];
doc.justification = ParagraphJustification.CENTER_JUSTIFY;
src.setValue(doc);
```

- Font PostScript names can differ by system. Wrap font assignment in try/catch and provide a readable fallback.

## Importing Footage

- Use `new ImportOptions(new File(path))`.
- Set `importOptions.importAs` only after checking `importOptions.canImportAs(type)`.
- Common types: `ImportAsType.FOOTAGE`, `COMP`, `COMP_CROPPED_LAYERS`, `PROJECT`.
- Use imported `FootageItem` or `CompItem` with `comp.layers.add(item)`.

## Rendering

- Render queue is `app.project.renderQueue`.
- Add a comp through `app.project.renderQueue.items.add(comp)`.
- Use render settings/output module templates only when installed templates are known. Otherwise set the output module file and leave default templates.
- `renderQueue.render()` starts rendering. Rendering can block AE; only do this when the user asked for a final render, not merely an editable project.

## Error Patterns

- `null is not an object`: a property/match name lookup failed. Add `requireProp` guards.
- "Value array must have 3 or 4 elements": a color property received a point array or vice versa, often from guessing effect child indexes.
- "Can not set value with keyframes": use `setValueAtTime` or remove keys first.
- Line 0 errors: file encoding/header problem. Save UTF-8 plain text.
- Script silently does not write files: AE file/network scripting permission is disabled.
- `setTemporalEaseAtKey` errors: wrong ease-array length for property dimensions.

## Preferred Build Pattern

1. Make a named folder in the project.
2. Make one comp with explicit dimensions, duration, fps.
3. Create named layers, set static properties first.
4. Add keyframes using `setValueAtTime`.
5. Ease keyframes with correct dimensional arrays.
6. Open the comp viewer and set `comp.time` to a representative preview time.
7. Save the project and write a log.
