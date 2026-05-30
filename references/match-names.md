# AE Match Names and Safe Property Access

Use match names for reliable scripting across UI languages. The official Match Names pages list layer, shape, text, and first-party effect names. This reference keeps the high-value subset for animation generation.

# 3d Layer Match Names

---

## Plane

| Match Name                  | Display Name (EN) |
| --------------------------- | ----------------- |
| `ADBE Plane Options Group`  | Geometry Options  |
| `ADBE Plane Curvature`      | Curvature         |
| `ADBE Plane Subdivision`    | Segments          |
| `ADBE Extrsn Options Group` | Geometry Options  |
| `ADBE Bevel Depth`          | Bevel Depth       |
| `ADBE Hole Bevel Depth`     | Hole Bevel Depth  |
| `ADBE Extrsn Depth`         | Extrusion Depth   |

---

## Materials

| Match Name                      | Display Name (EN)    |
| ------------------------------- | -------------------- |
| `ADBE Material Options Group`   | Material Options     |
| `ADBE Light Transmission`       | Light Transmission   |
| `ADBE Ambient Coefficient`      | Ambient              |
| `ADBE Diffuse Coefficient`      | Diffuse              |
| `ADBE Specular Coefficient`     | Specular Intensity   |
| `ADBE Shininess Coefficient`    | Specular Shininess   |
| `ADBE Metal Coefficient`        | Metal                |
| `ADBE Reflection Coefficient`   | Reflection Intensity |
| `ADBE Glossiness Coefficient`   | Reflection Sharpness |
| `ADBE Fresnel Coefficient`      | Reflection Rolloff   |
| `ADBE Transparency Coefficient` | Transparency         |
| `ADBE Transp Rolloff`           | Transparency Rolloff |
| `ADBE Index of Refraction`      | Index of Refraction  |

# AVLayer Match Names

---

## Layer

| Match Name      | Display Name (EN) |
| --------------- | ----------------- |
| `ADBE AV Layer` |                   |

---

## Top-Level

| Match Name             | Display Name (EN)    |
| ---------------------- | -------------------- |
| `ADBE Marker`          | Marker               |
| `ADBE Time Remapping`  | Time Remap           |
| `ADBE MTrackers`       | Motion Trackers      |
| `ADBE Mask Parade`     | Masks                |
| `ADBE Effect Parade`   | Effects              |
| `ADBE Layer Overrides` | Essential Properties |

---

## Transform

| Match Name             | Display Name (EN) |
| ---------------------- | ----------------- |
| `ADBE Transform Group` | Transform         |
| `ADBE Anchor Point`    | Anchor Point      |
| `ADBE Position`        | Position          |
| `ADBE Position_0`      | X Position        |
| `ADBE Position_1`      | Y Position        |
| `ADBE Position_2`      | Z Position        |
| `ADBE Scale`           | Scale             |
| `ADBE Orientation`     | Orientation       |
| `ADBE Rotate X`        | X Rotation        |
| `ADBE Rotate Y`        | Y Rotation        |
| `ADBE Rotate Z`        | Z Rotation        |
| `ADBE Opacity`         | Opacity           |

---

## Audio

| Match Name          | Display Name (EN) |
| ------------------- | ----------------- |
| `ADBE Audio Group`  | Audio             |
| `ADBE Audio Levels` | Audio Levels      |

---

