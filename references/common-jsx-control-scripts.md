# Common JSX Control Scripts

Source analyzed: `assets/` and all subfolders. All 164 `.jsx` scripts are organized under `assets/` subfolders (Compositions, Expressions, Keyframes, Layers, etc.).

This reference distills all 164 `.jsx` scripts in that folder into reusable AE automation patterns for `$ae-dev`. Use it when the user asks for practical AE control, batch timeline edits, selection utilities, keyframe/expression work, Lottie preparation, project cleanup, render queue setup, or when writing a new JSX script that should imitate proven local scripts.

## How To Use This Reference

- Prefer the patterns here over re-inventing UI-heavy AE operations.
- Treat each script as a recipe, not as code to blindly run. Many scripts assume an active comp, selected layers/properties, English menu command names, or user dialogs.
- When generating new Codex JSX, keep the `$ae-dev` reliability rules: match names, null checks, explicit logs, `beginUndoGroup`, and explicit output paths.
- When a source script uses localized display names such as `"Contents"`, `"Position"`, `"Scale"`, or `"Color"`, translate to match names where possible before using it in Chinese AE.
- For scripts that move local files, clean folders, or render many frames, ask for explicit user confirmation at action time.

## Source Coverage

| Group        | Count | Main capability                                                                                   |
| ------------ | ----: | ------------------------------------------------------------------------------------------------- |
| templates    |    10 | JSON-style primitives for creating comps/layers, applying effects, reading project/layer info     |
| Compositions |    23 | Work area, background, guides, cameras, comp-wide settings, nested comp changes                   |
| Expressions  |    12 | Looping, posterize-time, expression enable/disable/search/update, Lottie expression cleanup       |
| Keyframes    |    13 | Keyframe conversion, rounding, holds, inversion, value calculations, text animators               |
| Layers       |    43 | Naming, parenting, timing, labels, mattes, connections, SRT/text conversion, effects, layer state |
| Lottie       |     2 | Drop-shadow conversion and out-point fixes for Bodymovin/Lottie                                   |
| Markers      |     6 | Layer/composition marker creation and marker transfer                                             |
| Project      |    21 | Render queue, folders, proxies, names, labels, cleanup, text export, PNG frame render             |
| Properties   |    19 | Essential Graphics, path operations, colors, controllers, puppet pins, shape utilities            |
| Selection    |    12 | Repeatable layer-selection helpers                                                                |
| Utilities    |     3 | Timeline navigation, frame/time conversion, selected layer index                                  |

## Core Reusable Patterns

### JSON-callable utility pattern

The root scripts use a reusable wrapper: define `function doTask(args)`, read JSON from a sibling `../temp/args.json`, return `JSON.stringify({status, ...})`, and write the result with `$.write(result)`. This is useful for external launchers but less useful for one-off AE automation because `afterfx -r` does not reliably return stdout to PowerShell. For Codex work, prefer writing a log file as well.

Use this pattern when building a library-like JSX:

- read parameters from `args`
- find comp by exact name or fall back to `app.project.activeItem`
- find layer by index first, then name
- return structured success/error JSON
- also write a log file for reliable verification

### Active comp guard

Most local scripts assume:

```jsx
var comp = app.project.activeItem;
if (!(comp instanceof CompItem)) {
  throw new Error("Active item must be a composition");
}
```

Use this before `comp.selectedLayers`, `comp.selectedProperties`, `comp.layers`, `comp.markerProperty`, `comp.workAreaStart`, or `comp.saveFrameToPng`.

### Selection-based layer/property tools

Common assumptions:

- `comp.selectedLayers[0]` is the main layer.
- `comp.selectedLayers` order matters for parenting, line connection, averaging positions, or layer below/above operations.
- `comp.selectedProperties` may include `Property` and `PropertyGroup`; check `property.propertyType === PropertyType.PROPERTY`.
- Use `property.selectedKeys` for keyframe-only actions.

When generating a robust script, validate counts:

- exactly 1 layer: rename source, get duration, selected layer index
- exactly 2 layers: calculate distance, connect line
- 1+ selected layers: markers, naming, labels, effects
- 1+ selected properties: expressions, keyframe operations, property value operations

### Project-wide iteration

Many scripts walk all project items:

```jsx
for (var i = 1; i <= app.project.numItems; i += 1) {
  var item = app.project.item(i);
  if (item instanceof CompItem) {
    // edit comp
  }
}
```

Use this for motion blur, collapse transformations, nested composition settings, labels, proxies, render queue additions, and finding effects/expressions.

### Recursive property traversal

For expressions, colors, effects, strokes, Essential Graphics, and path utilities, recursively inspect indexed/named groups:

```jsx
function walk(group, visit) {
  for (var i = 1; i <= group.numProperties; i += 1) {
    var p = group.property(i);
    visit(p);
    if (
      p.propertyType === PropertyType.INDEXED_GROUP ||
      p.propertyType === PropertyType.NAMED_GROUP
    ) {
      walk(p, visit);
    }
  }
}
```

Always guard `numProperties`; some properties do not have children.

### Shape layer construction

The local scripts repeatedly use:

- `comp.layers.addShape()`
- root contents: `ADBE Root Vectors Group`
- group: `ADBE Vector Group`
- group contents: `ADBE Vectors Group`
- path: `ADBE Vector Shape - Rect`, `ADBE Vector Shape - Ellipse`, `ADBE Vector Shape - Star`, or `ADBE Vector Shape - Group`
- graphics: `ADBE Vector Graphic - Fill`, `ADBE Vector Graphic - Stroke`
- layer transform: `ADBE Transform Group`

