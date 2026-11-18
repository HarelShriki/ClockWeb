/**
 * Casio G-Shock Multi-Model Engine & Screensaver
 * Supports:
 *  - CASIO-GAC-2500-3A (Original Green Resin)
 *  - CASIO-GAC-2500-3A - VECTOR BW (With Strap)
 *  - CASIO-GAC-2500-3A - VECTOR BW (Dial Only)
 *
 * Uses calibrated marker centers from map/ directories and authentic transparent PNG assets.
 */

const WATCH_MODELS = {
  'CASIO-GAC-2500-3A': {
    name: 'GAC-2500-3A (Green Resin)',
    folder: 'Watch/CASIO-GAC-2500-3A',
    dialPng: 'Watch/CASIO-GAC-2500-3A/png/clock clean.png',
    dialWebp: 'Watch/CASIO-GAC-2500-3A/clock clean.webp',
    dialMap: 'Watch/CASIO-GAC-2500-3A/map/clock clean.png',
    handHour: 'Watch/CASIO-GAC-2500-3A/png/hands Hour.png',
    handMinute: 'Watch/CASIO-GAC-2500-3A/png/hands Minute.png',
    handSecond: 'Watch/CASIO-GAC-2500-3A/png/hands second.png',
    dialNativeW: 1024,
    dialNativeH: 1024,
    aspectRatio: 1.0,
    centerX: 50.10,
    centerY: 48.68,
    subdialX: 31.45,
    subdialY: 49.13,
    dateX: 77.83,
    dateY: 49.90,
    dateW: 5.37,
    dateH: 12.60,
    dateArcAngle: 8.5, // Circular date disc radius arc angle (deg)
    hourNativeW: 215,
    hourNativeH: 854,
    hourPivotX: 51.16,
    hourPivotY: 70.91,
    hourScale: 0.395,
    hourRotOffset: 0,
    minNativeW: 205,
    minNativeH: 1058,
    minPivotX: 49.50,
    minPivotY: 80.96,
    minScale: 0.395,
    minRotOffset: 0,
    secNativeW: 131,
    secNativeH: 584,
    secPivotX: 46.97,
    secPivotY: 58.06,
    secScale: 0.258,
    secRotOffset: 0,
    particleTheme: 'green'
  },
  'CASIO-GAC-2500-3A-VECTOR-BW-STRAP': {
    name: 'GAC-2500-3A Vector BW (With Strap)',
    folder: 'Watch/CASIO-GAC-2500-3A - VECTOR BW',
    dialPng: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/clock clean 1.png',
    dialWebp: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/clock clean 1.png',
    dialMap: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/map/clock clean 1.png',
    handHour: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/hands Hour.png',
    handMinute: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/hands Minute.png',
    handSecond: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/hands second.png',
    dialNativeW: 1088,
    dialNativeH: 1552,
    aspectRatio: 1088 / 1552,
    centerX: 49.13,
    centerY: 47.58,
    subdialX: 32.76,
    subdialY: 47.64,
    dateX: 73.72,
    dateY: 48.03,
    dateW: 5.70,
    dateH: 8.96,
    dateArcAngle: 9.0, // Circular date disc radius arc angle (deg)
    hourNativeW: 262,
    hourNativeH: 938,
    hourPivotX: 49.24,
    hourPivotY: 74.52,
    hourScale: 0.342,
    hourRotOffset: 0,
    minNativeW: 237,
    minNativeH: 1246,
    minPivotX: 49.58,
    minPivotY: 80.06,
    minScale: 0.341,
    minRotOffset: 0,
    secNativeW: 180,
    secNativeH: 489,
    secPivotX: 50.00,
    secPivotY: 42.01,
    secScale: 0.307,
    secRotOffset: 180, // tip points downwards at y=489 in raw asset
    particleTheme: 'mono'
  },
  'CASIO-GAC-2500-3A-VECTOR-BW-DIAL': {
    name: 'GAC-2500-3A Vector BW (Dial Only)',
    folder: 'Watch/CASIO-GAC-2500-3A - VECTOR BW',
    dialPng: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/clock clean 2.png',
    dialWebp: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/clock clean 2.png',
    dialMap: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/map/clock clean 2.png',
    handHour: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/hands Hour.png',
    handMinute: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/hands Minute.png',
    handSecond: 'Watch/CASIO-GAC-2500-3A - VECTOR BW/png/hands second.png',
    dialNativeW: 1072,
    dialNativeH: 963,
    aspectRatio: 1072 / 963,
    centerX: 49.71,
    centerY: 50.22,
    subdialX: 33.35,
    subdialY: 50.57,
    dateX: 75.00,
    dateY: 51.21,
    dateW: 5.69,
    dateH: 14.75,
    dateArcAngle: 8.5, // Circular date disc radius arc angle (deg)
    hourNativeW: 262,
    hourNativeH: 938,
    hourPivotX: 49.24,
    hourPivotY: 74.52,
    hourScale: 0.342,
    hourRotOffset: 0,
    minNativeW: 237,
    minNativeH: 1246,
    minPivotX: 49.58,
    minPivotY: 80.06,
    minScale: 0.341,
    minRotOffset: 0,
    secNativeW: 180,
    secNativeH: 489,
    secPivotX: 50.00,
    secPivotY: 42.01,
    secScale: 0.307,
    secRotOffset: 180,
    particleTheme: 'mono'
  }
};

