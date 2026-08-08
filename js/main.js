// Global variables
let key = 'two-minds-mode';
let radius = 100;

let vtiles = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hico"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    title: 'Volleyball',
    teaser: 'Hover to reveal a fun fact about this sport',
    factLabel: 'Did You Know?',
    factTitle: 'The Origin',
    fact: 'Volleyball was invented in 1895 by William G. Morgan as a less strenuous alternative to basketball. The longest recorded game lasted 75 hours and 30 minutes!',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hico"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Six on the Court',
    teaser: 'Hover to see how a team is built',
    factLabel: 'Team Structure',
    factTitle: 'Constant Rotation',
    fact: 'Six players take each side — three front-row attackers and three back-row defenders. Players rotate clockwise on every side-out, so everyone learns every role.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hico"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
    title: 'The Name',
    teaser: 'Hover to learn where the name came from',
    factLabel: 'Etymology',
    factTitle: 'From Mintonette',
    fact: 'Morgan first called the game "Mintonette." It was renamed soon after for the volleying of the ball back and forth over the net.',
  }
];

let ctiles = [
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hico"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.019a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>',
    title: 'Chess',
    teaser: 'Hover to reveal a fun fact about this game',
    factLabel: 'Did You Know?',
    factTitle: 'Ancient Roots',
    fact: 'Chess originated in India around the 6th century as "chaturanga" before spreading through Persia and Europe into the game we know today.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hico"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/></svg>',
    title: 'Endless Games',
    teaser: 'Hover to grasp the sheer scale',
    factLabel: 'The Numbers',
    factTitle: 'More Than the Stars',
    fact: 'There are more possible chess games than atoms in the observable universe — the Shannon number estimates around 10^120 distinct games.',
  },
  {
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hico"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Marathon Match',
    teaser: 'Hover to see the longest game ever',
    factLabel: 'Record Books',
    factTitle: '269 Moves',
    fact: 'The longest tournament game, Nikolić vs. Arsović in 1989, ran 269 moves over more than 20 hours — and still ended in a draw.',
  }
];

let hero = {
  volleyball: {
    eyebrow: 'Volleyball',
    subtitle: 'Six players. One court. Discover the sport that blends power, speed, and teamwork.',
    cta: 'Explore Volleyball',
    baseImage: 'assets/volleyball_hero.png',
    baseAlt: 'A volleyball player leaping to spike the ball over the net',
    revealImage: 'assets/chess_hero.png',
    revealAlt: 'A dramatic close-up of an ornate chess knight piece',
    ringColor: '#D4A01780'
  },
  chess: {
    eyebrow: 'Chess',
    subtitle: 'Sixty-four squares. Infinite strategy. Step into the game of kings.',
    cta: 'Explore Chess',
    baseImage: 'assets/chess_hero.png',
    baseAlt: 'A dramatic close-up of an ornate chess knight piece',
    revealImage: 'assets/volleyball_hero.png',
    revealAlt: 'A volleyball player leaping to spike the ball over the net',
    ringColor: '#F5C51873'
  }
};


let mode = 'volleyball';

function getModeData() {
  if (mode === 'chess') {
    return {
      tiles: ctiles,
      hero: hero.chess,
      frontGradient: 'linear-gradient(145deg, #fff9c4 0%, #ffd54f 50%, #D4A017 100%)',
      color: '#ffd54f',
      navLabel: 'Chess'
    };
  } else {
    return {
      tiles: vtiles,
      hero: hero.volleyball,
      frontGradient: 'linear-gradient(145deg, #dbeafe 0%, #60a5fa 55%, #1E6FBF 100%)',
      color: '#7FB6FF',
      navLabel: 'Volleyball'
    };
  }
}


// --- Logic ---
function setMode(nextMode) {
  if (nextMode !== 'volleyball' && nextMode !== 'chess') return;
  mode = nextMode;
  localStorage.setItem(key, mode);
  applyMode();
}

function toggleMode() {
  setMode(mode === 'chess' ? 'volleyball' : 'chess');
}

function updateHeroContent() {
  let heroEyebrow = document.querySelector('.heye');
  let sub = document.querySelector('.hsub');
  let text = document.querySelector('.ctat');
  let heroBaseImage = document.querySelector('.hbase');
  let heroRevealImage = document.querySelector('.rimage');
  
  let data = getModeData().hero;
  
  if (heroEyebrow) heroEyebrow.textContent = data.eyebrow;
  if (sub) sub.textContent = data.subtitle;
  if (text) text.textContent = data.cta;
  if (heroBaseImage) {
    heroBaseImage.src = data.baseImage;
    heroBaseImage.alt = data.baseAlt;
  }
  if (heroRevealImage) {
    heroRevealImage.src = data.revealImage;
    heroRevealImage.alt = data.revealAlt;
  }
}

