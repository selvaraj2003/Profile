'use strict';

/* ═══════════════════════════════════════════════════
   1. SKILLS DATA
   Flat array — cards flow left-to-right, wrap naturally
═══════════════════════════════════════════════════ */
const SKILLS = [
  // Programming & Backend
  { name:'Python',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',       accent:'#3776ab' },
  { name:'Django',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg',           accent:'#00e5a0', bg:'rgba(0,229,160,.06)' },
  { name:'FastAPI',     img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',      accent:'#009688' },
  { name:'REST API',    img:'', accent:'#5eadf7',
    svg:`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="12" fill="rgba(94,173,247,.12)"/><text x="50%" y="27" text-anchor="middle" font-size="9" fill="#5eadf7" font-family="monospace" font-weight="bold">{REST}</text><text x="50%" y="41" text-anchor="middle" font-size="9" fill="#5eadf7" font-family="monospace">API</text></svg>` },
  { name:'JSON',        img:'', accent:'#f0db4f',
    svg:`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="12" fill="rgba(240,219,79,.1)"/><text x="50%" y="36" text-anchor="middle" font-size="15" fill="#f0db4f" font-family="monospace" font-weight="bold">JSON</text></svg>` },
  // Database
  { name:'MySQL',       img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',          accent:'#4479a1' },
  // DevOps / VCS
  { name:'Git',         img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',              accent:'#f05032' },
  { name:'GitHub',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',        accent:'#e0e0e0', bg:'rgba(255,255,255,.04)' },
  { name:'Docker',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',        accent:'#2496ed' },
  { name:'Azure DevOps',img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg', accent:'#0078d4' },
  // Cloud
  { name:'AWS',         img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', accent:'#ff9900' },
  { name:'Azure',       img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',          accent:'#0078d4' },
  // OS & System
  { name:'Linux',       img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',          accent:'#fcc624' },
  { name:'Ubuntu',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg',        accent:'#e95420' },
  { name:'CentOS',      img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/centos/centos-original.svg',        accent:'#932279' },
  { name:'Windows',     img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg',  accent:'#0078d4' },
  // Monitoring
  { name:'Prometheus',  img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg',accent:'#e6522c' },
  { name:'Grafana',     img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',      accent:'#f46800' },
  { name:'Nginx',       img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg',          accent:'#009639' },
  { name:'Cron/Scripts',img:'', accent:'#34d399',
    svg:`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="12" fill="rgba(52,211,153,.1)"/><text x="50%" y="25" text-anchor="middle" font-size="8" fill="#34d399" font-family="monospace">#!/bin</text><text x="50%" y="37" text-anchor="middle" font-size="8" fill="#34d399" font-family="monospace">/bash</text><text x="50%" y="49" text-anchor="middle" font-size="7" fill="#34d399" font-family="monospace">cron</text></svg>` },
  // Tools
  { name:'VS Code',     img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg',        accent:'#007acc' },
  { name:'Postman',     img:'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',      accent:'#ff6c37' },
];

const FLOAT_DUR   = [3.8,4.2,4.6,3.5,4.4,3.9,4.1,3.6,4.7,4.0,3.7,4.3,4.8,3.4,4.5,4.9,3.3,4.0,3.7,4.6,4.2,3.8];
const FLOAT_DELAY = [0,0.3,0.6,0.9,1.2,0.15,0.45,0.75,1.05,0.2,0.5,0.8,0.1,0.7,0.35,0.95,0.25,0.65,0.85,0.4,0.55,1.1];

function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  SKILLS.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'logo-item';
    item.style.setProperty('--accent', s.accent);
    item.style.setProperty('--fd',     FLOAT_DUR[i % FLOAT_DUR.length]   + 's');
    item.style.setProperty('--fdelay', FLOAT_DELAY[i % FLOAT_DELAY.length] + 's');

    const iconHTML = s.svg
      ? `<div class="logo-icon" role="img" aria-label="${s.name}">${s.svg}</div>`
      : `<div class="logo-icon"><img src="${s.img}" alt="${s.name}" loading="lazy"
           onerror="this.onerror=null;this.parentNode.innerHTML='<svg viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'><rect width=\\'60\\' height=\\'60\\' rx=\\'12\\' fill=\\'rgba(255,255,255,.06)\\'/><text x=\\'50%\\' y=\\'37\\' text-anchor=\\'middle\\' font-size=\\'13\\' fill=\\'#8892b0\\' font-family=\\'monospace\\' font-weight=\\'bold\\'>${s.name.substring(0,3).toUpperCase()}</text></svg>'">
         </div>`;

    item.innerHTML = `
      <div class="logo-inner"${s.bg ? ` style="background:${s.bg};"` : ''}>
        ${iconHTML}
        <div class="logo-name">${s.name}</div>
      </div>`;

    grid.appendChild(item);
  });

  /* 3-D tilt on hover */
  grid.querySelectorAll('.logo-item').forEach(item => {
    item.addEventListener('mousemove', e => {
      const r = item.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width  - 0.5;
      const y = (e.clientY - r.top)  / r.height - 0.5;
      item.style.transform = `perspective(700px) rotateY(${x*30}deg) rotateX(${-y*30}deg) translateY(-16px) scale(1.1)`;
      item.style.zIndex = '10';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = '';
      item.style.zIndex    = '';
    });
  });
}

/* ═══════════════════════════════════════════════════
   2. CANVAS ANIMATED BACKGROUND
   Layers:
     A) Floating gradient orbs (slow drift)
     B) Particle constellation (nodes + connecting lines)
     C) Slow-moving geometric hex grid scanlines
═══════════════════════════════════════════════════ */
function initBgCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, raf;
  let isDark = document.documentElement.getAttribute('data-theme') !== 'light';

  /* ── Palette (updates with theme) ── */
  function getPalette() {
    return isDark
      ? { orb1:'94,173,247', orb2:'192,132,252', orb3:'52,211,153', orb4:'244,114,182',
          nodeClr:'94,173,247', lineClr:'94,173,247', hexClr:'94,173,247', bgAlpha:.55 }
      : { orb1:'37,99,235',  orb2:'124,58,237',  orb3:'5,150,105',  orb4:'225,29,72',
          nodeClr:'37,99,235', lineClr:'37,99,235', hexClr:'37,99,235', bgAlpha:.40 };
  }

  /* ── Resize ── */
  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => { resize(); initParticles(); });

  /* ── Orbs ── */
  const ORBS = [
    { xr:.10, yr:.10, wr:600, hr:450, dx:.18, dy:.12 },
    { xr:.75, yr:.35, wr:520, hr:420, dx:-.14, dy:.16 },
    { xr:.40, yr:.70, wr:480, hr:380, dx:.20, dy:-.10 },
    { xr:.85, yr:.80, wr:400, hr:360, dx:-.16, dy:-.14 },
  ];
  ORBS.forEach(o => { o.x = W*o.xr; o.y = H*o.yr; });

  function drawOrbs(p) {
    const orbs = [p.orb1, p.orb2, p.orb3, p.orb4];
    ORBS.forEach((o, i) => {
      o.x += o.dx; o.y += o.dy;
      if (o.x < -o.wr/2 || o.x > W+o.wr/2) o.dx *= -1;
      if (o.y < -o.hr/2 || o.y > H+o.hr/2) o.dy *= -1;

      const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.wr/2);
      g.addColorStop(0,   `rgba(${orbs[i]},${ isDark ? 0.14 : 0.10})`);
      g.addColorStop(0.5, `rgba(${orbs[i]},${ isDark ? 0.06 : 0.04})`);
      g.addColorStop(1,   `rgba(${orbs[i]},0)`);
      ctx.save();
      ctx.filter = 'blur(60px)';
      ctx.beginPath();
      ctx.ellipse(o.x, o.y, o.wr/2, o.hr/2, 0, 0, Math.PI*2);
      ctx.fillStyle = g;
      ctx.fill();
      ctx.restore();
    });
  }

  /* ── Particles ── */
  const MAX_NODES = 80;
  const CONNECT_DIST = 160;
  let nodes = [];

  function initParticles() {
    nodes = Array.from({length: MAX_NODES}, () => ({
      x:  Math.random()*W,
      y:  Math.random()*H,
      vx: (Math.random()-.5)*.6,
      vy: (Math.random()-.5)*.6,
      r:  Math.random()*1.5+1,
    }));
  }
  initParticles();

  function drawParticles(p) {
    nodes.forEach(n => {
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0) n.x = W; if (n.x > W) n.x = 0;
      if (n.y < 0) n.y = H; if (n.y > H) n.y = 0;

      /* node dot */
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(${p.nodeClr},${isDark?.55:.45})`;
      ctx.fill();
    });

    /* connecting lines */
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i+1; j < nodes.length; j++) {
        const dx = nodes[i].x-nodes[j].x;
        const dy = nodes[i].y-nodes[j].y;
        const d  = Math.sqrt(dx*dx+dy*dy);
        if (d < CONNECT_DIST) {
          const alpha = (1-d/CONNECT_DIST) * (isDark ? .18 : .14);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(${p.lineClr},${alpha})`;
          ctx.lineWidth   = .8;
          ctx.stroke();
        }
      }
    }
  }

  /* ── Hex scan lines (slow horizontal sweep) ── */
  let hexOffset = 0;
  const HEX_SIZE = 60;

  function drawHex(p) {
    hexOffset = (hexOffset + .15) % (HEX_SIZE * Math.sqrt(3));
    const cols = Math.ceil(W / (HEX_SIZE * 1.5)) + 2;
    const rows = Math.ceil(H / (HEX_SIZE * Math.sqrt(3))) + 2;

    ctx.strokeStyle = `rgba(${p.hexClr},${isDark?.025:.018})`;
    ctx.lineWidth = .6;

    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const cx = col * HEX_SIZE * 1.5 + (hexOffset % (HEX_SIZE*1.5)) - HEX_SIZE;
        const cy = row * HEX_SIZE*Math.sqrt(3) + (col%2 ? HEX_SIZE*Math.sqrt(3)/2 : 0) - HEX_SIZE;
        hexPath(cx, cy, HEX_SIZE*.9);
      }
    }
  }

  function hexPath(cx, cy, size) {
    ctx.beginPath();
    for (let a = 0; a < 6; a++) {
      const ang = Math.PI/3 * a - Math.PI/6;
      const px  = cx + size * Math.cos(ang);
      const py  = cy + size * Math.sin(ang);
      a === 0 ? ctx.moveTo(px,py) : ctx.lineTo(px,py);
    }
    ctx.closePath();
    ctx.stroke();
  }

  /* ── Main loop ── */
  function loop() {
    ctx.clearRect(0, 0, W, H);
    const p = getPalette();
    drawOrbs(p);
    drawHex(p);
    drawParticles(p);
    raf = requestAnimationFrame(loop);
  }

  loop();
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else loop();
  });

  /* expose theme-update hook */
  window._bgUpdateTheme = (dark) => { isDark = dark; };
}

/* ═══════════════════════════════════════════════════
   3. THEME TOGGLE
═══════════════════════════════════════════════════ */
function initTheme() {
  const html   = document.documentElement;
  const btn    = document.getElementById('themeToggle');
  const lbl    = document.getElementById('themeLabel');
  if (!btn) return;

  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('portfolio-theme', next);
  });

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    lbl.textContent = theme === 'dark' ? 'Light' : 'Dark';
    if (window._bgUpdateTheme) window._bgUpdateTheme(theme === 'dark');
  }
}

/* ═══════════════════════════════════════════════════
   4. TYPEWRITER
═══════════════════════════════════════════════════ */
function initTypewriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const ROLES = ['Full Stack Developer','DevOps Engineer','Python Developer','REST API Builder','CI/CD Automator','Linux Enthusiast'];
  let ri=0, ci=0, del=false;
  function tick() {
    const cur = ROLES[ri];
    if (del) { el.textContent = cur.substring(0, ci--); if (ci<0){del=false;ri=(ri+1)%ROLES.length;setTimeout(tick,500);return;} }
    else      { el.textContent = cur.substring(0, ci++); if (ci>cur.length){del=true;setTimeout(tick,2200);return;} }
    setTimeout(tick, del?52:82);
  }
  setTimeout(tick, 900);
}

/* ═══════════════════════════════════════════════════
   5. COUNTER ANIMATION
═══════════════════════════════════════════════════ */
function initCounters() {
  const els = document.querySelectorAll('.stat-n[data-count]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = parseInt(el.dataset.count,10);
      let cur=0; const inc=end/(1200/(1000/60));
      const t = setInterval(()=>{ cur+=inc; if(cur>=end){el.textContent=end;clearInterval(t);}else{el.textContent=Math.floor(cur);} }, 1000/60);
      obs.unobserve(el);
    });
  },{threshold:.6});
  els.forEach(c=>obs.observe(c));
}

