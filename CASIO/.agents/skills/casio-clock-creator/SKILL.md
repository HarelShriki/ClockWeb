---
name: casio-clock-creator
description: Comprehensive workflow to onboard, calibrate, and render new Casio G-Shock timepiece models from raw photo assets, transparent PNG components, and green-circle map marker files.
---

# Casio Clock Creator Skill

Use this skill whenever adding or modifying Casio G-Shock watch models in this project (`ClockWeb/CASIO`).

## Standard Directory Architecture

Every watch model must be located inside `Watch/<MODEL_NAME>/` with the following structure:
- `Watch/<MODEL_NAME>/png/`: Contains transparent component images:
  - `clock clean.png` (or `clock clean 1.png`, `clock clean 2.png` for variants)
  - `hands Hour.png`
  - `hands Minute.png`
  - `hands second.png`
- `Watch/<MODEL_NAME>/map/`: Contains marker reference images with calibration circles:
  - `center color.png` (swatch of target marker color, e.g. RGB(34, 177, 76))
  - `clock clean.png` (dial with colored marker circles on center, subdial, and date window)
  - `hands Hour.jpg` (hour hand with marker circle on pivot point)
  - `hands Minute.jpg` (minute hand with marker circle on pivot point)
  - `hands second.jpg` (second hand with marker circle on pivot point)

## Step-by-Step Workflow

### 1. Run Automated Marker Analysis
Execute the calibration tool:
```bash
python tools/analyze_markers.py "<MODEL_NAME>"
```
This reads `center color.png`, clusters matching pixels, and calculates exact coordinates:
- Dial main pinion: `centerX`, `centerY` (in percentages of dial width & height).
- 9 O'clock subdial: `subdialX`, `subdialY`.
- 3 O'clock date aperture: `dateX`, `dateY`, `dateW`, `dateH`.
- Hand pivots: `hourPivotX`, `hourPivotY`, `minPivotX`, `minPivotY`, `secPivotX`, `secPivotY`.

### 2. Determine Scale & Rotation Offsets
- **Hand Scale**: Calculate hand length relative to dial radius. Standard ratios are ~0.34 to 0.40 for main hands, and ~0.25 to 0.31 for subdial second hand.
- **Hand Rotation Offset**: In CSS, `rotate(0deg)` points straight UP (12 o'clock). If the raw PNG hand image points downward (e.g. tip towards bottom), set `secRotOffset: 180`.

### 3. Register in `WATCH_MODELS` inside `app.js`
Add the model object with all coordinates, native dimensions (`dialNativeW`, `dialNativeH`), aspect ratio (`dialNativeW / dialNativeH`), hand pivots, and particle theme (`'green'` or `'mono'`).

### 4. Update UI in `index.html`
Add `<option value="MODEL_KEY">Display Name</option>` to `<select id="model-selector">`.

### 5. Verification
- Run `node -c app.js` to ensure zero syntax errors.
- Verify all image paths resolve.
- Open the webpage, toggle the model, check hand alignments and date window in the real-time Calibration drawer.