function renderHighlights() {
  let highlightsGrid = document.querySelector('.grid');
  if (!highlightsGrid) return;
  
  let data = getModeData();

  highlightsGrid.innerHTML = data.tiles.map((tile, i) => {
    let delayClass = i === 1 ? ' reveal-delay-1' : (i === 2 ? ' reveal-delay-2' : '');
    
    return `
      <div class="col-md-6 col-lg-4 reveal highlights-tile${delayClass}">
        <div class="tmp" style="height: 100%;">
          <div class="tft htrig" tabindex="0" onclick="this.classList.toggle('isf')">
            <div class="tf">
              <div class="tff hfront" style="background: ${data.frontGradient}">
                <span class="hfglare"></span>
                <div class="hiwrap">${tile.icon}</div>
                <h3 class="hctit">${tile.title}</h3>
                <p class="hcte">${tile.teaser}</p>
                <span class="hchin">Hover to flip</span>
              </div>
              <div class="tff tfb hback">
                <span class="hblab">${tile.factLabel}</span>
                <h3 class="hbtit" style="color: ${data.color}">${tile.factTitle}</h3>
                <p class="hbfact">${tile.fact}</p>
                <span class="hchin hchb">Hover to flip back</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe newly created elements
  let newReveals = highlightsGrid.querySelectorAll('.reveal');
  for (let i = 0; i < newReveals.length; i++) {
    observeReveal(newReveals[i]);
  }
}

function renderHobbyNav() {
  let label = document.querySelector('.dtl');
  let menu = document.querySelector('.dmenu');
  let data = getModeData();

  if (label) label.textContent = data.navLabel;

  if (menu) {
    if (mode === 'chess') {
      menu.innerHTML = '<li><a class="dropdown-item fw-medium" href="./chess_matches.html">Matches</a></li><li><a class="dropdown-item fw-medium" href="./chess_openings.html">Openings</a></li>';
    } else {
      menu.innerHTML = '<li><span class="dropdown-item text-muted">More coming soon...</span></li>';
    }
  }
}

function applyMode() {
  document.documentElement.setAttribute('data-mode', mode);
  updateHeroContent();
  renderHighlights();
  renderHobbyNav();
}

function initSpotlight() {
  let spot = document.querySelector('.spot');
  let layer = document.querySelector('.rlayer');
  let ring = document.querySelector('.ring');
  
  if (!spot) return;

  let tx = 0, ty = 0, cx = 0, cy = 0;
  let active = false;
  let raf = null;
  let e = 0.1; 

  function animateSpotlight() {
    if (!active) return;
    cx += (tx - cx) * e;
    cy += (ty - cy) * e;

    let mask = `radial-gradient(circle ${radius}px at ${cx}px ${cy}px, #000000 0%, #000000 62%, #00000080 80%, #00000000 100%)`;
    layer.style.webkitMaskImage = mask;
    layer.style.maskImage = mask;

    let c = getModeData().hero;
    ring.style.left = (cx - radius) + 'px';
    ring.style.top = (cy - radius) + 'px';
    ring.style.width = (radius * 2) + 'px';
    ring.style.height = (radius * 2) + 'px';
    ring.style.boxShadow = `0 0 0 1.5px ${c.ringColor}, 0 0 24px 4px #00000040`;

    raf = requestAnimationFrame(animateSpotlight);
  }

  spot.addEventListener('mousemove', function (e) {
    let r = spot.getBoundingClientRect();
    tx = e.clientX - r.left;
    ty = e.clientY - r.top;

    if (!active) {
      cx = tx; cy = ty;
      active = true;
      layer.classList.add('is-active');
      animateSpotlight();
    }
  });

  spot.addEventListener('mouseleave', function () {
    active = false;
    cancelAnimationFrame(raf);
    layer.classList.remove('is-active');
  });
}

const toggleHTML = `
  <span class="mti">
    <svg class="mtiv" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    <svg class="mtic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.019a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>
  </span>
  <span class="mtk"></span>
`;

function initModeToggles() {
  let tnav = document.querySelector('.mtn');
  let tfoot = document.querySelector('.mtf');
  
  if (tnav) { tnav.innerHTML = toggleHTML; tnav.addEventListener('click', toggleMode); }
  if (tfoot) { tfoot.innerHTML = toggleHTML; tfoot.addEventListener('click', toggleMode); }

  let btns = document.querySelectorAll('[data-set-mode]');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function(e) {
      setMode(e.currentTarget.getAttribute('data-set-mode'));
    });
  }
}

let obs = null;

function observeReveal(element) {
  if (obs) obs.observe(element);
}

function initRevealAnimations() {
  obs = new IntersectionObserver((entries) => {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('is-visible');
        obs.unobserve(entries[i].target);
      }
    }
  }, { rootMargin: '-80px', threshold: 0 });

  let reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    obs.observe(reveals[i]);
  }
}

function init() {
  let pref = localStorage.getItem(key);
  if (pref === 'volleyball' || pref === 'chess') {
    mode = pref;
  }

  applyMode();
  initSpotlight();
  initModeToggles();
  initRevealAnimations();
}

document.addEventListener('DOMContentLoaded', init);