## Essential Properties

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Layer Source Alternate` |                   |

# Camera Layer Match Names

---

## Layer

| Match Name          | Display Name (EN) |
| ------------------- | ----------------- |
| `ADBE Camera Layer` |                   |

---

## Camera

| Match Name                   | Display Name (EN) |
| ---------------------------- | ----------------- |
| `ADBE Camera Options Group`  | Camera Options    |
| `ADBE Camera Zoom`           | Zoom              |
| `ADBE Camera Depth of Field` | Depth of Field    |
| `ADBE Camera Focus Distance` | Focus Distance    |
| `ADBE Camera Aperture`       | Aperture          |
| `ADBE Camera Blur Level`     | Blur Level        |

---

## Iris

| Match Name                        | Display Name (EN)       |
| --------------------------------- | ----------------------- |
| `ADBE Iris Shape`                 | Iris Shape              |
| `ADBE Iris Rotation`              | Iris Rotation           |
| `ADBE Iris Roundness`             | Iris Roundness          |
| `ADBE Iris Aspect Ratio`          | Iris Aspect Ratio       |
| `ADBE Iris Diffraction Fringe`    | Iris Diffraction Fringe |
| `ADBE Iris Highlight Gain`        | Highlight Gain          |
| `ADBE Iris Highlight Threshold`   | Highlight Threshold     |
| `ADBE Iris Hightlight Saturation` | Highlight Saturation    |

# First-Party Effect Match Names

This list also details effect Bits Per Channel (BPC) and the AE version GPU-acceleration was introduced, if applicable.

---

## 3D Channel

| Match Name                 | Display Name (EN)  | BPC | GPU |
| -------------------------- | ------------------ | --- | --- |
| `ADBE AUX CHANNEL EXTRACT` | 3D Channel Extract | 8   |     |
| `ADBE DEPTH MATTE`         | Depth Matte        | 32  |     |
| `ADBE DEPTH FIELD`         | Depth of Field     | 32  |     |
| `EXtractoR`                | EXtractoR          | 32  |     |
| `ADBE FOG_3D`              | Fog 3D             | 32  |     |
| `ADBE ID MATTE`            | ID Matte           | 32  |     |
| `IDentifier`               | IDentifier         | 32  |     |

---

## Audio

| Match Name              | Display Name (EN) | BPC | GPU |
| ----------------------- | ----------------- | --- | --- |
| `ADBE Aud Reverse`      | Backwards         |     |     |
| `ADBE Aud BT`           | Bass & Treble     |     |     |
| `ADBE Aud Delay`        | Delay             |     |     |
| `ADBE Aud_Flange`       | Flange & Chorus   |     |     |
| `ADBE Aud HiLo`         | High-Low Pass     |     |     |
| `ADBE Aud Modulator`    | Modulator         |     |     |
| `ADBE Param EQ`         | Parametric EQ     |     |     |
| `ADBE Aud Reverb`       | Reverb            |     |     |
| `ADBE Aud Stereo Mixer` | Stereo Mixer      |     |     |
| `ADBE Aud Tone`         | Tone              |     |     |

---

## Blur & Sharpen

| Match Name               | Display Name (EN)   | BPC | GPU  |
| ------------------------ | ------------------- | --- | ---- |
| `ADBE Bilateral`         | Bilateral Blur      | 32  |      |
| `ADBE Camera Lens Blur`  | Camera Lens Blur    | 32  |      |
| `ADBE CameraShakeDeblur` | Camera-Shake Deblur | 32  |      |
| `CS CrossBlur`           | CC Cross Blur       | 32  |      |
| `CC Radial Blur`         | CC Radial Blur      | 32  |      |
| `CC Radial Fast Blur`    | CC Radial Fast Blur | 16  |      |
| `CC Vector Blur`         | CC Vector Blur      | 16  |      |
| `ADBE Channel Blur`      | Channel Blur        | 32  |      |
| `ADBE Compound Blur`     | Compound Blur       | 32  |      |
| `ADBE Motion Blur`       | Directional Blur    | 32  | 15.0 |
| `ADBE Box Blur2`         | Fast Box Blur       | 32  | 14.2 |
| `ADBE Gaussian Blur 2`   | Gaussian Blur       | 32  | 13.8 |
| `ADBE Radial Blur`       | Radial Blur         | 32  |      |
| `ADBE Sharpen`           | Sharpen             | 32  | 13.8 |
| `ADBE Smart Blur`        | Smart Blur          | 16  |      |
| `ADBE Unsharp Mask2`     | Unsharp Mask        | 32  |      |

---

## Channel

| Match Name                  | Display Name (EN)    | BPC | GPU  |
| --------------------------- | -------------------- | --- | ---- |
| `ADBE Arithmetic`           | Arithmetic           | 8   |      |
| `ADBE Blend`                | Blend                | 16  |      |
| `ADBE Calculations`         | Calculations         | 16  |      |
| `CC Composite`              | CC Composite         | 16  |      |
| `ADBE Channel Combiner`     | Channel Combiner     | 8   |      |
| `ADBE Compound Arithmetic`  | Compound Arithmetic  | 8   |      |
| `ADBE Invert`               | Invert               | 32  | 14.1 |
| `ADBE Minimax`              | Minimax              | 16  |      |
| `ADBE Remove Color Matting` | Remove Color Matting | 32  |      |
| `ADBE Set Channels`         | Set Channels         | 16  |      |
| `ADBE Set Matte3`           | Set Matte            | 32  |      |
| `ADBE Shift Channels`       | Shift Channels       | 32  |      |
| `ADBE Solid Composite`      | Solid Composite      | 32  |      |

---

## CINEMA 4D

| Match Name         | Display Name (EN) | BPC | GPU |
| ------------------ | ----------------- | --- | --- |
| `CINEMA 4D Effect` | CINEWARE          | 32  |     |

---

## Color Correction

| Match Name                     | Display Name (EN)            | BPC | GPU  |
| ------------------------------ | ---------------------------- | --- | ---- |
| `ADBE AutoColor`               | Auto Color                   | 16  |      |
| `ADBE AutoContrast`            | Auto Contrast                | 16  |      |
| `ADBE AutoLevels`              | Auto Levels                  | 16  |      |
| `ADBE Black&White`             | Black & White                | 16  |      |
| `ADBE Brightness & Contrast 2` | Brightness & Contrast        | 32  | 14.1 |
| `ADBE Broadcast Colors`        | Broadcast Colors             | 8   |      |
| `CS Color Neutralizer`         | CC Color Neutralizer         | 32  |      |
| `CC Color Offset`              | CC Color Offset              | 16  |      |
| `CS Kernel`                    | CC Kernel                    | 32  |      |
| `CC Toner`                     | CC Toner                     | 32  |      |
| `ADBE Change Color`            | Change Color                 | 16  |      |
| `ADBE Change To Color`         | Change to Color              | 16  |      |
| `ADBE CHANNEL MIXER`           | Channel Mixer                | 32  |      |
| `ADBE Color Balance 2`         | Color Balance                | 16  |      |
| `ADBE Color Balance (HLS)`     | Color Balance (HLS)          | 16  |      |
| `ADBE Color Link`              | Color Link                   | 8   |      |
| `ADBE Deflicker`               | Color Stabilizer             | 16  |      |
| `APC Colorama`                 | Colorama                     | 16  |      |
| `ADBE CurvesCustom`            | Curves                       | 32  |      |
| `ADBE Equalize`                | Equalize                     | 8   |      |
| `ADBE Exposure2`               | Exposure                     | 32  |      |
| `ADBE Gamma/Pedestal/Gain2`    | Gamma/Pedestal/Gain          | 8   |      |
| `ADBE HUE SATURATION`          | Hue/Saturation               | 32  | 14.1 |
| `ADBE Leave Color`             | Leave Color                  | 8   |      |
| `ADBE Easy Levels2`            | Levels                       | 32  | 14.2 |
| `ADBE Pro Levels2`             | Levels (Individual Controls) | 32  | 14.2 |
| `ADBE Lumetri`                 | Lumetri Color                | 32  | 13.8 |
| `ADBE PhotoFilterPS`           | Photo Filter                 | 32  |      |
| `ADBE PS Arbitrary Map`        | PS Arbitrary Map             | 8   |      |
| `ADBE SelectiveColor`          | Selective Color              | 16  |      |
| `ADBE ShadowHighlight`         | Shadow/Highlight             | 16  |      |
| `ADBE Tint`                    | Tint                         | 32  | 14.1 |
| `ADBE Tritone`                 | Tritone                      | 32  |      |
| `ADBE Vibrance`                | Vibrance                     | 16  |      |

---

## Distort

| Match Name                 | Display Name (EN)         | BPC | GPU  |
| -------------------------- | ------------------------- | --- | ---- |
| `ADBE BEZMESH`             | Bezier Warp               | 16  |      |
| `ADBE Bulge`               | Bulge                     | 16  |      |
| `CC Bend It`               | CC Bend It                | 16  |      |
| `CC Bender`                | CC Bender                 | 16  |      |
| `CC Blobbylize`            | CC Blobbylize             | 16  |      |
| `CC Flo Motion`            | CC Flo Motion             | 32  |      |
| `CC Griddler`              | CC Griddler               | 32  |      |
| `CC Lens`                  | CC Lens                   | 32  |      |
| `CC Page Turn`             | CC Page Turn              | 16  |      |
| `CC Power Pin`             | CC Power Pin              | 32  |      |
| `CC Ripple Pulse`          | CC Ripple Pulse           | 32  |      |
| `CC Slant`                 | CC Slant                  | 16  |      |
| `CC Smear`                 | CC Smear                  | 32  |      |
| `CC Split`                 | CC Split                  | 16  |      |
| `CC Split 2`               | CC Split 2                | 16  |      |
| `CC Tiler`                 | CC Tiler                  | 32  |      |
| `ADBE Corner Pin`          | Corner Pin                | 32  |      |
| `ADBE Upscale`             | Detail-preserving Upscale | 32  |      |
| `ADBE Displacement Map`    | Displacement Map          | 32  |      |
| `ADBE LIQUIFY`             | Liquify                   | 16  |      |
| `ADBE Magnify`             | Magnify                   | 8   |      |
| `ADBE MESH WARP`           | Mesh Warp                 | 16  |      |
| `ADBE Mirror`              | Mirror                    | 16  |      |
| `ADBE Offset`              | Offset                    | 16  | 14.2 |
| `ADBE Optics Compensation` | Optics Compensation       | 32  |      |
| `ADBE Polar Coordinates`   | Polar Coordinates         | 32  |      |
| `ADBE RESHAPE`             | Reshape                   | 16  |      |
| `ADBE Ripple`              | Ripple                    | 16  |      |
| `ADBE Rolling Shutter`     | Rolling Shutter Repair    | 32  |      |
| `ADBE SCHMEAR`             | Smear                     | 16  |      |
| `ADBE Spherize`            | Spherize                  | 16  |      |
| `ADBE Geometry2`           | Transform                 | 32  | 15.0 |
| `ADBE Turbulent Displace`  | Turbulent Displace        | 32  |      |
| `ADBE Twirl`               | Twirl                     | 32  |      |
| `ADBE WRPMESH`             | Warp                      | 16  |      |
| `ADBE SubspaceStabilizer`  | Warp Stabilizer VFX       | 32  |      |
| `ADBE Wave Warp`           | Wave Warp                 | 16  |      |

---

## Expression Controls

| Match Name              | Display Name (EN) | BPC | GPU |
| ----------------------- | ----------------- | --- | --- |
| `ADBE Point3D Control`  | 3D Point Control  | 32  |     |
| `ADBE Angle Control`    | Angle Control     | 32  |     |
| `ADBE Checkbox Control` | Checkbox Control  | 32  |     |
| `ADBE Color Control`    | Color Control     | 32  |     |
| `ADBE Dropdown Control` | Dropdown Control  | 32  |     |
| `ADBE Layer Control`    | Layer Control     | 32  |     |
| `ADBE Point Control`    | Point Control     | 32  |     |
| `ADBE Slider Control`   | Slider Control    | 32  |     |

---

## Generate

| Match Name             | Display Name (EN)  | BPC | GPU  |
| ---------------------- | ------------------ | --- | ---- |
| `ADBE 4ColorGradient`  | 4-Color Gradient   | 16  |      |
| `ADBE Lightning 2`     | Advanced Lightning | 8   |      |
| `ADBE AudSpect`        | Audio Spectrum     | 32  |      |
| `ADBE AudWave`         | Audio Waveform     | 32  |      |
| `ADBE Laser`           | Beam               | 32  |      |
| `CC Glue Gun`          | CC Glue Gun        | 32  |      |
| `CC Light Burst 2.5`   | CC Light Burst 2.5 | 32  |      |
| `CC Light Rays`        | CC Light Rays      | 32  |      |
| `CC Light Sweep`       | CC Light Sweep     | 32  |      |
| `CS Threads`           | CC Threads         | 32  |      |
| `ADBE Cell Pattern`    | Cell Pattern       | 8   |      |
| `ADBE Checkerboard`    | Checkerboard       | 8   |      |
| `ADBE Circle`          | Circle             | 8   |      |
| `ADBE ELLIPSE`         | Ellipse            | 32  |      |
| `ADBE Eyedropper Fill` | Eyedropper Fill    | 8   |      |
| `ADBE Fill`            | Fill               | 32  |      |
| `ADBE Fractal`         | Fractal            | 16  |      |
| `ADBE Ramp`            | Gradient Ramp      | 32  | 14.2 |
| `ADBE Grid`            | Grid               | 8   |      |
| `ADBE Lens Flare`      | Lens Flare         | 8   |      |
| `ADBE Paint Bucket`    | Paint Bucket       | 8   |      |
| `APC Radio Waves`      | Radio Waves        | 8   |      |
| `ADBE Scribble Fill`   | Scribble           | 8   |      |
| `ADBE Stroke`          | Stroke             | 8   |      |
| `APC Vegas`            | Vegas              | 8   |      |
| `ADBE Write-on`        | Write-on           | 8   |      |

---

## Keying

| Match Name                  | Display Name (EN)         | BPC | GPU |
| --------------------------- | ------------------------- | --- | --- |
| `ADBE Spill2`               | Advanced Spill Suppressor | 32  |     |
| `CC Simple Wire Removal`    | CC Simple Wire Removal    | 32  |     |
| `ADBE Color Difference Key` | Color Difference Key      | 16  |     |
| `ADBE Color Range`          | Color Range               | 8   |     |
| `ADBE Difference Matte2`    | Difference Matte          | 16  |     |
| `ADBE Extract`              | Extract                   | 16  |     |
| `ADBE ATG Extract`          | Inner/Outer Key           | 16  |     |
| `ADBE KeyCleaner`           | Key Cleaner               | 32  |     |
| `Keylight 906`              | Keylight (1.2)            | 32  |     |
| `ADBE Linear Color Key2`    | Linear Color Key          | 32  |     |

---

## Matte

| Match Name               | Display Name (EN) | BPC | GPU |
| ------------------------ | ----------------- | --- | --- |
| `ADBE Matte Choker`      | Matte Choker      | 16  |     |
| `ISL MochaShapeImporter` | mocha shape       | 32  |     |
| `ADBE RefineRBMatte`     | Refine Hard Matte | 32  |     |
| `ADBE RefineMatte2`      | Refine Soft Matte | 32  |     |
| `ADBE Simple Choker`     | Simple Choker     | 32  |     |

---

## Noise & Grain

| Match Name                 | Display Name (EN) | BPC | GPU  |
| -------------------------- | ----------------- | --- | ---- |
| `VISINF Grain Implant`     | Add Grain         | 16  |      |
| `ADBE Dust & Scratches`    | Dust & Scratches  | 16  |      |
| `ADBE Fractal Noise`       | Fractal Noise     | 32  | 14.2 |
| `VISINF Grain Duplication` | Match Grain       | 16  |      |
| `ADBE Median`              | Median            | 16  |      |
| `ADBE Noise`               | Noise             | 32  |      |
| `ADBE Noise Alpha2`        | Noise Alpha       | 8   |      |
| `ADBE Noise HLS2`          | Noise HLS         | 8   |      |
| `ADBE Noise HLS Auto2`     | Noise HLS Auto    | 8   |      |
| `VISINF Grain Removal`     | Remove Grain      | 16  |      |
| `ADBE AIF Perlin Noise 3D` | Turbulent Noise   | 32  |      |

---

## Obsolete

| Match Name                      | Display Name (EN)        | BPC | GPU |
| ------------------------------- | ------------------------ | --- | --- |
| `ADBE Basic 3D`                 | Basic 3D                 | 8   |     |
| `ADBE Basic Text2`              | Basic Text               | 8   |     |
| `ADBE Color Key`                | Color Key                | 16  |     |
| `ADBE Fast Blur`                | Fast Blur (Legacy)       | 32  |     |
| `ADBE Gaussian Blur`            | Gaussian Blur (Legacy)   | 32  |     |
| `ADBE Lightning`                | Lightning                | 8   |     |
| `ADBE Luma Key`                 | Luma Key                 | 16  |     |
| `ADBE Path Text`                | Path Text                | 8   |     |
| `ADBE Reduce Interlace Flicker` | Reduce Interlace Flicker | 32  |     |
| `ADBE Spill Suppressor`         | Spill Suppressor         | 32  |     |

---

## Perspective

| Match Name           | Display Name (EN) | BPC | GPU  |
| -------------------- | ----------------- | --- | ---- |
| `ADBE 3D Tracker`    | 3D Camera Tracker | 32  |      |
| `ADBE 3D Glasses2`   | 3D Glasses        | 32  |      |
| `ADBE Bevel Alpha`   | Bevel Alpha       | 16  |      |
| `ADBE Bevel Edges`   | Bevel Edges       | 8   |      |
| `CC Cylinder`        | CC Cylinder       | 16  |      |
| `CC Environment`     | CC Environment    | 32  |      |
| `CC Sphere`          | CC Sphere         | 32  |      |
| `CC Spotlight`       | CC Spotlight      | 16  |      |
| `ADBE Drop Shadow`   | Drop Shadow       | 32  | 14.2 |
| `ADBE Radial Shadow` | Radial Shadow     | 8   |      |

---

## Simulation

| Match Name               | Display Name (EN)      | BPC | GPU |
| ------------------------ | ---------------------- | --- | --- |
| `APC CardDanceCam`       | Card Dance             | 8   |     |
| `APC Caustics`           | Caustics               | 8   |     |
| `CC Ball Action`         | CC Ball Action         | 16  |     |
| `CC Bubbles`             | CC Bubbles             | 32  |     |
| `CC Drizzle`             | CC Drizzle             | 32  |     |
| `CC Hair`                | CC Hair                | 16  |     |
| `CC Mr. Mercury`         | CC Mr. Mercury         | 32  |     |
| `CC Particle Systems II` | CC Particle Systems II | 32  |     |
| `CC Particle World`      | CC Particle World      | 16  |     |
| `CC Pixel Polly`         | CC Pixel Polly         | 16  |     |
| `CSRainfall`             | CC Rainfall            | 32  |     |
| `CC Scatterize`          | CC Scatterize          | 16  |     |
| `CSSnowfall`             | CC Snowfall            | 32  |     |
| `CC Star Burst`          | CC Star Burst          | 16  |     |
| `APC Foam`               | Foam                   | 8   |     |
| `ADBE Playgnd`           | Particle Playground    | 8   |     |
| `APC Shatter`            | Shatter                | 8   |     |
| `APC Wave World`         | Wave World             | 8   |     |

---

## Stylize

| Match Name           | Display Name (EN) | BPC | GPU  |
| -------------------- | ----------------- | --- | ---- |
| `ADBE Brush Strokes` | Brush Strokes     | 8   |      |
| `ADBE Cartoonify`    | Cartoon           | 32  |      |
| `CS BlockLoad`       | CC Block Load     | 32  |      |
| `CC Burn Film`       | CC Burn Film      | 32  |      |
| `CC Glass`           | CC Glass          | 16  |      |
| `CS HexTile`         | CC HexTile        | 32  |      |
| `CC Kaleida`         | CC Kaleida        | 32  |      |
| `CC Mr. Smoothie`    | CC Mr. Smoothie   | 16  |      |
| `CC Plastic`         | CC Plastic        | 16  |      |
| `CC RepeTile`        | CC RepeTile       | 32  |      |
| `CC Threshold`       | CC Threshold      | 32  |      |
| `CC Threshold RGB`   | CC Threshold RGB  | 32  |      |
| `CS Vignette`        | CC Vignette       | 32  |      |
| `ADBE Color Emboss`  | Color Emboss      | 16  |      |
| `ADBE Emboss`        | Emboss            | 16  |      |
| `ADBE Find Edges`    | Find Edges        | 8   | 14.1 |
| `ADBE Glo2`          | Glow              | 32  | 14.1 |
| `ADBE Mosaic`        | Mosaic            | 16  |      |
| `ADBE Tile`          | Motion Tile       | 8   |      |
| `ADBE Posterize`     | Posterize         | 32  |      |
| `ADBE Roughen Edges` | Roughen Edges     | 8   |      |
| `ADBE Scatter`       | Scatter           | 16  |      |
| `ADBE Strobe`        | Strobe Light      | 8   |      |
| `ADBE Texturize`     | Texturize         | 8   |      |
| `ADBE Threshold2`    | Threshold         | 32  |      |

---

## Synthetic Aperture

| Match Name                   | Display Name (EN)  | BPC | GPU |
| ---------------------------- | ------------------ | --- | --- |
| `SYNTHAP CF Color Finesse 2` | SA Color Finesse 3 | 32  |     |

---

## Text

| Match Name      | Display Name (EN) | BPC | GPU |
| --------------- | ----------------- | --- | --- |
| `ADBE Numbers2` | Numbers           | 8   |     |
| `ADBE Timecode` | Timecode          | 8   |     |

---

## Time

| Match Name               | Display Name (EN)    | BPC | GPU |
| ------------------------ | -------------------- | --- | --- |
| `CC Force Motion Blur`   | CC Force Motion Blur | 32  |     |
| `CC Wide Time`           | CC Wide Time         | 32  |     |
| `ADBE Echo`              | Echo                 | 32  |     |
| `ADBE OFMotionBlur`      | Pixel Motion Blur    | 32  |     |
| `ADBE Posterize Time`    | Posterize Time       | 32  |     |
| `ADBE Difference`        | Time Difference      | 8   |     |
| `ADBE Time Displacement` | Time Displacement    | 16  |     |
| `ADBE Timewarp`          | Timewarp             | 32  |     |

---

## Transition

| Match Name             | Display Name (EN)   | BPC | GPU |
| ---------------------- | ------------------- | --- | --- |
| `ADBE Block Dissolve`  | Block Dissolve      | 16  |     |
| `APC CardWipeCam`      | Card Wipe           | 8   |     |
| `CC Glass Wipe`        | CC Glass Wipe       | 16  |     |
| `CC Grid Wipe`         | CC Grid Wipe        | 32  |     |
| `CC Image Wipe`        | CC Image Wipe       | 16  |     |
| `CC Jaws`              | CC Jaws             | 32  |     |
| `CC Light Wipe`        | CC Light Wipe       | 16  |     |
| `CS LineSweep`         | CC Line Sweep       | 32  |     |
| `CC Radial ScaleWipe`  | CC Radial ScaleWipe | 16  |     |
| `CC Scale Wipe`        | CC Scale Wipe       | 32  |     |
| `CC Twister`           | CC Twister          | 16  |     |
| `CC WarpoMatic`        | CC WarpoMatic       | 16  |     |
| `ADBE Gradient Wipe`   | Gradient Wipe       | 16  |     |
| `ADBE IRIS_WIPE`       | Iris Wipe           | 32  |     |
| `ADBE Linear Wipe`     | Linear Wipe         | 32  |     |
| `ADBE Radial Wipe`     | Radial Wipe         | 32  |     |
| `ADBE Venetian Blinds` | Venetian Blinds     | 32  |     |

---

## Utility

| Match Name               | Display Name (EN)         | BPC | GPU |
| ------------------------ | ------------------------- | --- | --- |
| `ADBE Apply Color LUT2`  | Apply Color LUT           | 32  |     |
| `CC Overbrights`         | CC Overbrights            | 32  |     |
| `ADBE Cineon Converter2` | Cineon Converter          | 32  |     |
| `ADBE ProfileToProfile`  | Color Profile Converter   | 32  |     |
| `ADBE GROW BOUNDS`       | Grow Bounds               | 32  |     |
| `ADBE Compander`         | HDR Compander             | 32  |     |
| `ADBE HDR ToneMap`       | HDR Highlight Compression | 32  |     |

---

## \_Obsolete

| Match Name                       | Display Name (EN)            | BPC | GPU |
| -------------------------------- | ---------------------------- | --- | --- |
| `ADBE Paint`                     | Paint                        |     |     |
| `ADBE Samurai`                   | Roto Brush & Refine Edge     |     |     |
| `ADBE FreePin3`                  | Puppet                       |     |     |
| `ADBE RefineMatte`               | Refine Matte                 |     |     |
| `ADBE 3D Glasses`                | 3D Glasses (Obsolete)        |     |     |
| `ADBE Alpha Levels2`             | Alpha Levels                 |     |     |
| `ADBE Alpha Levels3`             | Alpha Levels                 |     |     |
| `ADBE Apply Color LUT`           | Apply Color LUT              |     |     |
| `ADBE Brightness & Contrast`     | Brightness & Contrast        |     |     |
| `ADBE Box Blur`                  | Box Blur                     |     |     |
| `ADBE Cineon Converter`          | Cineon Converter             |     |     |
| `ADBE Color Balance`             | Color Balance                |     |     |
| `CC PS Classic`                  | CC PS Classic (obsolete)     |     |     |
| `CC PS LE Classic`               | CC PS LE Classic (obsolete)  |     |     |
| `CC Rain`                        | CC Rain                      |     |     |
| `CC Snow`                        | CC Snow                      |     |     |
| `CC Time Blend`                  | CC Time Blend                |     |     |
| `CC Time Blend FX`               | CC Time Blend FX             |     |     |
| `ADBE Exposure`                  | Exposure                     |     |     |
| `ADBE Easy Levels`               | Levels                       |     |     |
| `ADBE Pro Levels`                | Levels (Individual Controls) |     |     |
| `ADBE Noise Alpha`               | Noise Alpha                  |     |     |
| `ADBE Noise HLS`                 | Noise HLS                    |     |     |
| `ADBE Noise HLS Auto`            | Noise HLS Auto               |     |     |
| `ADBE PSL Bevel Emboss`          | Photoshop Bevel And Emboss   |     |     |
| `ADBE PSL Drop Shadow`           | Photoshop Drop Shadow        |     |     |
| `ADBE PSL Inner Glow`            | Photoshop Inner Glow         |     |     |
| `ADBE PSL Inner Shadow`          | Photoshop Inner Shadow       |     |     |
| `ADBE PSL Outer Glow`            | Photoshop Outer Glow         |     |     |
| `ADBE PSL Solid Fill`            | Photoshop Solid Fill         |     |     |
| `ADBE Photo Filter`              | Photo Filter                 |     |     |
| `ADBE Set Matte2`                | Set Matte                    |     |     |
| `ADBE Three-Way Color Corrector` | Three-Way Color Corrector    |     |     |
| `ADBE Threshold`                 | Threshold                    |     |     |
| `ADBE Geometry`                  | Transform                    |     |     |
| `ADBE Unsharp Mask`              | Unsharp Mask                 |     |     |
| `ADBE Vector Paint`              | Vector Paint                 |     |     |

# Layer Styles Match Names

---

## Styles

| Match Name                 | Display Name (EN)              |
| -------------------------- | ------------------------------ |
| `ADBE Blend Options Group` | Blending Options               |
| `ADBE Global Angle2`       | Global Light Angle             |
| `ADBE Global Altitude2`    | Global Light Altitude          |
| `ADBE Adv Blend Group`     | Advanced Blending              |
| `ADBE Layer Fill Opacity2` | Fill Opacity                   |
| `ADBE R Channel Blend`     | Red                            |
| `ADBE G Channel Blend`     | Green                          |
| `ADBE B Channel Blend`     | Blue                           |
| `ADBE Blend Interior`      | Blend Interior Styles as Group |
| `ADBE Blend Ranges`        | Use Blend Ranges from Source   |

---

## Drop Shadow

| Match Name                      | Display Name (EN)            |
| ------------------------------- | ---------------------------- |
| `dropShadow/enabled`            | Drop Shadow                  |
| `dropShadow/mode2`              | Blend Mode                   |
| `dropShadow/color`              | Color                        |
| `dropShadow/opacity`            | Opacity                      |
| `dropShadow/useGlobalAngle`     | Use Global Light             |
| `dropShadow/localLightingAngle` | Angle                        |
| `dropShadow/distance`           | Distance                     |
| `dropShadow/chokeMatte`         | Spread                       |
| `dropShadow/blur`               | Size                         |
| `dropShadow/noise`              | Noise                        |
| `dropShadow/layerConceals`      | Layer Knocks Out Drop Shadow |

---

## Inner Shadow

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `innerShadow/enabled`            | Inner Shadow      |
| `innerShadow/mode2`              | Blend Mode        |
| `innerShadow/color`              | Color             |
| `innerShadow/opacity`            | Opacity           |
| `innerShadow/useGlobalAngle`     | Use Global Light  |
| `innerShadow/localLightingAngle` | Angle             |
| `innerShadow/distance`           | Distance          |
| `innerShadow/chokeMatte`         | Choke             |
| `innerShadow/blur`               | Size              |
| `innerShadow/noise`              | Noise             |

---

## Outer Glow

| Match Name                     | Display Name (EN)   |
| ------------------------------ | ------------------- |
| `outerGlow/enabled`            | Outer Glow          |
| `outerGlow/mode2`              | Blend Mode          |
| `outerGlow/opacity`            | Opacity             |
| `outerGlow/noise`              | Noise               |
| `outerGlow/AEColorChoice`      | Color Type          |
| `outerGlow/color`              | Color               |
| `outerGlow/gradient`           | Colors              |
| `outerGlow/gradientSmoothness` | Gradient Smoothness |
| `outerGlow/glowTechnique`      | Technique           |
| `outerGlow/chokeMatte`         | Spread              |
| `outerGlow/blur`               | Size                |
| `outerGlow/inputRange`         | Range               |
| `outerGlow/shadingNoise`       | Jitter              |

---

## Inner Glow

| Match Name                     | Display Name (EN)   |
| ------------------------------ | ------------------- |
| `innerGlow/enabled`            | Inner Glow          |
| `innerGlow/mode2`              | Blend Mode          |
| `innerGlow/opacity`            | Opacity             |
| `innerGlow/noise`              | Noise               |
| `innerGlow/AEColorChoice`      | Color Type          |
| `innerGlow/color`              | Color               |
| `innerGlow/gradient`           | Colors              |
| `innerGlow/gradientSmoothness` | Gradient Smoothness |
| `innerGlow/glowTechnique`      | Technique           |
| `innerGlow/innerGlowSource`    | Source              |
| `innerGlow/chokeMatte`         | Choke               |
| `innerGlow/blur`               | Size                |
| `innerGlow/inputRange`         | Range               |
| `innerGlow/shadingNoise`       | Jitter              |

---

## Bevel/Emboss

| Match Name                          | Display Name (EN) |
| ----------------------------------- | ----------------- |
| `bevelEmboss/enabled`               | Bevel and Emboss  |
| `bevelEmboss/bevelStyle`            | Style             |
| `bevelEmboss/bevelTechnique`        | Technique         |
| `bevelEmboss/strengthRatio`         | Depth             |
| `bevelEmboss/bevelDirection`        | Direction         |
| `bevelEmboss/blur`                  | Size              |
| `bevelEmboss/softness`              | Soften            |
| `bevelEmboss/useGlobalAngle`        | Use Global Light  |
| `bevelEmboss/localLightingAngle`    | Angle             |
| `bevelEmboss/localLightingAltitude` | Altitude          |
| `bevelEmboss/highlightMode`         | Highlight Mode    |
| `bevelEmboss/highlightColor`        | Highlight Color   |
| `bevelEmboss/highlightOpacity`      | Highlight Opacity |
| `bevelEmboss/shadowMode`            | Shadow Mode       |
| `bevelEmboss/shadowColor`           | Shadow Color      |
| `bevelEmboss/shadowOpacity`         | Shadow Opacity    |

---

## Satin

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `chromeFX/enabled`            | Satin             |
| `chromeFX/mode2`              | Blend Mode        |
| `chromeFX/color`              | Color             |
| `chromeFX/opacity`            | Opacity           |
| `chromeFX/localLightingAngle` | Angle             |
| `chromeFX/distance`           | Distance          |
| `chromeFX/blur`               | Size              |
| `chromeFX/invert`             | Invert            |

---

## Solid Fill

| Match Name          | Display Name (EN) |
| ------------------- | ----------------- |
| `solidFill/enabled` | Color Overlay     |
| `solidFill/mode2`   | Blend Mode        |
| `solidFill/color`   | Color             |
| `solidFill/opacity` | Opacity           |

---

## Grad Fill

| Match Name                        | Display Name (EN)   |
| --------------------------------- | ------------------- |
| `gradientFill/enabled`            | Gradient Overlay    |
| `gradientFill/mode2`              | Blend Mode          |
| `gradientFill/opacity`            | Opacity             |
| `gradientFill/gradient`           | Colors              |
| `gradientFill/gradientSmoothness` | Gradient Smoothness |
| `gradientFill/angle`              | Angle               |
| `gradientFill/type`               | Style               |
| `gradientFill/reverse`            | Reverse             |
| `gradientFill/align`              | Align with Layer    |
| `gradientFill/scale`              | Scale               |
| `gradientFill/offset`             | Offset              |

---

## Pattern

| Match Name            | Display Name (EN) |
| --------------------- | ----------------- |
| `patternFill/enabled` | Pattern Overlay   |
| `patternFill/mode2`   | Blend Mode        |
| `patternFill/opacity` | Opacity           |
| `patternFill/align`   | Link with Layer   |
| `patternFill/scale`   | Scale             |
| `patternFill/phase`   | Offset            |

---

## Stroke

| Match Name        | Display Name (EN) |
| ----------------- | ----------------- |
| `frameFX/enabled` | Stroke            |
| `frameFX/mode2`   | Blend Mode        |
| `frameFX/color`   | Color             |
| `frameFX/size`    | Size              |
| `frameFX/opacity` | Opacity           |
| `frameFX/style`   | Position          |

# Light Layer Match Names

---

## Layer

| Match Name         | Display Name (EN) |
| ------------------ | ----------------- |
| `ADBE Light Layer` |                   |

---

## Light

| Match Name                  | Display Name (EN) |
| --------------------------- | ----------------- |
| `ADBE Light Options Group`  | Light Options     |
| `ADBE Light Intensity`      | Intensity         |
| `ADBE Light Color`          | Color             |
| `ADBE Light Cone Angle`     | Cone Angle        |
| `ADBE Light Cone Feather 2` | Cone Feather      |

---

## Falloff

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Light Falloff Type`     | Falloff           |
| `ADBE Light Falloff Start`    | Radius            |
| `ADBE Light Falloff Distance` | Falloff Distance  |