class CasioWatchApp {
  constructor() {
    // DOM Elements
    this.watchFrame = document.getElementById('watch-frame');
    this.watchSurface = document.getElementById('watch-surface');
    this.dialPngImg = document.getElementById('dial-png-img');
    this.dialWebpImg = document.getElementById('dial-webp-img');
    this.dialMapImg = document.getElementById('dial-map-img');
    this.dateWindow = document.getElementById('date-window');
    this.datePrevText = document.getElementById('date-prev-text');
    this.dateCurrText = document.getElementById('date-curr-text') || document.getElementById('date-day-text');
    this.dateNextText = document.getElementById('date-next-text');

    this.subdialAnchor = document.getElementById('subdial-anchor');
    this.handSecond = document.getElementById('hand-second');

    this.mainPinionAnchor = document.getElementById('main-pinion-anchor');
    this.handHour = document.getElementById('hand-hour');
    this.handMinute = document.getElementById('hand-minute');

    // Controls Elements
    this.modelSelector = document.getElementById('model-selector');
    this.toggleMotionBtn = document.getElementById('toggle-motion');
    this.motionText = document.getElementById('motion-text');
    this.toggleScreenScaleBtn = document.getElementById('toggle-screen-scale');
    this.screenScaleText = document.getElementById('screen-scale-text');

    // HUD Elements
    this.hudDateVal = document.getElementById('hud-date-val');
    this.hudDigitalTime = document.getElementById('hud-digital-time');
    this.hudSecVal = document.getElementById('hud-sec-val');
    this.headerBar = document.getElementById('header-bar');
    this.hudBar = document.getElementById('hud-bar');

    // Calibration Elements
    this.calibrationDrawer = document.getElementById('calibration-drawer');
    this.calibrationOverlay = document.getElementById('calibration-overlay');

    // Active Model & Config (Supports ?model= URL param & localStorage persistence)
    const urlParams = new URLSearchParams(window.location.search);
    const paramModel = urlParams.get('model');
    let savedModel = null;
    try {
      savedModel = localStorage.getItem('casioActiveModelKey');
    } catch (e) {}

    if (paramModel && WATCH_MODELS[paramModel]) {
      this.activeModelKey = paramModel;
      try { localStorage.setItem('casioActiveModelKey', paramModel); } catch (e) {}
    } else if (savedModel && WATCH_MODELS[savedModel]) {
      this.activeModelKey = savedModel;
    } else {
      this.activeModelKey = 'CASIO-GAC-2500-3A';
    }
    this.config = Object.assign({}, WATCH_MODELS[this.activeModelKey]);

    this.movementMode = 'quartz'; // 'quartz' or 'sweep'
    this.dialModeIndex = 0; // 0: Clean PNG, 1: WebP Original, 2: Green Center Map
    this.dialModes = ['PNG Clean', 'WebP Clean', 'Center Map'];
    this.isMuted = true;
    this.isCalibrating = false;
    this.motionActive = false; // Default OFF: motion only activates if explicitly toggled by user with V checkmark
    this.lastTickSecond = -1;

    // Randomized Kinetic Vector Drift & Speed
    this.motionSpeedFactor = 1.2; // Default: 1.2x (3 bars)
    this.motionSpeedLevels = [0.5, 0.8, 1.2, 2.0];
    this.currentSpeedLevel = 3;
    this.currentMotion = { x: 0, y: 0, rotX: 0, rotY: 0, rotZ: 0 };
    this.targetMotion = { x: 0, y: 0, rotX: 0, rotY: 0, rotZ: 0 };
    this.lastTargetTime = 0;
    this.lastFrameTime = performance.now();
    this.mouseTilt = { x: 0, y: 0 };

    // Screen Coverage & Zoom (Supports > 100% Zoom)
    this.screenScale = 0.98; // Default: 98% height (covers from upper to bottom of screen)
    this.scalePresets = [0.98, 1.00, 1.15, 1.30, 1.50, 0.75, 0.88];
    this.scalePresetIndex = 0;

    // Screensaver Idle Timer
    this.idleTimer = null;
    this.idleDelayMs = 3500;

    // Web Audio
    this.audioCtx = null;

    // Particle Web
    const canvas = document.getElementById('particle-canvas');
    if (canvas && window.ParticleWebEngine) {
      this.particleEngine = new ParticleWebEngine(canvas);
      this.particleEngine.setTheme(this.config.particleTheme || 'green');
      this.particleEngine.start();
    }

    this.init();
  }

  init() {
    if (this.modelSelector) {
      this.modelSelector.value = this.activeModelKey;
    }
    this.switchModel(this.activeModelKey);
    this.bindEvents();
    this.bindCalibrationSliders();
    this.setupScreensaverIdle();
    this.setMotionSpeed(this.currentSpeedLevel);
    this.tick();
  }

  // --- Dynamic Model Switcher ---
  switchModel(modelKey) {
    if (!WATCH_MODELS[modelKey]) return;
    this.activeModelKey = modelKey;
    this.config = Object.assign({}, WATCH_MODELS[modelKey]);

    try {
      localStorage.setItem('casioActiveModelKey', modelKey);
    } catch (e) {}

    if (this.modelSelector && this.modelSelector.value !== modelKey) {
      this.modelSelector.value = modelKey;
    }

    if (window.parent && window.parent !== window) {
      try {
        window.parent.postMessage({ type: 'CLOCKWEB_CASIO_MODEL_CHANGED', model: modelKey }, '*');
      } catch (e) {}
    }

    // Update Image Sources
    if (this.dialPngImg) this.dialPngImg.src = this.config.dialPng;
    if (this.dialWebpImg) this.dialWebpImg.src = this.config.dialWebp;
    if (this.dialMapImg) this.dialMapImg.src = this.config.dialMap;

    if (this.handHour) this.handHour.src = this.config.handHour;
    if (this.handMinute) this.handMinute.src = this.config.handMinute;
    if (this.handSecond) this.handSecond.src = this.config.handSecond;

    // Update Particle Web Theme
    if (this.particleEngine && this.config.particleTheme) {
      this.particleEngine.setTheme(this.config.particleTheme);
    }

    // Reset dial mode to PNG Clean
    this.dialModeIndex = 0;
    const dialModeText = document.getElementById('dial-mode-text');
    if (dialModeText) dialModeText.textContent = `Dial: ${this.dialModes[0]}`;
    if (this.dialPngImg) this.dialPngImg.classList.add('active');
    if (this.dialWebpImg) this.dialWebpImg.classList.remove('active');
    if (this.dialMapImg) this.dialMapImg.classList.remove('active');

    this.applyConfig();
    this.syncSlidersFromConfig();
  }