When using shape paths with expressions, place the shape layer at `[0, 0]` and make the path expression return comp-space vertices with `createPath(...)`.

### Expressions

Common safety checks before writing expressions:

- `property.propertyType === PropertyType.PROPERTY`
- `property.canSetExpression === true`
- if preserving expressions, append new code rather than replacing blindly
- use `.expressionEnabled` to toggle without deleting text

Useful expression recipes from source scripts:

- loop selected keyframed values: `loopOut("cycle")`, `loopIn("pingpong")`, etc.
- freeze recalculation: `posterizeTime(0);`
- maintain stroke width: compensate by comp-space scale
- maintain visual layer scale in 3D: expression-driven scale based on camera/Z distance
- connect paths to layer positions: `thisComp.layer("Name").toComp(anchorPoint)`

### Keyframes

Common operations:

- selected keys: `property.selectedKeys`
- read key time/value: `property.keyTime(k)`, `property.keyValue(k)`
- write current evaluated value: `property.setValueAtTime(comp.time, property.valueAtTime(comp.time, false))`
- convert expression to keys: source uses `app.executeCommand(2639)`; use sparingly and note that command ids are fragile
- remove redundant keys by comparing previous/current/next values
- set holds with `KeyframeInterpolationType.HOLD`
- round numeric arrays by dimension

For generated AE animation, prefer direct `setValueAtTime` plus explicit easing. Use source keyframe tools mainly for cleanup/repair workflows.

### Markers

Use `new MarkerValue(comment)` and:

- layer marker: `layer.marker.setValueAtTime(time, marker)`
- comp marker: `comp.markerProperty.setValueAtTime(time, marker)`

Marker copy scripts preserve comment, duration, and label metadata. Marker workflows pair well with work-area automation.

### Essential Graphics and controllers

Useful controller match names:

- Slider: `ADBE Slider Control`
- Angle: `ADBE Angle Control`
- Point: `ADBE Point Control`
- Color: `ADBE Color Control`
- Checkbox: `ADBE Checkbox Control`
- Dropdown: `ADBE Dropdown Control`

Use `property.canAddToMotionGraphicsTemplate(comp)` before adding properties to Essential Graphics. For nested Essential Properties, expose them by creating controller effects on the parent layer and assigning expressions back to the original Essential Properties.

### Render/output

Prefer Render Queue for final renders. Local scripts also use `comp.saveFrameToPng(time, File(path))` for preview frames or manual PNG sequences, but source comments warn this is undocumented and lower quality than Render Queue. Use it for previews/smoke tests, not high-stakes export.

### ScriptUI

Many scripts use `new Window("dialog", "...")` for dropdowns/buttons/sliders. For Codex automation, replace ScriptUI dialogs with explicit function arguments unless the user wants an interactive AE panel.

## Template Scripts