---

## Shadow

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Light Shadow Darkness`  | Shadow Darkness   |
| `ADBE Light Shadow Diffusion` | Shadow Diffusion  |

# Shape Layer Match Names

---

## Layer

| Match Name          | Display Name (EN) |
| ------------------- | ----------------- |
| `ADBE Vector Layer` | Shape Layer       |

---

## Contents

| Match Name                | Display Name (EN) |
| ------------------------- | ----------------- |
| `ADBE Root Vectors Group` | Contents          |

---

## Group

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Vector Group`           | Group             |
| `ADBE Vector Blend Mode`      | Blend Mode        |
| `ADBE Vectors Group`          | Contents          |
| `ADBE Vector Transform Group` | Transform         |
| `ADBE Vector Materials Group` | Material Options  |

---

## Group Transform Properties

| Match Name                  | Display Name (EN)                  |
| --------------------------- | ---------------------------------- |
| `ADBE Vector Anchor`        | Shape Group Transform Anchor Point |
| `ADBE Vector Position`      | Shape Group Transform Position     |
| `ADBE Vector Scale`         | Shape Group Transform Scale        |
| `ADBE Vector Skew`          | Shape Group Transform Skew         |
| `ADBE Vector Skew Axis`     | Shapw Group Transform Skew Axis    |
| `ADBE Vector Rotation`      | Shape Group Transform Rotation     |
| `ADBE Vector Group Opacity` | Shape Group Transform Opacity      |