  // --- Dynamic Screen Size & Zoom Modifier (40% - 200%) ---
  setScreenScale(val) {
    this.screenScale = Math.max(0.40, Math.min(2.0, val));
    const pct = Math.round(this.screenScale * 100);
    if (this.screenScaleText) this.screenScaleText.textContent = `Screen: ${pct}%`;
    const sliderEl = document.getElementById('slider-screen-scale');
    const valEl = document.getElementById('val-screen-scale');
    if (sliderEl) sliderEl.value = pct;
    if (valEl) valEl.textContent = `${pct}%`;
    this.applyConfig();
  }

  // --- Dynamic Randomized Motion Speed & Segmented Bars ---
  setMotionSpeed(val) {
    let speed, level;
    if (typeof val === 'number' && val <= 4 && val >= 1) {
      level = Math.round(val);
      speed = this.motionSpeedLevels[level - 1];
    } else {
      speed = Math.max(0.2, Math.min(3.5, parseFloat(val)));
      level = this.motionSpeedLevels.reduce((prevIdx, curr, idx, arr) => {
        return Math.abs(curr - speed) < Math.abs(arr[prevIdx] - speed) ? idx : prevIdx;
      }, 0) + 1;
    }

    this.motionSpeedFactor = speed;
    this.currentSpeedLevel = level;

    // Update segmented speed bars
    const bars = document.querySelectorAll('.speed-bar');
    bars.forEach(b => {
      const bLevel = parseInt(b.getAttribute('data-level'), 10);
      b.classList.toggle('active', bLevel <= level);
    });

    const badge = document.getElementById('speed-val-badge');
    if (badge) badge.textContent = `${speed.toFixed(1)}x`;

    const slider = document.getElementById('slider-motion-speed');
    const valText = document.getElementById('val-motion-speed');
    if (slider) slider.value = speed;
    if (valText) valText.textContent = `${speed.toFixed(1)}x`;
  }

  // --- Kinetic Organic Vector Drift Engine ---
  updateKineticMotion(now) {
    if (!this.watchFrame) return;

    const dt = Math.min(0.08, (now - this.lastFrameTime) / 1000);
    this.lastFrameTime = now;

    if (!this.motionActive) {
      // Ease back smoothly to static rest (0, 0, 0)
      const easeBack = Math.min(1.0, dt * 5.0);
      this.currentMotion.x += (0 - this.currentMotion.x) * easeBack;
      this.currentMotion.y += (0 - this.currentMotion.y) * easeBack;
      this.currentMotion.rotX += (0 - this.currentMotion.rotX) * easeBack;
      this.currentMotion.rotY += (0 - this.currentMotion.rotY) * easeBack;
      this.currentMotion.rotZ += (0 - this.currentMotion.rotZ) * easeBack;

      if (Math.abs(this.currentMotion.rotX) > 0.02 || Math.abs(this.currentMotion.rotY) > 0.02) {
        this.watchFrame.style.transform = `perspective(1200px) translate3d(${this.currentMotion.x.toFixed(2)}px, ${this.currentMotion.y.toFixed(2)}px, 0) rotateX(${this.currentMotion.rotX.toFixed(2)}deg) rotateY(${this.currentMotion.rotY.toFixed(2)}deg) rotateZ(${this.currentMotion.rotZ.toFixed(2)}deg)`;
      } else {
        this.watchFrame.style.transform = '';
      }
      return;
    }

    // Pick new random 3D wander vectors periodically
    const interval = 2800 / this.motionSpeedFactor;
    if (now - this.lastTargetTime > interval) {
      this.lastTargetTime = now;
      const rx = (Math.random() - 0.5) * 2;
      const ry = (Math.random() - 0.5) * 2;
      const rRotX = (Math.random() - 0.5) * 2;
      const rRotY = (Math.random() - 0.5) * 2;
      const rRotZ = (Math.random() - 0.5) * 2;

      this.targetMotion.x = rx * 12;
      this.targetMotion.y = ry * 9;
      this.targetMotion.rotX = rRotX * 3.6;
      this.targetMotion.rotY = rRotY * 4.6;
      this.targetMotion.rotZ = rRotZ * 1.2;
    }

    // Critically damped spring lerp towards target vector
    const lerpSpeed = Math.min(1.0, dt * 1.7 * this.motionSpeedFactor);
    this.currentMotion.x += (this.targetMotion.x - this.currentMotion.x) * lerpSpeed;
    this.currentMotion.y += (this.targetMotion.y - this.currentMotion.y) * lerpSpeed;
    this.currentMotion.rotX += (this.targetMotion.rotX - this.currentMotion.rotX) * lerpSpeed;
    this.currentMotion.rotY += (this.targetMotion.rotY - this.currentMotion.rotY) * lerpSpeed;
    this.currentMotion.rotZ += (this.targetMotion.rotZ - this.currentMotion.rotZ) * lerpSpeed;

    const totalX = this.currentMotion.x;
    const totalY = this.currentMotion.y;
    const totalRotX = this.currentMotion.rotX + (this.mouseTilt.x || 0);
    const totalRotY = this.currentMotion.rotY + (this.mouseTilt.y || 0);
    const totalRotZ = this.currentMotion.rotZ;

    this.watchFrame.style.transform = `perspective(1200px) translate3d(${totalX.toFixed(2)}px, ${totalY.toFixed(2)}px, 0) rotateX(${totalRotX.toFixed(2)}deg) rotateY(${totalRotY.toFixed(2)}deg) rotateZ(${totalRotZ.toFixed(2)}deg)`;
  }

