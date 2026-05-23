'use strict';

/* ═══════════════════════════════════════════════════
   1. SKILLS DATA
   Flat array — cards flow left-to-right, wrap naturally
═══════════════════════════════════════════════════ */
const SKILLS = [
  // Programming & Backend
  { name:'Python',      img:'assets/images/icons/python.svg',       accent:'#3776ab' },
  { name:'Django',      img:'assets/images/icons/django.svg',       accent:'#00e5a0', bg:'rgba(0,229,160,.06)' },
  { name:'FastAPI',     img:'assets/images/icons/fastapi.svg',      accent:'#009688' },
  { name:'REST API',    img:'', accent:'#5eadf7',
    svg:`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="12" fill="rgba(94,173,247,.12)"/><text x="50%" y="27" text-anchor="middle" font-size="9" fill="#5eadf7" font-family="monospace" font-weight="bold">{REST}</text><text x="50%" y="41" text-anchor="middle" font-size="9" fill="#5eadf7" font-family="monospace">API</text></svg>` },
  { name:'JSON',        img:'', accent:'#f0db4f',
    svg:`<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" rx="12" fill="rgba(240,219,79,.1)"/><text x="50%" y="36" text-anchor="middle" font-size="15" fill="#f0db4f" font-family="monospace" font-weight="bold">JSON</text></svg>` },
  // Database
  { name:'MySQL',       img:'assets/images/icons/mysql.svg',          accent:'#4479a1' },
  // DevOps & Cloud
  { name:'Docker',      img:'assets/images/icons/docker.svg',        accent:'#2496ed' },
  { name:'Kubernetes',  img:'assets/images/icons/kubernetes.svg',   accent:'#326ce5' },
  { name:'Jenkins',     img:'assets/images/icons/jenkins.svg',      accent:'#d24939' },
  { name:'Terraform',   img:'assets/images/icons/terraform.svg',    accent:'#7b42bc' },
  { name:'Ansible',     img:'assets/images/icons/ansible.svg',      accent:'#ee0000' },
  { name:'Azure DevOps',img:'assets/images/icons/azuredevops.svg',   accent:'#0078d4' },
  { name:'AWS',         img:'assets/images/icons/aws.svg',          accent:'#ff9900' },
  { name:'Azure',       img:'assets/images/icons/azure.svg',        accent:'#0078d4' },
  // Monitoring & Server
  { name:'Prometheus',  img:'assets/images/icons/prometheus.svg',   accent:'#e6522c' },
  { name:'Grafana',     img:'assets/images/icons/grafana.svg',      accent:'#f46800' },
  { name:'Nginx',       img:'assets/images/icons/nginx.svg',          accent:'#009639' },
  { name:'Linux',       img:'assets/images/icons/linux.svg',          accent:'#fcc624' },
  { name:'Ubuntu',      img:'assets/images/icons/ubuntu.svg',        accent:'#e95420' },
  // Tools & Others
  { name:'VS Code',     img:'assets/images/icons/vscode.svg',        accent:'#007acc' },
  { name:'Postman',     img:'assets/images/icons/postman.svg',      accent:'#ff6c37' },
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

/* Background Canvas Animation Removed */

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
      let cur=0; const inc=end/60;
      const t = setInterval(()=>{ cur+=inc; if(cur>=end){el.textContent=end;clearInterval(t);}else{el.textContent=Math.floor(cur);} }, 1000/60);
      obs.unobserve(el);
    });
  },{threshold:.6});
  els.forEach(c=>obs.observe(c));
}

/* ═══════════════════════════════════════════════════
   6. NAVBAR & DRAWER
═══════════════════════════════════════════════════ */
function initNav() {
  const nav   = document.getElementById('navbar');
  const ham   = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  const allLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  const closeMenu = () => {
    links.classList.remove('open');
    if (ham) ham.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.style.overflow = '';
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    const open = links.classList.toggle('open');
    if (ham) ham.innerHTML = open ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    document.body.style.overflow = open ? 'hidden' : '';
  };

  if (ham) ham.addEventListener('click', toggleMenu);

  // Close when clicking any link inside
  links.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });

  // Close when clicking outside
  document.addEventListener('click', e => {
    if (links.classList.contains('open') && !links.contains(e.target) && !ham.contains(e.target)) {
      closeMenu();
    }
  });

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    let cur='';
    sections.forEach(s=>{ if(window.pageYOffset>=s.offsetTop-200) cur=s.id; });
    allLinks.forEach(a=>a.classList.toggle('active', a.getAttribute('href')===`#${cur}`));
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
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
   10. CONTACT FORM
═══════════════════════════════════════════════════ */
function initForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  emailjs.init("Yos2z9MYp7xRMHCrC");

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.f-submit');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    
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

/* ═══════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  buildSkills();
  initTypewriter();
  initCounters();
  initNav();
  initTabs();
  initReveal();
  initSmooth();
  initForm();
});