---

## Rectangle

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Vector Shape - Rect`    | Rectangle         |
| `ADBE Vector Shape Direction` | Shape Direction   |
| `ADBE Vector Rect Size`       | Size              |
| `ADBE Vector Rect Position`   | Position          |
| `ADBE Vector Rect Roundness`  | Roundness         |

---

## Ellipse

| Match Name                     | Display Name (EN) |
| ------------------------------ | ----------------- |
| `ADBE Vector Shape - Ellipse`  | Ellipse           |
| `ADBE Vector Shape Direction`  | Shape Direction   |
| `ADBE Vector Ellipse Size`     | Size              |
| `ADBE Vector Ellipse Position` | Position          |

---

## Polystar

| Match Name                        | Display Name (EN) |
| --------------------------------- | ----------------- |
| `ADBE Vector Shape - Star`        | Polystar          |
| `ADBE Vector Shape Direction`     | Shape Direction   |
| `ADBE Vector Star Type`           | Type              |
| `ADBE Vector Star Points`         | Points            |
| `ADBE Vector Star Position`       | Position          |
| `ADBE Vector Star Rotation`       | Rotation          |
| `ADBE Vector Star Inner Radius`   | Inner Radius      |
| `ADBE Vector Star Outer Radius`   | Outer Radius      |
| `ADBE Vector Star Inner Roundess` | Inner Roundness   |
| `ADBE Vector Star Outer Roundess` | Outer Roundness   |

---

## Path

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Vector Shape - Group`   | Path              |
| `ADBE Vector Shape Direction` | Shape Direction   |
| `ADBE Vector Shape`           | Path              |