  // --- Responsive Coordinate & Sizing Layout ---
  applyConfig() {
    // 1. Calculate responsive frame dimensions covering from upper to bottom of screen
    const scale = this.screenScale || 0.98;
    const maxH = window.innerHeight * scale;
    const maxW = window.innerWidth * scale;
    const aspect = this.config.aspectRatio || 1.0;

    let frameW, frameH;
    if (aspect <= 1.0) {
      // Tall or square (e.g. 1088x1552 strap or 1024x1024)
      frameH = maxH;
      frameW = frameH * aspect;
      if (frameW > maxW) {
        frameW = maxW;
        frameH = frameW / aspect;
      }
    } else {
      // Wide (e.g. 1072x963 dial)
      frameW = maxW;
      frameH = frameW / aspect;
      if (frameH > maxH) {
        frameH = maxH;
        frameW = frameH * aspect;
      }
    }

    if (this.watchFrame) {
      this.watchFrame.style.width = `${frameW.toFixed(1)}px`;
      this.watchFrame.style.height = `${frameH.toFixed(1)}px`;
      this.watchFrame.style.setProperty('--watch-render-w', `${frameW.toFixed(1)}px`);
      this.watchFrame.style.setProperty('--watch-render-h', `${frameH.toFixed(1)}px`);
    }

    // Pixel scale factor: CSS pixels per dial native image pixel
    const dialPixelScale = frameW / this.config.dialNativeW;

    // 2. Main Pinion Anchor Position (Percentage of watch dial surface)
    if (this.mainPinionAnchor) {
      this.mainPinionAnchor.style.left = `${this.config.centerX}%`;
      this.mainPinionAnchor.style.top = `${this.config.centerY}%`;
    }

    // 3. Subdial Anchor Position (9h)
    if (this.subdialAnchor) {
      this.subdialAnchor.style.left = `${this.config.subdialX}%`;
      this.subdialAnchor.style.top = `${this.config.subdialY}%`;
    }

    // 4. Date Window Position & Circular Radius Curvature (3h)
    if (this.dateWindow) {
      this.dateWindow.style.left = `${this.config.dateX}%`;
      this.dateWindow.style.top = `${this.config.dateY}%`;
      this.dateWindow.style.width = `${this.config.dateW}%`;
      this.dateWindow.style.height = `${this.config.dateH}%`;

      // Date Wheel Circular Curvature: R = distance from center pinion to date aperture
      const dateRadiusPct = Math.abs(this.config.dateX - this.config.centerX);
      const dateRadiusPx = (dateRadiusPct / 100) * frameW;
      const arcAngleDeg = this.config.dateArcAngle !== undefined ? this.config.dateArcAngle : 8.5;
      // Inward sagittal chord shift along circle radius: R * (1 - cos(theta))
      const chordShiftPx = Math.max(2.5, dateRadiusPx * (1 - Math.cos(arcAngleDeg * Math.PI / 180)));

      this.dateWindow.style.setProperty('--date-curve-shift', `-${chordShiftPx.toFixed(2)}px`);
      this.dateWindow.style.setProperty('--date-curve-angle', `${arcAngleDeg.toFixed(1)}deg`);
    }

    // 5. Hour Hand
    if (this.handHour) {
      const w = this.config.hourNativeW * this.config.hourScale * dialPixelScale;
      const h = this.config.hourNativeH * this.config.hourScale * dialPixelScale;
      const px = w * (this.config.hourPivotX / 100);
      const py = h * (this.config.hourPivotY / 100);

      this.handHour.style.width = `${w.toFixed(2)}px`;
      this.handHour.style.height = `${h.toFixed(2)}px`;
      this.handHour.style.transformOrigin = `${this.config.hourPivotX}% ${this.config.hourPivotY}%`;
      this.handHour.style.left = `-${px.toFixed(2)}px`;
      this.handHour.style.top = `-${py.toFixed(2)}px`;
    }

    // 6. Minute Hand
    if (this.handMinute) {
      const w = this.config.minNativeW * this.config.minScale * dialPixelScale;
      const h = this.config.minNativeH * this.config.minScale * dialPixelScale;
      const px = w * (this.config.minPivotX / 100);
      const py = h * (this.config.minPivotY / 100);

      this.handMinute.style.width = `${w.toFixed(2)}px`;
      this.handMinute.style.height = `${h.toFixed(2)}px`;
      this.handMinute.style.transformOrigin = `${this.config.minPivotX}% ${this.config.minPivotY}%`;
      this.handMinute.style.left = `-${px.toFixed(2)}px`;
      this.handMinute.style.top = `-${py.toFixed(2)}px`;
    }

    // 7. Second Hand (9h Subdial)
    if (this.handSecond) {
      const w = this.config.secNativeW * this.config.secScale * dialPixelScale;
      const h = this.config.secNativeH * this.config.secScale * dialPixelScale;
      const px = w * (this.config.secPivotX / 100);
      const py = h * (this.config.secPivotY / 100);

      this.handSecond.style.width = `${w.toFixed(2)}px`;
      this.handSecond.style.height = `${h.toFixed(2)}px`;
      this.handSecond.style.transformOrigin = `${this.config.secPivotX}% ${this.config.secPivotY}%`;
      this.handSecond.style.left = `-${px.toFixed(2)}px`;
      this.handSecond.style.top = `-${py.toFixed(2)}px`;
    }

    // Update Calibration SVG Guides
    this.updateCalibrationSVG();
  }

