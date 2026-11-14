# Casio G-Shock Analog Timepiece & Screensaver Web Framework

An interactive, responsive screensaver timepiece web application featuring authentic Casio G-Shock analog models, including the **GAC-2500-3A ("CasioNaut")** and **GAC-2500-3A Vector BW** (both Full Strap and Dial-only variants).

---

## 📖 Comprehensive Documentation
For the complete engineering architecture, mathematical formulas, calibration algorithms, and instructions on how to port this framework to another project, see:
👉 **[TIMEPIECE_ENGINEERING_MANUAL.md](file:///C:/github_harelsh/ClockWeb/CASIO/TIMEPIECE_ENGINEERING_MANUAL.md)**

For quick instructions on onboarding a new model:
👉 **[ADD_NEW_CLOCK_GUIDE.md](file:///C:/github_harelsh/ClockWeb/CASIO/ADD_NEW_CLOCK_GUIDE.md)**

---

## ⏱️ Features & Highlights

1. **Natural Watch Case Presentation (Zero Circular Crop)**:
   - Full rectangular and octagonal watch cases with straps are preserved without artificial `border-radius: 50%` cropping.
   - Dynamic viewport sizing covers from upper to bottom of screen across any display resolution.

2. **Multi-Model Architecture**:
   - **GAC-2500-3A (Original Green Resin)**: Authentic dark green resin case with tactical green particle theme.
   - **GAC-2500-3A Vector BW (With Strap)**: 1088x1552 full-case presentation with monochrome silver particle theme.
   - **GAC-2500-3A Vector BW (Dial Only)**: 1072x963 wide dial presentation.

3. **Circular Date Disc Radius Curvature**:
   - The 3-day date window (yesterday, today, tomorrow) follows the circular radius curve of the internal rotating date wheel instead of a rigid vertical line.
   - Yesterday tilts counter-clockwise and shifts inwards; tomorrow tilts clockwise and shifts inwards.

4. **Kinetic Randomized 3D Vector Motion**:
   - Organic, non-repeating 3D wander drift with critically damped spring interpolation.
   - **Default OFF** with explicit **"✓" (V) checkmark** activation.
   - Segmented speed bars selector: `SPEED [ ▂▃▄ ]` for 0.5x, 0.8x, 1.2x, 2.0x.

5. **Screensaver & Fullscreen Auto-Attachment**:
   - In screensaver mode, HUD elements auto-fade with zero layout shift.
   - Automatically attaches edge-to-edge (100% height) in Fullscreen mode.
   - Sizing controls via header button (`Screen: 98%`), calibration slider, or hotkeys (<kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd>).

6. **Automated Marker Calibration**:
   - Programmatic center extraction tool ([tools/analyze_markers.py](file:///C:/github_harelsh/ClockWeb/CASIO/tools/analyze_markers.py)) using 8-way flood fill clustering on green markers (`RGB 34, 177, 76`).
   - Built-in real-time calibration drawer with live crosshair guides and one-click JSON export.

---

## 📁 Repository Structure

```text
CASIO/
├── index.html                       # Main web application entrypoint
├── style.css                        # Responsive styles, 3D perspective, date curvature, HUD
├── app.js                           # Core timepiece engine, multi-model registry, kinetic drift
├── particles.js                     # Interactive canvas celestial particle web
├── TIMEPIECE_ENGINEERING_MANUAL.md  # Comprehensive methodology & architecture manual
├── ADD_NEW_CLOCK_GUIDE.md           # Step-by-step watch onboarding guide
├── .agents/skills/                  # Antigravity CLI project skills
│   └── casio-clock-creator/SKILL.md
├── tools/
│   └── analyze_markers.py           # Automated green circle marker calibration script
├── Watch/                           # Modular watch models repository
│   ├── CASIO-GAC-2500-3A/           # Green Resin model
│   │   ├── png/                     # Authentic transparent dial & hand PNGs
│   │   └── map/                     # Calibration reference marker images
│   └── CASIO-GAC-2500-3A - VECTOR BW/ # Vector Black & White model (Strap & Dial)
│       ├── png/
│       └── map/
└── TEMP/                            # Source archive and raw assets
```

---

## ⌨️ Keyboard Shortcuts
- <kbd>F</kbd>: Toggle Fullscreen mode
- <kbd>+</kbd> / <kbd>=</kbd>: Increase screen size (+2%)
- <kbd>-</kbd> / <kbd>_</kbd>: Decrease screen size (-2%)
- <kbd>0</kbd>: Reset screen size to default 98%
- <kbd>[</kbd>: Decrease motion speed
- <kbd>]</kbd>: Increase motion speed
