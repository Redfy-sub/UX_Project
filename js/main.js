// Jian Yew JavaScript
// Global variables
let key = "two-minds-mode";
let radius = 100;

let vtiles = [
  {
    icon: "<i class=\"bi bi-globe fs-1 mb-3 d-inline-block\"></i>",
    title: "Volleyball",
    teaser: "Hover to reveal a fun fact about this sport",
    factLabel: "Did You Know?",
    factTitle: "The Origin",
    fact: "Volleyball was invented in 1895 by William G. Morgan as a less strenuous alternative to basketball. The longest recorded game lasted 75 hours and 30 minutes!",
  },
  {
    icon: "<i class=\"bi bi-people fs-1 mb-3 d-inline-block\"></i>",
    title: "Six on the Court",
    teaser: "Hover to see how a team is built",
    factLabel: "Team Structure",
    factTitle: "Constant Rotation",
    fact: "Six players take each side — three front-row attackers and three back-row defenders. Players rotate clockwise on every side-out, so everyone learns every role.",
  },
  {
    icon: "<i class=\"bi bi-clock-history fs-1 mb-3 d-inline-block\"></i>",
    title: "The Name",
    teaser: "Hover to learn where the name came from",
    factLabel: "Etymology",
    factTitle: "From Mintonette",
    fact: "Morgan first called the game \"Mintonette.\" It was renamed soon after for the volleying of the ball back and forth over the net.",
  }
];

let ctiles = [
  {
    icon: "<i class=\"bi bi-trophy fs-1 mb-3 d-inline-block\"></i>",
    title: "Chess",
    teaser: "Hover to reveal a fun fact about this game",
    factLabel: "Did You Know?",
    factTitle: "Ancient Roots",
    fact: "Chess originated in India around the 6th century as \"chaturanga\" before spreading through Persia and Europe into the game we know today.",
  },
  {
    icon: "<i class=\"bi bi-infinity fs-1 mb-3 d-inline-block\"></i>",
    title: "Endless Games",
    teaser: "Hover to grasp the sheer scale",
    factLabel: "The Numbers",
    factTitle: "More Than the Stars",
    fact: "There are more possible chess games than atoms in the observable universe — the Shannon number estimates around 10^120 distinct games.",
  },
  {
    icon: "<i class=\"bi bi-clock fs-1 mb-3 d-inline-block\"></i>",
    title: "Marathon Match",
    teaser: "Hover to see the longest game ever",
    factLabel: "Record Books",
    factTitle: "269 Moves",
    fact: "The longest tournament game, Nikolić vs. Arsović in 1989, ran 269 moves over more than 20 hours and still ended in a draw.",
  }
];

let hero = {
  volleyball: {
    eyebrow: "Volleyball",
    subtitle: "Six players. One court. Discover the sport that blends power, speed, and teamwork.",
    cta: "Explore Volleyball",
    baseImage: "assets/piano_hero.jpg",
    baseAlt: "A volleyball player leaping to spike the ball over the net",
    revealImage: "assets/chess_hero.jpg",
    revealAlt: "A dramatic close-up of an ornate chess knight piece",
    ringColor: "#D4A01780"
  },
  chess: {
    eyebrow: "Chess",
    subtitle: "Sixty-four squares. Infinite strategy. Step into the game of kings.",
    cta: "Explore Chess",
    baseImage: "assets/chess_hero.jpg",
    baseAlt: "A dramatic close-up of an ornate chess knight piece",
    revealImage: "assets/piano_hero.jpg",
    revealAlt: "A volleyball player leaping to spike the ball over the net",
    ringColor: "#F5C51873"
  }
};


let mode = "volleyball";

function getModeData() {
  if (mode === "chess") {
    return {
      tiles: ctiles,
      hero: hero.chess,
      frontGradient: "linear-gradient(145deg, #fff9c4 0%, #ffd54f 50%, #D4A017 100%)",
      frontTextColor: "#212529",
      color: "#ffd54f",
      navLabel: "Chess"
    };
  } else {
    return {
      tiles: vtiles,
      hero: hero.volleyball,
      frontGradient: "linear-gradient(145deg, #dbeafe 0%, #60a5fa 55%, #1E6FBF 100%)",
      frontTextColor: "#ffffff",
      color: "#7FB6FF",
      navLabel: "Volleyball"
    };
  }
}


// The logic functions
function setMode(nextMode) {
  if (nextMode !== "volleyball" && nextMode !== "chess") return;
  mode = nextMode;
  localStorage.setItem(key, mode);
  applyMode();
}