  updateCalibrationSVG() {
    if (!this.calibrationOverlay) return;
    this.calibrationOverlay.setAttribute('viewBox', `0 0 ${this.config.dialNativeW} ${this.config.dialNativeH}`);

    const cx = (this.config.centerX / 100) * this.config.dialNativeW;
    const cy = (this.config.centerY / 100) * this.config.dialNativeH;
    const sx = (this.config.subdialX / 100) * this.config.dialNativeW;
    const sy = (this.config.subdialY / 100) * this.config.dialNativeH;
    const dx = (this.config.dateX / 100) * this.config.dialNativeW;
    const dy = (this.config.dateY / 100) * this.config.dialNativeH;
    const dw = (this.config.dateW / 100) * this.config.dialNativeW;
    const dh = (this.config.dateH / 100) * this.config.dialNativeH;

    const setAttr = (id, attrs) => {
      const el = document.getElementById(id);
      if (el) {
        for (const [k, v] of Object.entries(attrs)) {
          el.setAttribute(k, v);
        }
      }
    };

    setAttr('calib-center-circle', { cx, cy });
    setAttr('calib-center-guide', { cx, cy });
    setAttr('calib-cx-line', { y1: cy, y2: cy, x1: 0, x2: this.config.dialNativeW });
    setAttr('calib-cy-line', { x1: cx, x2: cx, y1: 0, y2: this.config.dialNativeH });

    setAttr('calib-subdial-circle', { cx: sx, cy: sy });
    setAttr('calib-subdial-guide', { cx: sx, cy: sy });
    setAttr('calib-sub-x', { x1: sx - 110, x2: sx + 110, y1: sy, y2: sy });
    setAttr('calib-sub-y', { y1: sy - 110, y2: sy + 110, x1: sx, x2: sx });

    setAttr('calib-date-box', { x: dx - dw / 2, y: dy - dh / 2, width: dw, height: dh });
  }

  // --- Clock Timing Tick ---
  tick() {
    const now = new Date();
    const ms = now.getMilliseconds();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    const dateDay = now.getDate();

    // Sound tick on new second
    if (sec !== this.lastTickSecond) {
      this.lastTickSecond = sec;
      this.playMechanicalTick();
      if (this.particleEngine) {
        this.particleEngine.triggerShockwave();
      }
    }

    let secFraction;
    if (this.movementMode === 'quartz') {
      if (ms < 75) {
        const p = ms / 75;
        secFraction = sec + Math.sin(p * Math.PI * 0.7) * 1.05;
      } else if (ms < 135) {
        const p = (ms - 75) / 60;
        secFraction = sec + 1.05 - p * 0.05;
      } else {
        secFraction = sec + 1.0;
      }
    } else {
      secFraction = sec + ms / 1000;
    }

    const minFraction = min + (sec + ms / 1000) / 60;
    const hourFraction = (hour % 12) + minFraction / 60;

    const secAngle = secFraction * 6;
    const minAngle = minFraction * 6;
    const hourAngle = hourFraction * 30;

    const secRot = (secAngle + (this.config.secRotOffset || 0)).toFixed(2);
    const minRot = (minAngle + (this.config.minRotOffset || 0)).toFixed(2);
    const hourRot = (hourAngle + (this.config.hourRotOffset || 0)).toFixed(2);

    if (this.handSecond) this.handSecond.style.transform = `rotate(${secRot}deg)`;
    if (this.handMinute) this.handMinute.style.transform = `rotate(${minRot}deg)`;
    if (this.handHour) this.handHour.style.transform = `rotate(${hourRot}deg)`;

    // Date Window at 3 O'clock: 3-Day Vertical Aperture (Day Before, Today, Day After)
    const prevDateObj = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
    const nextDateObj = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const prevDay = prevDateObj.getDate();
    const currDay = now.getDate();
    const nextDay = nextDateObj.getDate();

    if (this.datePrevText) this.datePrevText.textContent = prevDay;
    if (this.dateCurrText) this.dateCurrText.textContent = currDay;
    if (this.dateNextText) this.dateNextText.textContent = nextDay;

    // HUD displays
    if (this.hudDateVal) {
      const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
      this.hudDateVal.textContent = `${monthNames[now.getMonth()]} ${dateDay}`;
    }
    if (this.hudDigitalTime) {
      const hh = String(hour).padStart(2, '0');
      const mm = String(min).padStart(2, '0');
      const ss = String(sec).padStart(2, '0');
      this.hudDigitalTime.textContent = `${hh}:${mm}:${ss}`;
    }
    if (this.hudSecVal) {
      this.hudSecVal.textContent = String(sec).padStart(2, '0');
    }

    // Update Kinetic Randomized 3D Vector Motion
    this.updateKineticMotion(performance.now());

    requestAnimationFrame(() => this.tick());
  }