/* ═══════════════════════════════════════════════════
   6. NAVBAR
═══════════════════════════════════════════════════ */
function initNav() {
  const nav      = document.getElementById('navbar');
  const ham      = document.getElementById('hamburger');
  const links    = document.getElementById('navLinks');
  const allLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    let cur='';
    sections.forEach(s=>{ if(pageYOffset>=s.offsetTop-220) cur=s.id; });
    allLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')===`#${cur}`));
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  ham.addEventListener('click',()=>{
    const open = links.classList.toggle('open');
    ham.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  allLinks.forEach(a=>a.addEventListener('click',()=>{
    links.classList.remove('open');
    ham.innerHTML='<i class="fas fa-bars"></i>';
  }));
}

/* ═══════════════════════════════════════════════════
   7. EXPERIENCE TABS
═══════════════════════════════════════════════════ */
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
      btn.classList.add('active');
      const pane = document.getElementById(btn.dataset.target);
      if(pane) pane.classList.add('active');
    });
  });
}

/* ═══════════════════════════════════════════════════
   8. SCROLL REVEAL
═══════════════════════════════════════════════════ */
function initReveal() {
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
  },{threshold:.08, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal,.reveal-l').forEach(el=>obs.observe(el));
}

/* ═══════════════════════════════════════════════════
   9. SMOOTH SCROLL
═══════════════════════════════════════════════════ */
function initSmooth() {
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const sel=a.getAttribute('href');
      if(sel==='#') return;
      const t=document.querySelector(sel);
      if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});}
    });
  });
}

/* ═══════════════════════════════════════════════════
   10. CONTACT FORM  (stub — wire EmailJS)
═══════════════════════════════════════════════════ */
function initForm() {
  (function() {
    emailjs.init("Yos2z9MYp7xRMHCrC");
  })();

  const contactForm = document.getElementById('contactForm');
  const successMessage = document.getElementById('successMessage');
  const errorMessage = document.getElementById('errorMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('.f-submit');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;

      emailjs.sendForm("service_kdejste", "template_tuos09s", this)
        .then(() => {
          successMessage.style.display = 'block';
          errorMessage.style.display = 'none';
          contactForm.reset();
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          btn.disabled = false;
          setTimeout(() => { successMessage.style.display = 'none'; }, 5000);
        })
        .catch(() => {
          errorMessage.style.display = 'block';
          successMessage.style.display = 'none';
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          btn.disabled = false;
        });
    });
  }
}

/* ═══════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  initTheme();       // first — so canvas reads correct theme
  buildSkills();     // before reveal observer so grid items exist
  initBgCanvas();
  initTypewriter();
  initCounters();
  initNav();
  initTabs();
  initReveal();
  initSmooth();
  initForm();
});