| File                      | Extracted capability                                                                                                                                       | Reuse notes                                                                                                                                                 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applyEffect.jsx`         | Apply an effect by match name to a specific comp/layer, optionally setting effect properties.                                                              | Good base for generic effect application. Must inspect effect child names; display property names may fail in non-English AE.                               |
| `applyEffectTemplate.jsx` | Apply named effect templates such as gaussian blur, directional blur, color balance, brightness/contrast, glow, drop shadow, cinematic look, and text pop. | Useful idea: template table maps friendly names to effect match names and settings. Improve by using match-name child properties instead of display labels. |
| `createComposition.jsx`   | Create a comp from JSON args: name, width, height, pixel aspect, duration, frame rate, background color.                                                   | Reuse for deterministic comp bootstrapping. Add `app.newProject()` guard if needed.                                                                         |
| `createShapeLayer.jsx`    | Create rectangle, ellipse, polygon, or star shape layer with fill, optional stroke, position, timing, and JSON result.                                     | Convert display names `"Contents"`, `"Size"`, `"Color"` to match names for safer Chinese AE use.                                                            |
| `createSolidLayer.jsx`    | Create a solid layer with color, size, position, timing, and JSON result.                                                                                  | Good simple asset/background primitive.                                                                                                                     |
| `createTextLayer.jsx`     | Create text layer with content, position, font size, color, alignment, timing, and JSON result.                                                            | Reuse `TextDocument`; wrap font assignment in try/catch.                                                                                                    |
| `getLayerInfo.jsx`        | Return selected/specified layer data and properties as JSON.                                                                                               | Useful as an inspection script before modifying unknown projects.                                                                                           |
| `getProjectInfo.jsx`      | Return project-level items/comps/layers summary as JSON.                                                                                                   | Use for quick inventory/logging.                                                                                                                            |
| `listCompositions.jsx`    | List compositions in the project.                                                                                                                          | Lightweight project inspection.                                                                                                                             |
| `setLayerProperties.jsx`  | Set layer transform/timing from JSON args: position, scale, rotation, opacity, start time, duration.                                                       | The source uses display transform names and questionable 3D rotation handling; prefer match names and `ADBE Rotate Z`.                                      |

## Composition Scripts

| File                                                                | Extracted capability                                                                                            | Reuse notes                                                                                                                                                               |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Compositions\Add_Assorted_Composition_Guides.jsx`                  | Add edge, center, action-safe, and title-safe guides to the active comp.                                        | Useful for layout setup; guide positions depend on comp size/aspect.                                                                                                      |
| `Compositions\Add_Background_Layer.jsx`                             | Add a shape-layer background that stays centered and matches comp width/height through expressions.             | High-value AE pattern: rectangle size expression `[thisComp.width, thisComp.height]`; position expression `[thisComp.width / 2, thisComp.height / 2]`; move layer to end. |
| `Compositions\Add_Camera_With_Controller.jsx`                       | Add a camera and 3D null controller.                                                                            | Useful for 2.5D scenes. Parent camera to null or use null as controller depending target design.                                                                          |
| `Compositions\Add_Composition_Guide.jsx`                            | Add a 16:9 fuchsia rectangle guide shape layer.                                                                 | Good overlay/reference layer pattern; lock/guide it in generated scripts if persistent.                                                                                   |
| `Compositions\Add_Posterize_Time_Adjustment_Layer.jsx`              | Add an adjustment solid with Posterize Time at half current frame rate.                                         | Use effect match name and set frame rate; helpful for stepped animation look.                                                                                             |
| `Compositions\Center_Composition.jsx`                               | Center Composition Panel view, with Alt/Shift variants.                                                         | UI-view helper, not project data. Use Computer Use instead if scripts are unreliable.                                                                                     |
| `Compositions\Change_Nested_Composition_Background.jsx`             | Prompt for hex color and apply to active comp plus nested comps.                                                | Reuse project-recursive nested comp traversal. Convert user input to normalized `[r,g,b]`.                                                                                |
| `Compositions\Change_Nested_Composition_Duration.jsx`               | Prompt for seconds and apply duration to active comp plus nested comps.                                         | Warn before global duration changes. Also adjust layer out points if needed.                                                                                              |
| `Compositions\Change_Nested_Composition_Duration_With_Timecode.jsx` | Prompt for timecode and apply duration to active/nested comps.                                                  | Validate timecode against frame rate.                                                                                                                                     |
| `Compositions\Change_Nested_Composition_Frame_Rate.jsx`             | Prompt for frame rate and apply to active/nested comps.                                                         | Important for timing-sensitive animation; ask before changing existing projects.                                                                                          |
| `Compositions\Change_Nested_Composition_Start_Frame.jsx`            | Prompt for start frame and update active/nested comps.                                                          | Useful in broadcast/versioned timelines.                                                                                                                                  |
| `Compositions\Change_Nested_Composition_Work_Area.jsx`              | Reset work area of active/nested comps to full duration.                                                        | Safe utility; pair with render prep.                                                                                                                                      |
| `Compositions\Cycle_Composition_Background_Color.jsx`               | Cycle comp background color between black, gray, and white.                                                     | Quick visual debugging; not a render background unless transparent grid hidden.                                                                                           |
| `Compositions\Enable_Collapse_Transformations.jsx`                  | Toggle collapse transformations/project-wide; ignore layers with marker text `Do Not Collapse Transformations`. | Useful for vector/precomp sharpness. Respect marker opt-out pattern in generated batch scripts.                                                                           |
| `Compositions\Enable_Motion_Blur.jsx`                               | Enable/disable motion blur on all comps and eligible layers.                                                    | Good global finishing step for AE animation. Set `comp.motionBlur` and `layer.motionBlur`.                                                                                |
| `Compositions\Force_Composition_Panel_Refresh.jsx`                  | Force current comp panel to refresh by toggling state.                                                          | Use only as UI workaround.                                                                                                                                                |
| `Compositions\Increment_Composition_Versions.jsx`                   | Increment version numbers inside all comp names.                                                                | Project naming automation; guard against accidental renames.                                                                                                              |
| `Compositions\Rename_Composition_To_File_Name.jsx`                  | Rename active comp to project file name.                                                                        | Requires saved project.                                                                                                                                                   |
| `Compositions\Reset_Composition_Work_Area.jsx`                      | Set work area to entire comp duration.                                                                          | Safe render prep.                                                                                                                                                         |
| `Compositions\Save_Frame_As_PNG.jsx`                                | Save current frame as PNG to stored/default folder; Shift chooses a new folder.                                 | Uses `saveFrameToPng`. Good for previews; confirm folder if creating many files.                                                                                          |
| `Compositions\Set_Work_Area_To_Markers.jsx`                         | Set work area start/duration from composition markers.                                                          | Pair with marker scripts for repeatable segment renders.                                                                                                                  |
| `Compositions\Toggle_Onion_Skinning.jsx`                            | Toggle onion skinning using adjustment layer and `CC Wide Time`.                                                | Useful animation workflow helper; effect availability may vary.                                                                                                           |
| `Compositions\Transfer_Composition_Work_Area.jsx`                   | Copy/paste work area between comps; Alt pastes.                                                                 | Use stored settings carefully; scripts using modifier keys are less suitable for unattended automation.                                                                   |

## Expression Scripts

