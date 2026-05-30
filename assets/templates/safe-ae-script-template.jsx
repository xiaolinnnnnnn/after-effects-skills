/* Safe After Effects JSX template for Codex-generated automation.
   Copy into the workspace, customize OUTPUT_DIR/PROJECT_PATH/LOG_PATH, then run with scripts/run-ae-script.ps1. */
(function aeCodexTemplate() {
    var OUTPUT_DIR = "C:/Users/20235/Documents/Codex/outputs";
    var PROJECT_PATH = OUTPUT_DIR + "/codex_ae_project.aep";
    var LOG_PATH = OUTPUT_DIR + "/codex_ae_log.txt";
    var undoOpen = false;

    function writeText(path, text, append) {
        var f = new File(path);
        f.encoding = "UTF-8";
        f.open(append ? "a" : "w");
        f.write(text);
        f.close();
    }

    function log(message) {
        writeText(LOG_PATH, message + "\n", true);
    }

    function prop(parent, matchName) {
        if (!parent) {
            return null;
        }
        try {
            return parent.property(matchName);
        } catch (err) {
            return null;
        }
    }

    function requireProp(parent, matchName, label) {
        var p = prop(parent, matchName);
        if (!p) {
            throw new Error("Missing property " + (label || matchName) + " / " + matchName);
        }
        return p;
    }

    function xform(layer, matchName) {
        return requireProp(requireProp(layer, "ADBE Transform Group", "Transform"), matchName, matchName);
    }

    function easeArrayFor(propertyObject, influence) {
        var dims = 1;
        try {
            if (propertyObject.value instanceof Array) {
                dims = propertyObject.value.length;
            }
        } catch (err) {
            dims = 1;
        }
        var arr = [];
        for (var i = 0; i < dims; i += 1) {
            arr.push(new KeyframeEase(0, influence));
        }
        return arr;
    }

    function easeKeys(propertyObject, influence) {
        if (!propertyObject || propertyObject.numKeys < 1) {
            return;
        }
        var ease = easeArrayFor(propertyObject, influence || 72);
        for (var i = 1; i <= propertyObject.numKeys; i += 1) {
            try {
                propertyObject.setInterpolationTypeAtKey(i, KeyframeInterpolationType.BEZIER, KeyframeInterpolationType.BEZIER);
                propertyObject.setTemporalEaseAtKey(i, ease, ease);
            } catch (err) {
                log("Ease skipped for key " + i + ": " + err.toString());
            }
        }
    }

    function animate(propertyObject, keys, influence) {
        if (!propertyObject) {
            throw new Error("animate() received a null property");
        }
        for (var i = 0; i < keys.length; i += 1) {
            propertyObject.setValueAtTime(keys[i][0], keys[i][1]);
        }
        easeKeys(propertyObject, influence || 72);
    }

    function addRect(comp, name, size, color, position, roundness) {
        var layer = comp.layers.addShape();
        layer.name = name;
        var root = requireProp(layer, "ADBE Root Vectors Group", "Shape Contents");
        var group = root.addProperty("ADBE Vector Group");
        var vectors = requireProp(group, "ADBE Vectors Group", "Shape Group Contents");
        var rect = vectors.addProperty("ADBE Vector Shape - Rect");
        requireProp(rect, "ADBE Vector Rect Size", "Rect Size").setValue(size);
        requireProp(rect, "ADBE Vector Rect Roundness", "Rect Roundness").setValue(roundness || 0);
        var fill = vectors.addProperty("ADBE Vector Graphic - Fill");
        requireProp(fill, "ADBE Vector Fill Color", "Fill Color").setValue(color);
        xform(layer, "ADBE Position").setValue(position);
        layer.motionBlur = true;
        return layer;
    }

    function addEllipse(comp, name, size, color, position, strokeWidth) {
        var layer = comp.layers.addShape();
        layer.name = name;
        var root = requireProp(layer, "ADBE Root Vectors Group", "Shape Contents");
        var group = root.addProperty("ADBE Vector Group");
        var vectors = requireProp(group, "ADBE Vectors Group", "Shape Group Contents");
        var ellipse = vectors.addProperty("ADBE Vector Shape - Ellipse");
        requireProp(ellipse, "ADBE Vector Ellipse Size", "Ellipse Size").setValue(size);
        if (strokeWidth && strokeWidth > 0) {
            var stroke = vectors.addProperty("ADBE Vector Graphic - Stroke");
            requireProp(stroke, "ADBE Vector Stroke Color", "Stroke Color").setValue(color);
            requireProp(stroke, "ADBE Vector Stroke Width", "Stroke Width").setValue(strokeWidth);
        } else {
            var fill = vectors.addProperty("ADBE Vector Graphic - Fill");
            requireProp(fill, "ADBE Vector Fill Color", "Fill Color").setValue(color);
        }
        xform(layer, "ADBE Position").setValue(position);
        layer.motionBlur = true;
        return layer;
    }

    function addText(comp, text, name, fontSize, color, position) {
        var layer = comp.layers.addText(text);
        layer.name = name;
        var source = requireProp(requireProp(layer, "ADBE Text Properties", "Text Properties"), "ADBE Text Document", "Source Text");
        var doc = source.value;
        doc.fontSize = fontSize;
        doc.fillColor = color;
        doc.applyFill = true;
        doc.applyStroke = false;
        doc.justification = ParagraphJustification.CENTER_JUSTIFY;
        try {
            doc.font = "MicrosoftYaHei";
        } catch (err) {
        }
        source.setValue(doc);
        xform(layer, "ADBE Position").setValue(position);
        layer.motionBlur = true;
        return layer;
    }

    function dumpProperties(group, indent) {
        indent = indent || "";
        if (!group || !group.numProperties) {
            return "";
        }
        var lines = "";
        for (var i = 1; i <= group.numProperties; i += 1) {
            var p = group.property(i);
            lines += indent + i + ": " + p.name + " | " + p.matchName + " | " + p.propertyValueType + "\n";
            if (p.numProperties && p.numProperties > 0) {
                lines += dumpProperties(p, indent + "  ");
            }
        }
        return lines;
    }

    try {
        writeText(LOG_PATH, "Starting AE script\n", false);
        app.beginUndoGroup("Codex AE Automation");
        undoOpen = true;

        if (!app.project) {
            app.newProject();
        }

        var project = app.project;
        var comp = project.items.addComp("Codex_Template_Comp", 1920, 1080, 1, 6, 30);
        comp.motionBlur = true;
        comp.shutterAngle = 180;
        comp.bgColor = [0.03, 0.035, 0.045];

        var bg = comp.layers.addSolid([0.03, 0.035, 0.045], "Background", 1920, 1080, 1, comp.duration);
        var ring = addEllipse(comp, "Ring", [420, 420], [0.0, 0.75, 0.72], [960, 520], 18);
        var title = addText(comp, "AE MOTION", "Title", 128, [0.96, 0.98, 1.0], [960, 500]);
        var bar = addRect(comp, "Accent Bar", [420, 24], [1.0, 0.36, 0.18], [-300, 710], 16);

        animate(xform(ring, "ADBE Scale"), [[0.2, [0, 0]], [1.1, [110, 110]], [1.7, [100, 100]]], 82);
        animate(xform(ring, "ADBE Rotate Z"), [[0.2, 0], [5.6, 270]], 70);
        animate(xform(title, "ADBE Opacity"), [[0.7, 0], [1.2, 100], [5.0, 100], [5.7, 0]], 80);
        animate(xform(bar, "ADBE Position"), [[0.35, [-300, 710]], [1.15, [960, 710]], [5.1, [960, 710]], [5.8, [2300, 710]]], 78);

        comp.time = 1.6;
        comp.openInViewer();
        project.save(new File(PROJECT_PATH));

        log("Saved project: " + PROJECT_PATH);
        log("Property dump for title:\n" + dumpProperties(title, ""));

        app.endUndoGroup();
        undoOpen = false;
    } catch (err) {
        try {
            log("ERROR: " + err.toString() + " line " + (err.line || "unknown"));
        } catch (logErr) {
        }
        try {
            if (undoOpen) {
                app.endUndoGroup();
            }
        } catch (endErr) {
        }
        throw err;
    }
}());