function toggleMode() {
  setMode(mode === "chess" ? "volleyball" : "chess");
}

function updateHeroContent() {
  let heroEyebrow = document.querySelector(".heye");
  let sub = document.querySelector(".hsub");
  let text = document.querySelector(".ctat");
  let heroBaseImage = document.querySelector(".hbase");
  let heroRevealImage = document.querySelector(".rimage");

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
  let highlightsGrid = document.querySelector(".grid");
  if (!highlightsGrid) return;

  let data = getModeData();

  highlightsGrid.innerHTML = data.tiles.map((tile, i) => {
    let delayClass = i === 1 ? " reveal-delay-1" : (i === 2 ? " reveal-delay-2" : "");

    return `
      <div class="col-md-6 col-lg-4 reveal highlights-tile${delayClass}">
        <div class="tf" tabindex="0">
          <div class="tff hfront" style="background: ${data.frontGradient}">
            <span class="hfglare"></span>
            <div class="hiwrap">${tile.icon}</div>
            <h3 class="hctit" style="color: ${data.frontTextColor}">${tile.title}</h3>
            <p style="color: ${data.frontTextColor}">${tile.teaser}</p>
            <span class="hchin">Hover to flip</span>
          </div>
          <div class="tff tfb hback">
            <span class="hblab">${tile.factLabel}</span>
            <h3 class="hbtit" style="color: ${data.color}">${tile.factTitle}</h3>
            <p>${tile.fact}</p>
            <span class="hchin">Hover to flip back</span>
          </div>
        </div>
      </div>
    `;
  }).join("");

  let newReveals = highlightsGrid.querySelectorAll(".reveal");
  newReveals.forEach(observeReveal);
}

function renderHobbyNav() {
  let label = document.querySelector(".dtl"), menu = document.querySelector(".dmenu");
  if (label) label.textContent = getModeData().navLabel;
  if (menu) menu.innerHTML = mode === "chess" 
    ? '<li><a class="dropdown-item fw-medium" href="./chess_matches.html">Matches</a></li><li><a class="dropdown-item fw-medium" href="./chess_openings.html">Openings</a></li>' 
    : '<li><span class="dropdown-item text-muted">More coming soon...</span></li>';
}

function applyMode() {
  document.documentElement.setAttribute("data-mode", mode);
  updateHeroContent();
  renderHighlights();
  renderHobbyNav();
}

function initSpotlight() {
  let spot = document.querySelector(".spot");
  let layer = document.querySelector(".rlayer");
  let ring = document.querySelector(".ring");
  if (!spot) return;

  spot.addEventListener("mousemove", e => {
    let r = spot.getBoundingClientRect();
    let x = e.clientX - r.left, y = e.clientY - r.top;
    
    layer.style.webkitMaskImage = layer.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, #000 0%, #000 62%, #00000080 80%, transparent 100%)`;
    ring.style.cssText = `left:${x - radius}px; top:${y - radius}px; width:${radius * 2}px; height:${radius * 2}px; box-shadow: 0 0 0 1.5px ${getModeData().hero.ringColor}, 0 0 24px 4px #00000040`;
    layer.classList.add("is-active");
  });

  spot.addEventListener("mouseleave", () => layer.classList.remove("is-active"));
}

const toggleHTML = `
  <span class="mti" style="font-size: 14px;">
    <i class="bi bi-globe mtiv"></i>
    <i class="bi bi-grid-3x3 mtic"></i>
  </span>
  <span class="mtk"></span>
`;

function initModeToggles() {
  let tnav = document.querySelector(".mtn");

  if (tnav) { tnav.innerHTML = toggleHTML; tnav.addEventListener("click", toggleMode); }

  let btns = document.querySelectorAll("[data-set-mode]");
  btns.forEach(b => b.addEventListener("click", e => setMode(e.currentTarget.getAttribute("data-set-mode"))));
}

let obs = null;

function observeReveal(element) {
  if (obs) obs.observe(element);
}

function initRevealAnimations() {
  obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: "-80px", threshold: 0 });

  let reveals = document.querySelectorAll(".reveal");
  reveals.forEach(r => obs.observe(r));
}

function init() {
  let pref = localStorage.getItem(key);
  if (pref === "volleyball" || pref === "chess") {
    mode = pref;
  }

  applyMode();
  initSpotlight();
  initModeToggles();
  initRevealAnimations();
}

document.addEventListener("DOMContentLoaded", init);