| File                                                     | Extracted capability                                                                                                 | Reuse notes                                                                                  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `Expressions\Add_Posterize_Time_Expression.jsx`          | Add `posterizeTime(fps)` to selected properties while preserving existing expressions.                               | Use for stepped motion. Ensure property can set expression.                                  |
| `Expressions\Add_Simple_Loop_Expression.jsx`             | Add customizable `loopIn`/`loopOut` expression with type `continue`, `cycle`, `offset`, or `pingpong`.               | Replace dialog with explicit args in Codex-generated scripts.                                |
| `Expressions\Append_To_Expression.jsx`                   | Append code to selected properties that already contain expressions.                                                 | Use to add `posterizeTime(0);` or guards without replacing user logic.                       |
| `Expressions\Apply_Maintain_Stroke_Width_Expression.jsx` | Find Stroke Width properties in current comp and apply an expression that preserves visual stroke width under scale. | Very useful for shape-based AE and Lottie prep.                                              |
| `Expressions\Disable_Selected_Expressions.jsx`           | Disable expressions on selected properties.                                                                          | Does not delete expression text.                                                             |
| `Expressions\Enable_Selected_Expressions.jsx`            | Enable expressions on selected properties.                                                                           | Validate `canSetExpression`.                                                                 |
| `Expressions\Find_All_Expressions.jsx`                   | Scan project and report active expressions.                                                                          | Use before Lottie/export cleanup or debugging.                                               |
| `Expressions\Fix_Fresh_Pickwhip_Expression.jsx`          | Append `.value;` to expressions recently created with pickwhip.                                                      | Narrow repair script; avoid applying blindly.                                                |
| `Expressions\Set_Simple_Time_Remap_Loop.jsx`             | Enable time remapping, set correct keyframes, and apply `loopOut()` to loop a layer.                                 | Useful for footage/precomp loops. Watch last-frame offset.                                   |
| `Expressions\Toggle_Maintain_Scale_Expression.jsx`       | Toggle expression that maintains visual scale regardless of Z position.                                              | Useful for 3D camera scenes.                                                                 |
| `Expressions\Update_Expressions.jsx`                     | Replace exact old expression text with new expression across active comp layers.                                     | Normalizes line breaks before comparing. Use exact matching to avoid accidental replacement. |
| `Expressions\Update_Stroke_Weight_Expressions.jsx`       | Replace older maintain-stroke-width expression with a more robust version.                                           | Useful cleanup script; reports replacements.                                                 |

## Keyframe Scripts

| File                                                         | Extracted capability                                                                                               | Reuse notes                                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| `Keyframes\Add_Text_Animation.jsx`                           | Add text animator for selected text layers; supports characters, characters excluding spaces, words, and lines.    | Reuse for procedural typography. Use text animator match names when regenerating. |
| `Keyframes\Calculate_Difference_Between_Keyframe_Values.jsx` | Alert numeric difference between two keyframe values; only 1D supported.                                           | Diagnostic utility.                                                               |
| `Keyframes\Calculate_Frames_To_Selected_Keyframe.jsx`        | Alert frame distance between CTI and selected keyframe.                                                            | Timeline diagnostic.                                                              |
| `Keyframes\Fill_In_Keyframes.jsx`                            | Convert expressions to keyframes using command id `2639`, then remove redundant keys and set linear interpolation. | Fragile but useful expression bake workflow. Use one property at a time.          |
| `Keyframes\Invert_Selected_Keyframes.jsx`                    | Invert selected keyframe values.                                                                                   | Useful for mirrored motion/value reversal.                                        |
| `Keyframes\Keyframe_Current_Value_From_Expression.jsx`       | Add key at current time using evaluated post-expression value.                                                     | Good for baking one moment without removing expression.                           |
| `Keyframes\Keyframe_Group_Opacities.jsx`                     | Add a keyframe to all shape group opacity properties at CTI.                                                       | Useful after converting text to shape layers for Lottie workflows.                |
| `Keyframes\Make_Hold_Keyframes.jsx`                          | Convert selected keyframes to hold interpolation.                                                                  | Useful for stepped or cutout animation.                                           |
| `Keyframes\Multiply_Selected_Keyframes.jsx`                  | Multiply selected keyframe values by user-provided multiplier.                                                     | Confirm property dimensionality.                                                  |
| `Keyframes\Posterize_Keyframes.jsx`                          | Posterize selected keyframes onto 2s; warns that easing/spatial/labels are not preserved.                          | Use for deliberate limited-animation look, not precision cleanup.                 |
| `Keyframes\Remove_Redundant_Keyframes.jsx`                   | Remove repeated/redundant keyframes from selected properties.                                                      | Good after expression bake.                                                       |
| `Keyframes\Round_Selected_Keyframe_Values.jsx`               | Round selected 1D/2D/3D keyframe values to whole numbers.                                                          | Useful for pixel-snapping and cleanup.                                            |
| `Keyframes\Set_Spacial_In_Tanget.jsx`                        | Set selected spatial in tangent to 50% of distance from previous keyframe; intended for natural cursor paths.      | The source spelling is `Spacial`; use spatial-property guards.                    |

## Layer Scripts