  // --- Web Audio Tick Synthesizer ---
  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playMechanicalTick() {
    if (this.isMuted) return;
    try {
      this.initAudio();
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      const filter = this.audioCtx.createBiquadFilter();

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2000, now);
      filter.Q.setValueAtTime(7, now);

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1350, now);
      osc.frequency.exponentialRampToValueAtTime(140, now + 0.018);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.022);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.025);
    } catch (e) {}
  }

  // --- Screensaver Auto-Fade System ---
  setupScreensaverIdle() {
    let lastParentPing = 0;
    const resetIdle = () => {
      document.body.classList.remove('user-idle');
      clearTimeout(this.idleTimer);

      const now = Date.now();
      if (window.parent && window.parent !== window && now - lastParentPing > 350) {
        lastParentPing = now;
        try {
          window.parent.postMessage({ type: 'CLOCKWEB_USER_ACTIVITY' }, '*');
        } catch (e) {}
      }

      if (!this.isCalibrating) {
        this.idleTimer = setTimeout(() => {
          document.body.classList.add('user-idle');
        }, this.idleDelayMs);
      }
    };

    window.addEventListener('mousemove', resetIdle, { passive: true });
    window.addEventListener('mousedown', resetIdle, { passive: true });
    window.addEventListener('keydown', resetIdle, { passive: true });
    window.addEventListener('touchstart', resetIdle, { passive: true });

    resetIdle();
  }

  // --- Event Bindings ---
  bindEvents() {
    // Window Resize -> Recompute Responsive Watch Layout
    window.addEventListener('resize', () => {
      this.applyConfig();
    });

    // Main Clock Selector Link Integration
    const openMainSelectorBtn = document.getElementById('open-main-selector');
    if (openMainSelectorBtn) {
      openMainSelectorBtn.addEventListener('click', (e) => {
        if (window.parent && window.parent !== window) {
          e.preventDefault();
          try {
            window.parent.postMessage({ type: 'CLOCKWEB_OPEN_SELECTOR' }, '*');
          } catch (err) {}
        }
      });
    }

    // Listen for Parent Selector Commands
    window.addEventListener('message', (e) => {
      if (e.data && e.data.type === 'CLOCKWEB_SET_CASIO_MODEL' && e.data.model) {
        this.switchModel(e.data.model);
      }
    });

    // Model Selector Change
    if (this.modelSelector) {
      this.modelSelector.addEventListener('change', (e) => {
        this.switchModel(e.target.value);
      });
    }

    // 3D Motion Toggle Button (OFF by default; enabled only when checked with V)
    if (this.toggleMotionBtn) {
      this.toggleMotionBtn.addEventListener('click', () => {
        this.motionActive = !this.motionActive;
        this.toggleMotionBtn.classList.toggle('active', this.motionActive);
        if (this.motionText) this.motionText.textContent = this.motionActive ? '3D Motion: ON' : '3D Motion: OFF';
      });
    }

    // Motion Speed Segmented Bars Control (Slow -> Fast)
    const speedBarsControl = document.getElementById('speed-bars-control');
    if (speedBarsControl) {
      speedBarsControl.addEventListener('click', (e) => {
        const bar = e.target.closest('.speed-bar');
        if (bar) {
          const level = parseInt(bar.getAttribute('data-level'), 10);
          this.setMotionSpeed(level);
        } else {
          // Cycle through levels 1 -> 2 -> 3 -> 4 -> 1
          const nextLevel = (this.currentSpeedLevel % 4) + 1;
          this.setMotionSpeed(nextLevel);
        }
        // Auto-enable motion when user interacts with speed bars
        if (!this.motionActive) {
          this.motionActive = true;
          if (this.toggleMotionBtn) this.toggleMotionBtn.classList.add('active');
          if (this.motionText) this.motionText.textContent = '3D Motion: ON';
        }
      });
    }

    // Interactive 3D Parallax Tilt on Mouse Move
    let mouseTiltTimeout = null;
    window.addEventListener('mousemove', (e) => {
      if (!this.motionActive || !this.watchFrame) return;

      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx; // -1 to 1
      const dy = (e.clientY - cy) / cy; // -1 to 1

      this.mouseTilt.x = -dy * 5.2; // deg
      this.mouseTilt.y = dx * 5.2;  // deg

      clearTimeout(mouseTiltTimeout);
      mouseTiltTimeout = setTimeout(() => {
        this.mouseTilt.x = 0;
        this.mouseTilt.y = 0;
      }, 1500);
    });

    // 3-Way Dial Toggle: Clean PNG -> WebP -> Center Map
    const dialToggleBtn = document.getElementById('toggle-dial-mode');
    const dialModeText = document.getElementById('dial-mode-text');
    if (dialToggleBtn) {
      dialToggleBtn.addEventListener('click', () => {
        this.dialModeIndex = (this.dialModeIndex + 1) % 3;
        const mode = this.dialModes[this.dialModeIndex];
        if (dialModeText) dialModeText.textContent = `Dial: ${mode}`;

        if (this.dialPngImg) this.dialPngImg.classList.toggle('active', this.dialModeIndex === 0);
        if (this.dialWebpImg) this.dialWebpImg.classList.toggle('active', this.dialModeIndex === 1);
        if (this.dialMapImg) this.dialMapImg.classList.toggle('active', this.dialModeIndex === 2);

        dialToggleBtn.classList.toggle('active', this.dialModeIndex > 0);
      });
    }

    // Movement Toggle (Quartz 1Hz vs Smooth Sweep)
    const movementToggleBtn = document.getElementById('toggle-movement');
    const movementText = document.getElementById('movement-text');
    if (movementToggleBtn) {
      movementToggleBtn.addEventListener('click', () => {
        this.movementMode = this.movementMode === 'quartz' ? 'sweep' : 'quartz';
        const isSweep = this.movementMode === 'sweep';
        movementToggleBtn.classList.toggle('active', isSweep);
        if (movementText) movementText.textContent = isSweep ? 'Smooth Sweep' : 'Quartz 1Hz';
      });
    }

    // Sound Toggle
    const soundToggleBtn = document.getElementById('toggle-sound');
    const iconOff = document.getElementById('sound-icon-off');
    const iconOn = document.getElementById('sound-icon-on');
    if (soundToggleBtn) {
      soundToggleBtn.addEventListener('click', () => {
        this.isMuted = !this.isMuted;
        if (!this.isMuted) {
          this.initAudio();
          this.playMechanicalTick();
        }
        soundToggleBtn.classList.toggle('active', !this.isMuted);
        if (iconOff) iconOff.style.display = this.isMuted ? 'block' : 'none';
        if (iconOn) iconOn.style.display = this.isMuted ? 'none' : 'block';
      });
    }

    // Calibrate Circles Drawer Toggle
    const calibBtn = document.getElementById('toggle-calibrate');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    if (calibBtn) {
      calibBtn.addEventListener('click', () => {
        this.isCalibrating = !this.isCalibrating;
        calibBtn.classList.toggle('active', this.isCalibrating);
        document.body.classList.toggle('calibrating-active', this.isCalibrating);
        if (this.calibrationDrawer) this.calibrationDrawer.classList.toggle('open', this.isCalibrating);
        if (this.calibrationOverlay) this.calibrationOverlay.classList.toggle('visible', this.isCalibrating);
        document.body.classList.remove('user-idle');
      });
    }
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', () => {
        this.isCalibrating = false;
        if (calibBtn) calibBtn.classList.remove('active');
        document.body.classList.remove('calibrating-active');
        if (this.calibrationDrawer) this.calibrationDrawer.classList.remove('open');
        if (this.calibrationOverlay) this.calibrationOverlay.classList.remove('visible');
      });
    }

    // Fullscreen Toggle
    const fsBtn = document.getElementById('toggle-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }

    // Fullscreen Change Event: Automatic Attachment to Full Screen Size
    document.addEventListener('fullscreenchange', () => {
      const isFS = !!document.fullscreenElement;
      document.body.classList.toggle('is-fullscreen', isFS);
      if (isFS) {
        // In full screen mode, automatically attach edge-to-edge (100% height)
        this.setScreenScale(1.00);
      } else {
        this.setScreenScale(0.98);
      }
    });

    // Screen Coverage / Size Preset Toggle (Upper to Bottom)
    if (this.toggleScreenScaleBtn) {
      this.toggleScreenScaleBtn.addEventListener('click', () => {
        this.scalePresetIndex = (this.scalePresetIndex + 1) % this.scalePresets.length;
        this.setScreenScale(this.scalePresets[this.scalePresetIndex]);
      });
    }

    // Keyboard Hotkeys: [+] Zoom in, [-] Zoom out, [0] Reset 98%, [F] Fullscreen
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === '+' || e.key === '=') {
        this.setScreenScale(this.screenScale + 0.02);
      } else if (e.key === '-' || e.key === '_') {
        this.setScreenScale(this.screenScale - 0.02);
      } else if (e.key === '0') {
        this.setScreenScale(0.98);
      } else if (e.key === '[' || e.key === '{') {
        this.setMotionSpeed(Math.max(1, this.currentSpeedLevel - 1));
      } else if (e.key === ']' || e.key === '}') {
        this.setMotionSpeed(Math.min(4, this.currentSpeedLevel + 1));
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      }
    });

    // Copy JSON Config Button
    const copyJsonBtn = document.getElementById('copy-json-btn');
    if (copyJsonBtn) {
      copyJsonBtn.addEventListener('click', () => {
        const outObj = {
          modelKey: this.activeModelKey,
          name: this.config.name,
          dialNativeW: this.config.dialNativeW,
          dialNativeH: this.config.dialNativeH,
          aspectRatio: this.config.aspectRatio,
          centerX: this.config.centerX,
          centerY: this.config.centerY,
          subdialX: this.config.subdialX,
          subdialY: this.config.subdialY,
          dateX: this.config.dateX,
          dateY: this.config.dateY,
          dateW: this.config.dateW,
          dateH: this.config.dateH,
          dateArcAngle: this.config.dateArcAngle,
          hands: {
            hour: {
              pivotXPercent: this.config.hourPivotX,
              pivotYPercent: this.config.hourPivotY,
              scaleOnDial: this.config.hourScale
            },
            minute: {
              pivotXPercent: this.config.minPivotX,
              pivotYPercent: this.config.minPivotY,
              scaleOnDial: this.config.minScale
            },
            second: {
              pivotXPercent: this.config.secPivotX,
              pivotYPercent: this.config.secPivotY,
              scaleOnDial: this.config.secScale
            }
          }
        };

        const jsonStr = JSON.stringify(outObj, null, 2);
        navigator.clipboard.writeText(jsonStr).then(() => {
          copyJsonBtn.textContent = 'Copied to Clipboard!';
          setTimeout(() => { copyJsonBtn.textContent = 'Copy Config JSON'; }, 2000);
        }).catch(() => {
          prompt('Copy configuration JSON:', jsonStr);
        });
      });
    }

    // Reset Defaults Button
    const resetBtn = document.getElementById('reset-calib-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.config = Object.assign({}, WATCH_MODELS[this.activeModelKey]);
        this.syncSlidersFromConfig();
        this.applyConfig();
      });
    }
  }

  // --- Real-time Calibration Sliders ---
  bindCalibrationSliders() {
    const bindSlider = (sliderId, labelId, configKey, isPercent = true, decimals = 2) => {
      const slider = document.getElementById(sliderId);
      const label = document.getElementById(labelId);
      if (slider && label) {
        slider.value = this.config[configKey];
        label.textContent = isPercent ? `${this.config[configKey].toFixed(decimals)}%` : this.config[configKey].toFixed(decimals);

        slider.addEventListener('input', (e) => {
          const val = parseFloat(e.target.value);
          this.config[configKey] = val;
          label.textContent = isPercent ? `${val.toFixed(decimals)}%` : val.toFixed(decimals);
          this.applyConfig();
        });
      }
    };

    bindSlider('slider-center-x', 'val-center-x', 'centerX', true, 2);
    bindSlider('slider-center-y', 'val-center-y', 'centerY', true, 2);

    bindSlider('slider-subdial-x', 'val-subdial-x', 'subdialX', true, 2);
    bindSlider('slider-subdial-y', 'val-subdial-y', 'subdialY', true, 2);
    bindSlider('slider-sec-py', 'val-sec-py', 'secPivotY', true, 2);
    bindSlider('slider-sec-scale', 'val-sec-scale', 'secScale', false, 3);

    bindSlider('slider-hour-px', 'val-hour-px', 'hourPivotX', true, 2);
    bindSlider('slider-hour-py', 'val-hour-py', 'hourPivotY', true, 2);
    bindSlider('slider-hour-scale', 'val-hour-scale', 'hourScale', false, 3);

    bindSlider('slider-min-px', 'val-min-px', 'minPivotX', true, 2);
    bindSlider('slider-min-py', 'val-min-py', 'minPivotY', true, 2);
    bindSlider('slider-min-scale', 'val-min-scale', 'minScale', false, 3);

    bindSlider('slider-date-x', 'val-date-x', 'dateX', true, 2);
    bindSlider('slider-date-y', 'val-date-y', 'dateY', true, 2);
    bindSlider('slider-date-arc', 'val-date-arc', 'dateArcAngle', false, 1);

    // Screen Coverage Slider (50% - 100%)
    const screenScaleSlider = document.getElementById('slider-screen-scale');
    const screenScaleLabel = document.getElementById('val-screen-scale');
    if (screenScaleSlider && screenScaleLabel) {
      screenScaleSlider.value = Math.round((this.screenScale || 0.98) * 100);
      screenScaleLabel.textContent = `${screenScaleSlider.value}%`;
      screenScaleSlider.addEventListener('input', (e) => {
        const val = parseFloat(e.target.value);
        this.setScreenScale(val / 100);
      });
    }

    // Motion Speed Factor Slider (0.3x - 3.0x)
    const motionSpeedSlider = document.getElementById('slider-motion-speed');
    if (motionSpeedSlider) {
      motionSpeedSlider.value = this.motionSpeedFactor || 1.2;
      motionSpeedSlider.addEventListener('input', (e) => {
        this.setMotionSpeed(parseFloat(e.target.value));
      });
    }
  }

  syncSlidersFromConfig() {
    const updateInput = (id, labelId, val, isPercent = true, decimals = 2) => {
      const el = document.getElementById(id);
      const lbl = document.getElementById(labelId);
      if (el && val !== undefined) el.value = val;
      if (lbl && val !== undefined) lbl.textContent = isPercent ? `${val.toFixed(decimals)}%` : val.toFixed(decimals);
    };

    updateInput('slider-screen-scale', 'val-screen-scale', Math.round((this.screenScale || 0.98) * 100), true, 0);
    updateInput('slider-motion-speed', 'val-motion-speed', this.motionSpeedFactor || 1.2, false, 1);
    updateInput('slider-date-arc', 'val-date-arc', this.config.dateArcAngle !== undefined ? this.config.dateArcAngle : 8.5, false, 1);
    updateInput('slider-center-x', 'val-center-x', this.config.centerX, true, 2);
    updateInput('slider-center-y', 'val-center-y', this.config.centerY, true, 2);
    updateInput('slider-subdial-x', 'val-subdial-x', this.config.subdialX, true, 2);
    updateInput('slider-subdial-y', 'val-subdial-y', this.config.subdialY, true, 2);
    updateInput('slider-sec-py', 'val-sec-py', this.config.secPivotY, true, 2);
    updateInput('slider-sec-scale', 'val-sec-scale', this.config.secScale, false, 3);
    updateInput('slider-hour-px', 'val-hour-px', this.config.hourPivotX, true, 2);
    updateInput('slider-hour-py', 'val-hour-py', this.config.hourPivotY, true, 2);
    updateInput('slider-hour-scale', 'val-hour-scale', this.config.hourScale, false, 3);
    updateInput('slider-min-px', 'val-min-px', this.config.minPivotX, true, 2);
    updateInput('slider-min-py', 'val-min-py', this.config.minPivotY, true, 2);
    updateInput('slider-min-scale', 'val-min-scale', this.config.minScale, false, 3);
    updateInput('slider-date-x', 'val-date-x', this.config.dateX, true, 2);
    updateInput('slider-date-y', 'val-date-y', this.config.dateY, true, 2);
  }
}

// Instantiate on DOM load
window.addEventListener('DOMContentLoaded', () => {
  window.app = new CasioWatchApp();
});