---

## Fill

| Match Name                    | Display Name (EN) |
| ----------------------------- | ----------------- |
| `ADBE Vector Graphic - Fill`  | Fill              |
| `ADBE Vector Blend Mode`      | Blend Mode        |
| `ADBE Vector Composite Order` | Composite         |
| `ADBE Vector Fill Rule`       | Fill Rule         |
| `ADBE Vector Fill Color`      | Color             |
| `ADBE Vector Fill Opacity`    | Opacity           |

---

## Stroke

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Graphic - Stroke`   | Stroke            |
| `ADBE Vector Blend Mode`         | Blend Mode        |
| `ADBE Vector Composite Order`    | Composite         |
| `ADBE Vector Stroke Color`       | Color             |
| `ADBE Vector Stroke Opacity`     | Opacity           |
| `ADBE Vector Stroke Width`       | Stroke Width      |
| `ADBE Vector Stroke Line Cap`    | Line Cap          |
| `ADBE Vector Stroke Line Join`   | Line Join         |
| `ADBE Vector Stroke Miter Limit` | Miter Limit       |

---

## Stroke Dashes

| Match Name                  | Display Name (EN) |
| --------------------------- | ----------------- |
| `ADBE Vector Stroke Dashes` | Dashes            |
| `ADBE Vector Stroke Dash 1` | Dash              |
| `ADBE Vector Stroke Gap 1`  | Gap               |
| `ADBE Vector Stroke Dash 2` | Dash 2            |
| `ADBE Vector Stroke Gap 2`  | Gap 2             |
| `ADBE Vector Stroke Dash 3` | Dash 3            |
| `ADBE Vector Stroke Gap 3`  | Gap 3             |
| `ADBE Vector Stroke Offset` | Offset            |

---

## Stroke Taper

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Stroke Taper`       | Taper             |
| `ADBE Vector Taper Start Width`  | Start Width       |
| `ADBE Vector Taper Length Units` | Length Units      |
| `ADBE Vector Taper End Width`    | End Width         |
| `ADBE Vector Taper End Ease`     | End Ease          |
| `ADBE Vector Taper End Length`   | End Length        |
| `ADBE Vector Taper Start Length` | Start Length      |
| `ADBE Vector Taper Start Ease`   | Start Ease        |

