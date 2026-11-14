/**
 * Celestial Particle Web Engine for G-Shock GAC-2500
 * Renders high-performance interactive particle networks, time-reactive pulses,
 * and magnetic shockwave webs around the timepiece.
 */

class ParticleWebEngine {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { alpha: true });
    this.particles = [];
    this.numParticles = 120;
    this.maxDistance = 110;
    this.mouse = { x: null, y: null, radius: 150 };
    this.colorTheme = 'green'; // 'green', 'gold', 'cyber', 'mono'
    this.pulseWave = 0;
    this.active = true;
    this.mode = 'orbit'; // 'orbit', 'matrix', 'constellation'
    this.center = { x: 0, y: 0, radius: 260 };

    this.init();
    this.bindEvents();
  }

  init() {
    this.resize();
    this.createParticles();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.center = {
      x: this.width / 2,
      y: this.height / 2,
      radius: Math.min(this.width, this.height) * 0.28
    };
  }

  createParticles() {
    this.particles = [];
    const count = window.innerWidth < 768 ? 60 : this.numParticles;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = this.center.radius + (Math.random() * 220 - 40);
      const x = this.center.x + Math.cos(angle) * dist;
      const y = this.center.y + Math.sin(angle) * dist;

      this.particles.push({
        x: x,
        y: y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2.2 + 1.2,
        orbitAngle: angle,
        orbitRadius: dist,
        orbitSpeed: (Math.random() * 0.003 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        pulse: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.04 + 0.02,
        alpha: Math.random() * 0.6 + 0.3
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });

    // Touch support for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouse.x = e.touches[0].clientX;
        this.mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  setTheme(theme) {
    this.colorTheme = theme;
  }

  setMode(mode) {
    this.mode = mode;
  }

  // Trigger shockwave on second tick
  triggerShockwave() {
    this.pulseWave = 1.0;
  }

  update() {
    if (!this.active) return;

    if (this.pulseWave > 0) {
      this.pulseWave -= 0.035;
      if (this.pulseWave < 0) this.pulseWave = 0;
    }

    const shockFactor = this.pulseWave * 15;

    for (let p of this.particles) {
      p.pulse += p.pulseSpeed;

      if (this.mode === 'orbit') {
        p.orbitAngle += p.orbitSpeed;
        const currentDist = p.orbitRadius + Math.sin(p.pulse) * 12 + shockFactor;
        const targetX = this.center.x + Math.cos(p.orbitAngle) * currentDist;
        const targetY = this.center.y + Math.sin(p.orbitAngle) * currentDist;

        p.x += (targetX - p.x) * 0.05;
        p.y += (targetY - p.y) * 0.05;
      } else {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce within screen edges
        if (p.x < 0 || p.x > this.width) p.vx *= -1;
        if (p.y < 0 || p.y > this.height) p.vy *= -1;
      }

      // Mouse interactive repulsion / attraction
      if (this.mouse.x !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force * 4;
          p.y += Math.sin(angle) * force * 4;
        }
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    if (!this.active) return;

    const themeColors = {
      green: { p: 'rgba(56, 222, 126,', line: 'rgba(56, 222, 126,' },
      gold: { p: 'rgba(235, 186, 76,', line: 'rgba(235, 186, 76,' },
      cyber: { p: 'rgba(0, 240, 255,', line: 'rgba(128, 0, 255,' },
      mono: { p: 'rgba(220, 225, 230,', line: 'rgba(180, 190, 200,' }
    };

    const cur = themeColors[this.colorTheme] || themeColors.green;

    // Draw connecting web lines
    const len = this.particles.length;
    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const p1 = this.particles[i];
        const p2 = this.particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < this.maxDistance) {
          const alpha = (1 - dist / this.maxDistance) * 0.35 * ((p1.alpha + p2.alpha) / 2);
          this.ctx.beginPath();
          this.ctx.strokeStyle = `${cur.line} ${alpha})`;
          this.ctx.lineWidth = 1;
          this.ctx.moveTo(p1.x, p1.y);
          this.ctx.lineTo(p2.x, p2.y);
          this.ctx.stroke();
        }
      }
    }

    // Connect particles to mouse
    if (this.mouse.x !== null) {
      for (let p of this.particles) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const alpha = (1 - dist / this.mouse.radius) * 0.45;
          this.ctx.beginPath();
          this.ctx.strokeStyle = `${cur.p} ${alpha})`;
          this.ctx.lineWidth = 1.2;
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(this.mouse.x, this.mouse.y);
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let p of this.particles) {
      const radius = p.size * (1 + Math.sin(p.pulse) * 0.3);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `${cur.p} ${p.alpha})`;
      this.ctx.shadowBlur = 10;
      this.ctx.shadowColor = `${cur.p} 0.8)`;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    // Pulse shockwave ring around clock center
    if (this.pulseWave > 0.02) {
      const ringRadius = this.center.radius * (1 + (1 - this.pulseWave) * 0.6);
      this.ctx.beginPath();
      this.ctx.arc(this.center.x, this.center.y, ringRadius, 0, Math.PI * 2);
      this.ctx.strokeStyle = `${cur.line} ${this.pulseWave * 0.4})`;
      this.ctx.lineWidth = 2 * this.pulseWave;
      this.ctx.stroke();
    }
  }

  loop() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  start() {
    this.loop();
  }
}

window.ParticleWebEngine = ParticleWebEngine;