| File                                                | Extracted capability                                                                                             | Reuse notes                                                                                                            |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `Layers\Add_3D_Break.jsx`                           | Add an adjustment layer above selected layer or at top to break AE 3D space.                                     | Useful compositing trick; name clearly so user understands it.                                                         |
| `Layers\Add_Comment_To_Selected_Layers.jsx`         | Add or remove a comment on selected layers.                                                                      | Layer metadata helper.                                                                                                 |
| `Layers\Add_Fill_With_Color_Cycle.jsx`              | Add Fill effect to selected layers, cycling red/green/blue/yellow/magenta/cyan.                                  | Useful for debug color coding. Use Fill match name and color child match name.                                         |
| `Layers\Append_To_Layer_Name.jsx`                   | Append text to beginning of selected layer names.                                                                | Naming helper; confirm if many layers.                                                                                 |
| `Layers\Calculate_Distance_Between_Layers.jsx`      | Calculate distance between two layers in 2D comp space or 3D world space; Alt forces 2D.                         | Useful for rigging/layout diagnostics.                                                                                 |
| `Layers\Connect_Two_Layers_With_A_Line.jsx`         | Create locked shape layer line between two selected layers using path expression and `toComp(anchorPoint)`.      | High-value reusable AE connector pattern.                                                                              |
| `Layers\Convert_SRT_To_Text_Layers.jsx`             | Select an SRT file and create timed text layers for subtitles.                                                   | File input workflow; apply styling after creation.                                                                     |
| `Layers\Create_Shapes_From_Text.jsx`                | Convert text layers to shape layers via menu command, skipping `DNU` and previously converted layers.            | Uses English menu command lookup, so fragile in Chinese AE. Prefer native `executeCommand` id only after verification. |
| `Layers\Create_Text_Layers_From_File.jsx`           | Add one text layer per line from selected text file.                                                             | Useful for batch captions/lists.                                                                                       |
| `Layers\Duplicate_Selected_Layer.jsx`               | Duplicate selected layer and move duplicate directly below original.                                             | Better timeline order control than plain duplicate.                                                                    |
| `Layers\Extend_All_Layers.jsx`                      | Extend every layer to comp duration in every comp.                                                               | Project-wide destructive timing change; confirm first.                                                                 |
| `Layers\Find_Specific_Effect.jsx`                   | Find instances of specified effects by match name in project.                                                    | Good diagnostic before conversion/removal.                                                                             |
| `Layers\Get_Selected_Layer_Duration.jsx`            | Alert selected layer duration in seconds.                                                                        | Diagnostic.                                                                                                            |
| `Layers\Hard_Solo_Layers.jsx`                       | Disable all non-selected layers, effectively hard-soloing selected layers.                                       | Destructive layer enable state change; use with undo/log.                                                              |
| `Layers\Lock_All_Layers.jsx`                        | Lock all layers in all comps.                                                                                    | Project-wide state change.                                                                                             |
| `Layers\Match_Layers_To_Newton_Layers.jsx`          | Copy position values and parent layers to matching Newton layers.                                                | Specialized Newton/Motion Boutique workflow.                                                                           |
| `Layers\Match_Selected_In_Point_To_Below.jsx`       | Match selected layers' in points to layer directly below.                                                        | Relies on timeline order.                                                                                              |
| `Layers\Match_Selected_Start_Time_To_Below.jsx`     | Match selected layers' start times to layer directly below.                                                      | Relies on timeline order.                                                                                              |
| `Layers\Parent_Closest_Layers.jsx`                  | Parent closest comp-space layer to each selected layer.                                                          | Useful with Newton outputs; validate parent direction before applying.                                                 |
| `Layers\Parent_Opacity.jsx`                         | Make a layer's opacity follow parent opacity, taking the lower value while still allowing independent animation. | Expression-control pattern for hierarchies.                                                                            |
| `Layers\Parent_Selected_Layers_To_Layers_Below.jsx` | Parent each selected layer to the layer directly below.                                                          | Timeline-order parenting.                                                                                              |
| `Layers\Posterize_Layer_Start_Time.jsx`             | Snap/posterize all layer start times in comp to 2s.                                                              | Limited-animation timing cleanup.                                                                                      |
| `Layers\Randomize_Layer_Start_Time.jsx`             | Randomly shift selected layer start times within a frame range.                                                  | Good for staggered animation; use deterministic seed if repeatability matters.                                         |
| `Layers\Rename_Puppet_Pins_For_DuIK.jsx`            | Rename selected arm puppet pins for DuIK; Alt switches to leg naming.                                            | Specialized rigging prep.                                                                                              |
| `Layers\Rename_Selected_Layers_With_Letters.jsx`    | Rename selected layers with appended letters.                                                                    | Batch naming.                                                                                                          |
| `Layers\Rename_Selected_Layers_With_Numbers.jsx`    | Rename selected layers with zero-padded numbers.                                                                 | Batch naming.                                                                                                          |
| `Layers\Rename_Selected_Layers_With_Text.jsx`       | Rename selected layers with per-character and character-count text.                                              | Useful for text/letter animation setups.                                                                               |
| `Layers\Rename_Selected_Matte_Layers.jsx`           | Rename selected layer to layer below plus `Matte`; assumes old track-matte order.                                | Does not detect true matte pairs.                                                                                      |
| `Layers\Replace_Grid_Rig_Control.jsx`               | Replace Flex Grid Rig Control null with a shape layer using default/unkeyframed values.                          | Specialized rig migration.                                                                                             |
| `Layers\Replace_Text_In_Layer_Name.jsx`             | Regex replace text in selected layer names.                                                                      | Good batch cleanup; ask for pattern/replacement.                                                                       |
| `Layers\Reset_Layer_Names.jsx`                      | Reset all layer names in active comp to source/default names.                                                    | Destructive naming change.                                                                                             |
| `Layers\Reset_Selected_Layer_Labels.jsx`            | Restore selected layer labels to AE preference defaults.                                                         | UI organization helper.                                                                                                |
| `Layers\Set_All_Layer_Labels_To_None.jsx`           | Set all active comp layer labels to `0` / None.                                                                  | Batch organization.                                                                                                    |
| `Layers\Set_All_Track_Matte_Labels.jsx`             | Set label color for track matte layers to label 16.                                                              | Assumes user's label 16 is black.                                                                                      |
| `Layers\Set_To_Average_Position.jsx`                | Set last selected layer to average position of other selected layers; Alt uses first selected layer.             | Useful alignment/layout utility.                                                                                       |
| `Layers\Set_Track_Matte_To_Above.jsx`               | Set selected layers' track matte to above layer using alpha/luma/inverted/no matte options.                      | Track matte API differs between AE versions; verify current AE support.                                                |
| `Layers\Shift_Layer_Start_Time.jsx`                 | Shift selected layer group so earliest start aligns with current time while maintaining relative offsets.        | Excellent stagger/timeline alignment utility.                                                                          |
| `Layers\Stick_Effect_To_Layer.jsx`                  | Help effects with position controls such as CC Bend It or Gradient Ramp stick to layer position.                 | Effect-position expression/control pattern.                                                                            |
| `Layers\Toggle_Difference_Blend_Mode.jsx`           | Toggle selected layers to Difference blend mode; Alt toggles back to Normal.                                     | Debug/alignment helper.                                                                                                |
| `Layers\Toggle_Puppet_Pins_As_Guide_Layers.jsx`     | Set DuIK Pin layers visible or guide-layer state.                                                                | Specialized rig cleanup.                                                                                               |
| `Layers\Toggle_Specific_Effects.jsx`                | Enable/disable specified effects by match name across current project.                                           | Project-wide effect toggler; add match names explicitly.                                                               |
| `Layers\Unlock_All_Layers.jsx`                      | Unlock all layers in all comps.                                                                                  | Project-wide state change.                                                                                             |
| `Layers\Zero_Position.jsx`                          | Zero selected layers' position while preserving visual placement through a wrapper shape/control pattern.        | Useful rigging/layout normalization.                                                                                   |