---

## Stroke Wave

| Match Name                      | Display Name (EN) |
| ------------------------------- | ----------------- |
| `ADBE Vector Stroke Wave`       | Wave              |
| `ADBE Vector Taper Wave Amount` | Amount            |
| `ADBE Vector Taper Wave Units`  | Units             |
| `ADBE Vector Taper Wave Phase`  | Phase             |
| `ADBE Vector Taper Wavelength`  | Wavelength        |

---

## Gradient Fill

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Graphic - G-Fill`   | Gradient Fill     |
| `ADBE Vector Blend Mode`         | Blend Mode        |
| `ADBE Vector Composite Order`    | Composite         |
| `ADBE Vector Fill Rule`          | Fill Rule         |
| `ADBE Vector Grad Type`          | Type              |
| `ADBE Vector Grad Start Pt`      | Start Point       |
| `ADBE Vector Grad End Pt`        | End Point         |
| `ADBE Vector Grad HiLite Length` | Highlight Length  |
| `ADBE Vector Grad HiLite Angle`  | Highlight Angle   |
| `ADBE Vector Grad Colors`        | Colors            |
| `ADBE Vector Fill Opacity`       | Opacity           |

---

## Gradient Stroke

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Graphic - G-Stroke` | Gradient Stroke   |
| `ADBE Vector Blend Mode`         | Blend Mode        |
| `ADBE Vector Composite Order`    | Composite         |
| `ADBE Vector Grad Type`          | Type              |
| `ADBE Vector Grad Start Pt`      | Start Point       |
| `ADBE Vector Grad End Pt`        | End Point         |
| `ADBE Vector Grad HiLite Length` | Highlight Length  |
| `ADBE Vector Grad HiLite Angle`  | Highlight Angle   |
| `ADBE Vector Grad Colors`        | Colors            |
| `ADBE Vector Stroke Opacity`     | Opacity           |
| `ADBE Vector Stroke Width`       | Stroke Width      |
| `ADBE Vector Stroke Line Cap`    | Line Cap          |
| `ADBE Vector Stroke Line Join`   | Line Join         |
| `ADBE Vector Stroke Miter Limit` | Miter Limit       |
| `ADBE Vector Stroke Dashes`      | Dashes            |

---

## Merge Paths

| Match Name                   | Display Name (EN) |
| ---------------------------- | ----------------- |
| `ADBE Vector Filter - Merge` | Merge Paths       |
| `ADBE Vector Merge Type`     | Mode              |

---

## Offset Paths

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Filter - Offset`    | Offset Paths      |
| `ADBE Vector Offset Amount`      | Amount            |
| `ADBE Vector Offset Line Join`   | Line Join         |
| `ADBE Vector Offset Miter Limit` | Miter Limit       |
| `ADBE Vector Offset Copies`      | Copies            |
| `ADBE Vector Offset Copy Offset` | Copy Offset       |

---

## Pucker & Bloat

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Filter - PB`        | Pucker & Bloat    |
| `ADBE Vector PuckerBloat Amount` | Amount            |

---

## Repeater

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Filter - Repeater`  | Repeater          |
| `ADBE Vector Repeater Copies`    | Copies            |
| `ADBE Vector Repeater Offset`    | Offset            |
| `ADBE Vector Repeater Order`     | Composite         |
| `ADBE Vector Repeater Transform` | Transform         |

---

## Round Corners

| Match Name                       | Display Name (EN) |
| -------------------------------- | ----------------- |
| `ADBE Vector Filter - RC`        | Round Corners     |
| `ADBE Vector RoundCorner Radius` | Radius            |

---

## Trim Paths

| Match Name                  | Display Name (EN)    |
| --------------------------- | -------------------- |
| `ADBE Vector Filter - Trim` | Trim Paths           |
| `ADBE Vector Trim Start`    | Start                |
| `ADBE Vector Trim End`      | End                  |
| `ADBE Vector Trim Offset`   | Offset               |
| `ADBE Vector Trim Type`     | Trim Multiple Shapes |

---

## Twist

| Match Name                   | Display Name (EN) |
| ---------------------------- | ----------------- |
| `ADBE Vector Filter - Twist` | Twist             |
| `ADBE Vector Twist Angle`    | Angle             |
| `ADBE Vector Twist Center`   | Center            |

---

## Wiggle Paths

| Match Name                     | Display Name (EN) |
| ------------------------------ | ----------------- |
| `ADBE Vector Filter - Roughen` | Wiggle Paths      |
| `ADBE Vector Roughen Size`     | Size              |
| `ADBE Vector Roughen Detail`   | Detail            |
| `ADBE Vector Roughen Points`   | Points            |
| `ADBE Vector Temporal Freq`    | Wiggles/Second    |
| `ADBE Vector Correlation`      | Correlation       |
| `ADBE Vector Temporal Phase`   | Temporal Phase    |
| `ADBE Vector Spatial Phase`    | Spatial Phase     |
| `ADBE Vector Random Seed`      | Random Seed       |

---

## Wiggle Transform

| Match Name                        | Display Name (EN) |
| --------------------------------- | ----------------- |
| `ADBE Vector Filter - Wiggler`    | Wiggle Transform  |
| `ADBE Vector Xform Temporal Freq` | Wiggles/Second    |
| `ADBE Vector Correlation`         | Correlation       |
| `ADBE Vector Temporal Phase`      | Temporal Phase    |
| `ADBE Vector Spatial Phase`       | Spatial Phase     |
| `ADBE Vector Random Seed`         | Random Seed       |
| `ADBE Vector Wiggler Transform`   | Transform         |

---

## Zig Zag

| Match Name                    | Display Name (EN)  |
| ----------------------------- | ------------------ |
| `ADBE Vector Filter - Zigzag` | Zig Zag            |
| `ADBE Vector Zigzag Size`     | Size               |
| `ADBE Vector Zigzag Detail`   | Ridges per segment |
| `ADBE Vector Zigzag Points`   | Points             |

# Text Layer Match Names

---

## Layer

| Match Name        | Display Name (EN) |
| ----------------- | ----------------- |
| `ADBE Text Layer` |                   |

---

## Text

| Match Name                        | Display Name (EN)     |
| --------------------------------- | --------------------- |
| `ADBE Text Properties`            | Text                  |
| `ADBE Text Document`              | Source Text           |
| `ADBE Text Path Options`          | Path Options          |
| `ADBE Text Reverse Path`          | Reverse Path          |
| `ADBE Text Perpendicular To Path` | Perpendicular To Path |
| `ADBE Text Force Align Path`      | Force Alignment       |
| `ADBE Text First Margin`          | First Margin          |
| `ADBE Text Last Margin`           | Last Margin           |
| `ADBE Text More Options`          | More Options          |
| `ADBE Text Variable Font Spacing` | Variable Font Spacing |
| `ADBE Text Anchor Point Align`    | Grouping Alignment    |
| `ADBE Text Animators`             | Animators             |

---

## Animators

| Match Name                      | Display Name (EN) |
| ------------------------------- | ----------------- |
| `ADBE Text Animator`            | Animator          |
| `ADBE Text Selectors`           | Selectors         |
| `ADBE Text Selector`            | Range Selector    |
| `ADBE Text Percent Start`       | Start             |
| `ADBE Text Percent End`         | End               |
| `ADBE Text Percent Offset`      | Offset            |
| `ADBE Text Index Start`         | Start             |
| `ADBE Text Index End`           | End               |
| `ADBE Text Index Offset`        | Offset            |
| `ADBE Text Range Advanced`      | Advanced          |
| `ADBE Text Range Units`         | Units             |
| `ADBE Text Selector Mode`       | Mode              |
| `ADBE Text Selector Max Amount` | Amount            |
| `ADBE Text Selector Smoothness` | Smoothness        |
| `ADBE Text Levels Max Ease`     | Ease High         |
| `ADBE Text Levels Min Ease`     | Ease Low          |
| `ADBE Text Random Seed`         | Random Seed       |
| `ADBE Text Animator Properties` | Properties        |
| `ADBE Text Anchor Point 3D`     | Anchor Point      |
| `ADBE Text Position 3D`         | Position          |
| `ADBE Text Scale 3D`            | Scale             |
| `ADBE Text Skew`                | Skew              |
| `ADBE Text Skew Axis`           | Skew Axis         |
| `ADBE Text Rotation X`          | X Rotation        |
| `ADBE Text Rotation Y`          | Y Rotation        |
| `ADBE Text Rotation`            | Z Rotation        |
| `ADBE Text Opacity`             | Opacity           |
| `ADBE Text Fill Opacity`        | Fill Opacity      |
| `ADBE Text Stroke Opacity`      | Stroke Opacity    |
| `ADBE Text Fill Color`          | Fill Color        |
| `ADBE Text Stroke Color`        | Stroke Color      |
| `ADBE Text Fill Hue`            | Fill Hue          |
| `ADBE Text Stroke Hue`          | Stroke Hue        |
| `ADBE Text Fill Saturation`     | Fill Saturation   |
| `ADBE Text Stroke Saturation`   | Stroke Saturation |
| `ADBE Text Fill Brightness`     | Fill Brightness   |
| `ADBE Text Stroke Brightness`   | Stroke Brightness |
| `ADBE Text Stroke Width`        | Stroke Width      |
| `ADBE Text Line Anchor`         | Line Anchor       |
| `ADBE Text Track Type`          | Tracking Type     |
| `ADBE Text Tracking Amount`     | Tracking Amount   |
| `ADBE Text Character Replace`   | Character Value   |
| `ADBE Text Character Offset`    | Character Offset  |
| `ADBE Text Line Spacing`        | Line Spacing      |
| `ADBE Text Blur`                | Blur              |

---

## 3d Text

| Match Name                     | Display Name (EN)          |
| ------------------------------ | -------------------------- |
| `ADBE 3DText Front RGB`        | Front Color                |
| `ADBE 3DText Front Hue`        | Front Hue                  |
| `ADBE 3DText Front Sat`        | Front Saturation           |
| `ADBE 3DText Front Bright`     | Front Brightness           |
| `ADBE 3DText Front Opacity`    | Front Opacity              |
| `ADBE 3DText Front Ambient`    | Front Ambient              |
| `ADBE 3DText Front Diffuse`    | Front Diffuse              |
| `ADBE 3DText Front Specular`   | Front Specular Intensity   |
| `ADBE 3DText Front Shininess`  | Front Specular Shininess   |
| `ADBE 3DText Front Metal`      | Front Metal                |
| `ADBE 3DText Front Reflection` | Front Reflection Intensity |
| `ADBE 3DText Front Gloss`      | Front Reflection Sharpness |
| `ADBE 3DText Front Fresnel`    | Front Reflection Rolloff   |
| `ADBE 3DText Front Xparency`   | Front Transparency         |
| `ADBE 3DText Front XparRoll`   | Front Transparency Rolloff |
| `ADBE 3DText Front IOR`        | Front Index of Refraction  |
| `ADBE 3DText Bevel RGB`        | Bevel Color                |
| `ADBE 3DText Bevel Hue`        | Bevel Hue                  |
| `ADBE 3DText Bevel Sat`        | Bevel Saturation           |
| `ADBE 3DText Bevel Bright`     | Bevel Brightness           |
| `ADBE 3DText Bevel Opacity`    | Bevel Opacity              |
| `ADBE 3DText Bevel Ambient`    | Bevel Ambient              |
| `ADBE 3DText Bevel Diffuse`    | Bevel Diffuse              |
| `ADBE 3DText Bevel Specular`   | Bevel Specular Intensity   |
| `ADBE 3DText Bevel Shininess`  | Bevel Specular Shininess   |
| `ADBE 3DText Bevel Metal`      | Bevel Metal                |
| `ADBE 3DText Bevel Reflection` | Bevel Reflection Intensity |
| `ADBE 3DText Bevel Gloss`      | Bevel Reflection Sharpness |
| `ADBE 3DText Bevel Fresnel`    | Bevel Reflection Rolloff   |
| `ADBE 3DText Bevel Xparency`   | Bevel Transparency         |
| `ADBE 3DText Bevel XparRoll`   | Bevel Transparency Rolloff |
| `ADBE 3DText Bevel IOR`        | Bevel Index of Refraction  |
| `ADBE 3DText Side RGB`         | Side Color                 |
| `ADBE 3DText Side Hue`         | Side Hue                   |
| `ADBE 3DText Side Sat`         | Side Saturation            |
| `ADBE 3DText Side Bright`      | Side Brightness            |
| `ADBE 3DText Side Opacity`     | Side Opacity               |
| `ADBE 3DText Side Ambient`     | Side Ambient               |
| `ADBE 3DText Side Diffuse`     | Side Diffuse               |
| `ADBE 3DText Side Specular`    | Side Specular Intensity    |
| `ADBE 3DText Side Shininess`   | Side Specular Shininess    |
| `ADBE 3DText Side Metal`       | Side Metal                 |
| `ADBE 3DText Side Reflection`  | Side Reflection Intensity  |
| `ADBE 3DText Side Gloss`       | Side Reflection Sharpness  |
| `ADBE 3DText Side Fresnel`     | Side Reflection Rolloff    |
| `ADBE 3DText Side Xparency`    | Side Transparency          |
| `ADBE 3DText Side XparRoll`    | Side Transparency Rolloff  |
| `ADBE 3DText Side IOR`         | Side Index of Refraction   |
| `ADBE 3DText Back RGB`         | Back Color                 |
| `ADBE 3DText Back Hue`         | Back Hue                   |
| `ADBE 3DText Back Sat`         | Back Saturation            |
| `ADBE 3DText Back Bright`      | Back Brightness            |
| `ADBE 3DText Back Opacity`     | Back Opacity               |
| `ADBE 3DText Back Ambient`     | Back Ambient               |
| `ADBE 3DText Back Diffuse`     | Back Diffuse               |
| `ADBE 3DText Back Specular`    | Back Specular Intensity    |
| `ADBE 3DText Back Shininess`   | Back Specular Shininess    |
| `ADBE 3DText Back Metal`       | Back Metal                 |
| `ADBE 3DText Back Reflection`  | Back Reflection Intensity  |
| `ADBE 3DText Back Gloss`       | Back Reflection Sharpness  |
| `ADBE 3DText Back Fresnel`     | Back Reflection Rolloff    |
| `ADBE 3DText Back Xparency`    | Back Transparency          |
| `ADBE 3DText Back XparRoll`    | Back Transparency Rolloff  |
| `ADBE 3DText Back IOR`         | Back Index of Refraction   |
| `ADBE 3DText Bevel Depth`      | Bevel Depth                |
| `ADBE 3DText Extrude Depth`    | Extrusion Depth            |

## Safe Inspection Helpers

Use this when adding effects or when a property name is uncertain:

```jsx
function dumpProperties(group, indent) {
  indent = indent || "";
  if (!group || !group.numProperties) {
    return "";
  }
  var lines = "";
  for (var i = 1; i <= group.numProperties; i += 1) {
    var p = group.property(i);
    lines +=
      indent +
      i +
      ": " +
      p.name +
      " | " +
      p.matchName +
      " | " +
      p.propertyValueType +
      "\n";
    if (p.numProperties && p.numProperties > 0) {
      lines += dumpProperties(p, indent + "  ");
    }
  }
  return lines;
}
```

Write the dump to a log, then set effect properties by confirmed child match names or indexes. This avoids color/point mismatches like passing `[x, y]` into a color property.