## Lottie Scripts

| File                                             | Extracted capability                                                                                                                                                                                                                                                                               | Reuse notes                                                                                                                                                                   |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Lottie\Convert_Drop_Shadows_For_Lottie.jsx`     | For a selected layer with Drop Shadow effects, duplicate shadow layers, remove effects, recolor fills/strokes, offset position by shadow direction/distance, remap opacity from 0-255 to 0-100, add Gaussian Blur at `softness * 0.75`, parent shadows to original, then disable original effects. | High-value Lottie compatibility workflow. Uses specific effect property match names: `ADBE Drop Shadow-0001..0005`, `ADBE Gaussian Blur 2-0001`, `ADBE Gaussian Blur 2-0003`. |
| `Lottie\Prepare_Layer_Out_Points_For_Lottie.jsx` | Extend layers active on the final comp frame one extra frame past the end to avoid Lottie export bugs.                                                                                                                                                                                             | Use when preparing Bodymovin exports.                                                                                                                                         |

## Marker Scripts

| File                                            | Extracted capability                                                                | Reuse notes                                                             |
| ----------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `Markers\Add_Markers_At_Out_Points.jsx`         | Add composition markers at each layer out point.                                    | Good for segment/navigation automation.                                 |
| `Markers\Add_Markers_At_Selected_Keyframes.jsx` | Add layer markers at selected keyframe times.                                       | Uses `selectedKeys` and walks parent properties up to the owning layer. |
| `Markers\Add_Markers_At_Work_Area.jsx`          | Add start/end markers at work area boundaries with comments.                        | Pair with Set Work Area To Markers.                                     |
| `Markers\Add_Markers_To_Selected_Layers.jsx`    | Add a marker to selected layers at current time with optional comment.              | Basic marker utility.                                                   |
| `Markers\Copy_Composition_Markers_To_Layer.jsx` | Copy all comp markers to selected layer, preserving duration, comments, and labels. | Good for transferring render/section metadata into precomps/layers.     |
| `Markers\Copy_Layer_Markers_To_Composition.jsx` | Copy all selected layer markers to composition markers.                             | Sister of comp-to-layer copy.                                           |

## Project Scripts

| File                                                    | Extracted capability                                                                                                                | Reuse notes                                                                               |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `Project\Add_Folder_To_Render_Queue.jsx`                | Add all comps from selected project folder and nested subfolders to Render Queue.                                                   | Confirm before queueing many renders.                                                     |
| `Project\Add_Labeled_Items_To_Render_Queue.jsx`         | Add comps with specified label to Render Queue.                                                                                     | Good batch render targeting by labels.                                                    |
| `Project\Add_Selected_Compositions_To_Render_Queue.jsx` | Add selected comps to Render Queue using specific output templates: H.264 MP4 or ProRes 4444 + Alpha for names containing `_TEXT_`. | Source requires templates to exist; adapt template names to local AE.                     |
| `Project\Add_Selection_To_New_Folder.jsx`               | Move selected project items into a new folder.                                                                                      | Project organization helper.                                                              |
| `Project\Clean_Render_Queue.jsx`                        | Remove all items from Render Queue.                                                                                                 | Ask before clearing a queue.                                                              |
| `Project\Clean_Selected_Folder.jsx`                     | Remove unused items from selected project folders.                                                                                  | Destructive project cleanup; confirm.                                                     |
| `Project\Clean_Up_Overlord_Folder.jsx`                  | Clean Overlord source folder by moving files not imported into project to a desktop `Deleted` folder.                               | File-management action; always confirm exact folder and behavior before running/adapting. |
| `Project\Export_Text_To_File.jsx`                       | Export selected text layers to `export.txt` on Desktop.                                                                             | Use explicit output path instead of hardcoded Desktop for Codex work.                     |
| `Project\Manually_Render_PNG_Sequence.jsx`              | Render work area frame-by-frame to PNG files using `saveFrameToPng`.                                                                | Undocumented export method; use only when user requests PNG sequence or preview.          |
| `Project\Merge_Imported_Selected_Items.jsx`             | Merge imported selected items into matching existing folder.                                                                        | Project organization workflow.                                                            |
| `Project\Remove_All_Proxies.jsx`                        | Remove all proxies in current project.                                                                                              | Confirm; can affect playback/render setup.                                                |
| `Project\Rename_Selected_Layer_Source.jsx`              | Rename source item of selected layer.                                                                                               | Rename only after confirming naming scheme.                                               |
| `Project\Rename_Selected_Project_Items.jsx`             | Rename selected project items with zero-padded numbers.                                                                             | Batch naming.                                                                             |
| `Project\Rename_Source_To_Layer_Name.jsx`               | Rename selected source item to match layer name.                                                                                    | Useful after importing many source files.                                                 |
| `Project\Replace_Text_In_Project_Item_Name.jsx`         | Regex replace text in selected project item names.                                                                                  | Ask for exact pattern/replacement.                                                        |
| `Project\Reset_Imported_Item_Names.jsx`                 | Reset selected imported item names after file relink/name change.                                                                   | Good media management helper.                                                             |
| `Project\Reveal_Project_File.jsx`                       | Reveal saved project file in Finder/Explorer.                                                                                       | UI/file explorer side effect; not usually needed for automated generation.                |
| `Project\Set_All_Item_Labels_To_None.jsx`               | Set all project item labels to `0` / None.                                                                                          | Organization reset.                                                                       |
| `Project\Set_Proxies_From_Folder.jsx`                   | Set proxies for project comps from selected folder.                                                                                 | Requires folder/file naming match.                                                        |
| `Project\Toggle_Preserve_Nested_Frame_Rate.jsx`         | Toggle `preserveNestedFrameRate` for every comp; Alt disables.                                                                      | Important render/timing behavior; confirm.                                                |
| `Project\Toggle_Timecode_And_Start_Frames.jsx`          | Toggle comp display start time/frame mode between frame 0 and frame 1 conventions.                                                  | Project-wide metadata/timeline display change.                                            |

## Property Scripts

| File                                                  | Extracted capability                                                                                                                               | Reuse notes                                                                                             |
| ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `Properties\Add_Additional_Animation_Control.jsx`     | Add an additional animation controller to the layer for selected property.                                                                         | Expression-controller pattern.                                                                          |
| `Properties\Add_Properties_To_Essential_Graphics.jsx` | Add selected properties to Essential Graphics; expression-controller effects use effect names.                                                     | Use `canAddToMotionGraphicsTemplate`.                                                                   |
| `Properties\Add_Visibility_Controller.jsx`            | Add checkbox controller that drives selected layer visibility through opacity.                                                                     | Reusable controller pattern for templates.                                                              |
| `Properties\Build_Dropdown_Selector.jsx`              | Create controller layer with Dropdown Control that toggles visibility of all layers; add dropdown to Essential Graphics.                           | Good template-building pattern.                                                                         |
| `Properties\Estimate_Path_Length.jsx`                 | Add sliders to estimate selected path length; sample count controls accuracy.                                                                      | Uses expression/sampling approximation.                                                                 |
| `Properties\Export_Path_Points.jsx`                   | Export selected path points to a text file on Desktop.                                                                                             | Use explicit workspace output path instead of Desktop.                                                  |
| `Properties\Expose_Essential_Properties.jsx`          | Expose nested Essential Properties by creating matching expression controllers on the layer and assigning expressions back to original properties. | Does not support Dropdown Menu Control. Map value types to Slider/Angle/Point/Color controls.           |
| `Properties\Flip_Path.jsx`                            | Flip shape or mask path horizontally/vertically; supports static and keyframed paths.                                                              | Useful for mirrored shape animation.                                                                    |
| `Properties\Increase_All_Pin_Sizes.jsx`               | Increase DuIK Pin layer scale across project by percent.                                                                                           | Specialized rig operation.                                                                              |
| `Properties\Move_Parametric_Anchor_Point.jsx`         | Add expressions to rectangle/ellipse Position properties to lock resizing to a selected side/corner.                                               | High-value shape rigging pattern; target `ADBE Vector Rect Position` or `ADBE Vector Ellipse Position`. |
| `Properties\Remove_Disabled_Strokes.jsx`              | Remove disabled Stroke properties from selected shape layers.                                                                                      | Lottie cleanup workflow step.                                                                           |
| `Properties\Rename_Selected_Properties.jsx`           | Rename selected properties, appending numbers as needed.                                                                                           | Shape/template organization.                                                                            |
| `Properties\Round_Selected_Property_Values.jsx`       | Round selected 1D/2D/3D property values to whole numbers.                                                                                          | Pixel snapping / cleanup.                                                                               |
| `Properties\Separate_Size_Dimensions.jsx`             | Add X Size and Y Size sliders to control parametric rectangle/ellipse dimensions separately.                                                       | Useful when AE size property is a combined 2D value.                                                    |
| `Properties\Set_New_Color.jsx`                        | Compute and set a new color based on original color, Multiply/Screen blend mode, and opacity with ScriptUI preview.                                | Useful color-calculation pattern; replace dialog with explicit blend mode/opacity args.                 |
| `Properties\Swap_Property_Values.jsx`                 | Swap values of two selected properties with matching type.                                                                                         | Validate property type and dimensions.                                                                  |
| `Properties\Swap_Selected_Property_Dimensions.jsx`    | Swap dimension values, e.g. rectangle x/y size.                                                                                                    | Simple 2D/3D array manipulation.                                                                        |
| `Properties\Toggle_Puppet_On_Transparent.jsx`         | Toggle Puppet effect `On Transparent` checkbox project-wide.                                                                                       | Useful puppet cleanup.                                                                                  |
| `Properties\Toggle_Puppet_Pin_Types.jsx`              | Toggle selected puppet pins between Position and Advanced.                                                                                         | Puppet rig utility.                                                                                     |

## Selection Scripts

| File                                      | Extracted capability                                        | Reuse notes                                                                        |
| ----------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `Selection\Layer_Selection_Get.jsx`       | Restore a previously stored selection state in active comp. | Sister script to selection set; source likely stores state in comp/layer metadata. |
| `Selection\Layer_Selection_Set.jsx`       | Store current selected layers as a selection state.         | Useful when multiple scripts require repeated selection.                           |
| `Selection\Select_All_Children.jsx`       | Select unlocked layers parented to selected layer.          | Hierarchy utility.                                                                 |
| `Selection\Select_Disabled_Layers.jsx`    | Select unlocked disabled layers.                            | Cleanup utility.                                                                   |
| `Selection\Select_Guide_Layers.jsx`       | Select guide layers.                                        | Organization utility.                                                              |
| `Selection\Select_Layers_Below_Label.jsx` | Select layers directly below label 16 layers.               | Track-matte workflow based on user label convention.                               |
| `Selection\Select_Non-Null_Layers.jsx`    | Select unlocked layers that are not nulls.                  | Filtering helper.                                                                  |
| `Selection\Select_Parent_Layer.jsx`       | Select parent of currently selected layer.                  | Hierarchy navigation.                                                              |
| `Selection\Select_Random_Layers.jsx`      | Randomly select unlocked layers.                            | Creative/randomization helper.                                                     |
| `Selection\Select_Shape_Layers.jsx`       | Select all shape layers in current comp.                    | Common prep before shape cleanup.                                                  |
| `Selection\Select_Text_Layers.jsx`        | Select all text layers in current comp.                     | Common prep before text conversion.                                                |
| `Selection\Select_Unparented_Layers.jsx`  | Select unlocked layers without a parent.                    | Hierarchy cleanup.                                                                 |

## Utility Scripts

| File                                       | Extracted capability                                                                                          | Reuse notes                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `Utilities\Alert_Selected_Layer_Index.jsx` | Alert selected layer index.                                                                                   | Small diagnostic.                                                                                 |
| `Utilities\Frame_Navigator.jsx`            | ScriptUI panel for jumping to comp/work-area start/end and stepping frames; Alt = 1 frame, Shift = 10 frames. | UI workflow helper; for automation set `comp.time` directly.                                      |
| `Utilities\Milliseconds_To_Frames.jsx`     | ScriptUI utility to convert milliseconds to frames and frames to milliseconds.                                | Use formulas directly in scripts: `frames = seconds * frameRate`; `seconds = frames / frameRate`. |

## High-Value Recipes To Reuse In New AE Animation Scripts

### Editable background that follows comp resize

- Create shape layer.
- Set layer position expression to `posterizeTime(0); [thisComp.width / 2, thisComp.height / 2];`
- Add rectangle path and fill.
- Set rect size expression to `posterizeTime(0); [thisComp.width, thisComp.height];`
- Move layer to end and lock/guide if it should not be edited.

### Connector line between two layers

- Create shape layer at `[0, 0]`.
- Add Stroke and Path.
- Path expression builds vertices from `thisComp.layer(name).toComp(anchorPoint)`.
- Use `createPath(vertices, [], [], false);`.
- Lock the connector layer if it should be procedural.

### Lottie-safe Drop Shadow conversion

- Find Drop Shadow effects by `effect.matchName === "ADBE Drop Shadow"`.
- Read color, opacity, direction, distance, softness from `ADBE Drop Shadow-0001..0005`.
- Duplicate layer for each shadow.
- Remove all effects from duplicate.
- Recursively recolor vector fill/stroke color properties.
- Convert opacity from 0-255 to 0-100.
- Offset X/Y by `distance * sin(direction)` and `-distance * cos(direction)`.
- Add Gaussian Blur 2; set Blurriness to `softness * 0.75`; set Repeat Edge Pixels false.
- Parent shadow duplicate to original and disable original Drop Shadow effects.

### Shape text to Lottie cleanup

Source workflow:

1. Convert text layers to shape layers.
2. Remove disabled strokes.
3. Keyframe group opacities at current time.

In Chinese AE, avoid relying on English `Layer > Create > Create Shapes from Text` command unless command id is verified.

### Work area from markers

- Create start/end comp markers at work area boundaries.
- Later read marker times and set `comp.workAreaStart` and `comp.workAreaDuration`.
- Use this to make segment renders repeatable.

### Expression bake and cleanup

- Select one property.
- Temporarily set `property.expression = "value;"` or preserve current expression.
- Run Convert Expression To Keyframes only if command id is verified.
- Remove redundant keys by comparing previous/current/next values.
- Set interpolation explicitly.

### Essential Graphics exposure

- For each Essential Property, inspect `propertyValueType` and units.
- Add matching expression controller to the precomp layer.
- Set controller value to current EP value.
- Set original EP expression to read controller value.
- Add controller to Essential Graphics if allowed.

## Safety And Adaptation Notes

- Source scripts are useful but not uniformly production-safe. Some rely on active selection, hardcoded labels, local Desktop paths, modifier keys, English menu command names, and interactive ScriptUI.
- For unattended Codex AE work, convert interactive prompts to explicit variables, log every result, and save to workspace/output paths.
- Do not run cleanup scripts that remove project items, clear render queue, move filesystem files, remove proxies, or change all comp durations/frame rates without user confirmation.
- For AE 2025 Chinese UI, prefer match names and inspect properties before setting values.
- For generated animation, borrow the shape/text/keyframe/controller patterns, not necessarily the exact user-dialog workflows.
