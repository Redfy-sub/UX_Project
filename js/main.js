(function () {
  'use strict';

  var STORAGE_KEY = 'two-minds-mode';
  var SPOTLIGHT_RADIUS = 100;

  var VOLLEYBALL_TILES = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlights-icon"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
      title: 'Volleyball',
      teaser: 'Hover to reveal a fun fact about this sport',
      factLabel: 'Did You Know?',
      factTitle: 'The Origin',
      fact: 'Volleyball was invented in 1895 by William G. Morgan as a less strenuous alternative to basketball. The longest recorded game lasted 75 hours and 30 minutes!',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlights-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
      title: 'Six on the Court',
      teaser: 'Hover to see how a team is built',
      factLabel: 'Team Structure',
      factTitle: 'Constant Rotation',
      fact: 'Six players take each side — three front-row attackers and three back-row defenders. Players rotate clockwise on every side-out, so everyone learns every role.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlights-icon"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>',
      title: 'The Name',
      teaser: 'Hover to learn where the name came from',
      factLabel: 'Etymology',
      factTitle: 'From Mintonette',
      fact: 'Morgan first called the game "Mintonette." It was renamed soon after for the volleying of the ball back and forth over the net.',
    }
  ];

  var HOBBY_NAV_ITEMS = {
    volleyball: [
      { label: 'Volleyball', href: 'index.html#hobbies', active: true },
      { label: 'Quick Highlights', href: 'index.html#highlights' },
      { label: 'Join Us', href: 'join-us.html' },
    ],
    chess: [
      { label: 'Chess', href: 'index.html#hobbies', active: true },
      { label: 'Meet Daniel Cho', href: 'index.html#about' },
      { label: 'Quick Highlights', href: 'index.html#highlights' },
    ],
  };

  var CHESS_TILES = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlights-icon"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.019a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>',
      title: 'Chess',
      teaser: 'Hover to reveal a fun fact about this game',
      factLabel: 'Did You Know?',
      factTitle: 'Ancient Roots',
      fact: 'Chess originated in India around the 6th century as "chaturanga" before spreading through Persia and Europe into the game we know today.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlights-icon"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/></svg>',
      title: 'Endless Games',
      teaser: 'Hover to grasp the sheer scale',
      factLabel: 'The Numbers',
      factTitle: 'More Than the Stars',
      fact: 'There are more possible chess games than atoms in the observable universe — the Shannon number estimates around 10^120 distinct games.',
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="highlights-icon"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
      title: 'Marathon Match',
      teaser: 'Hover to see the longest game ever',
      factLabel: 'Record Books',
      factTitle: '269 Moves',
      fact: 'The longest tournament game, Nikolić vs. Arsović in 1989, ran 269 moves over more than 20 hours — and still ended in a draw.',
    }
  ];

  var HERO_CONTENT = {
    volleyball: {
      eyebrow: 'Volleyball',
      subtitle: 'Six players. One court. Discover the sport that blends power, speed, and teamwork.',
      cta: 'Explore Volleyball',
      baseImage: 'assets/volleyball-hero.png',
      baseAlt: 'A volleyball player leaping to spike the ball over the net',
      revealImage: 'assets/chess-hero.png',
      revealAlt: 'A dramatic close-up of an ornate chess knight piece',
      ringColor: 'rgba(212,160,23,0.5)',
    },
    chess: {
      eyebrow: 'Chess',
      subtitle: 'Sixty-four squares. Infinite strategy. Step into the game of kings.',
      cta: 'Explore Chess',
      baseImage: 'assets/chess-hero.png',
      baseAlt: 'A dramatic close-up of an ornate chess knight piece',
      revealImage: 'assets/volleyball-hero.png',
      revealAlt: 'A volleyball player leaping to spike the ball over the net',
      ringColor: 'rgba(245,197,24,0.45)',
    },
  };

  var mode = 'volleyball';

  var html = document.documentElement;
  var heroSpotlight = document.getElementById('hero-spotlight');
  var heroRevealLayer = document.getElementById('hero-reveal-layer');
  var heroSpotlightRing = document.getElementById('hero-spotlight-ring');
  var heroBaseImage = document.getElementById('hero-base-image');
  var heroRevealImage = document.getElementById('hero-reveal-image');
  var heroEyebrow = document.getElementById('hero-eyebrow');
  var heroSubtitle = document.getElementById('hero-subtitle');
  var heroCtaText = document.getElementById('hero-cta-text');
  var highlightsGrid = document.getElementById('highlights-grid');
  var dropdownMenu = document.getElementById('dropdown-menu');
  var dropdownTriggerLabel = document.getElementById('dropdown-trigger-label');
  var modeToggleNav = document.getElementById('mode-toggle-nav');
  var modeToggleFooter = document.getElementById('mode-toggle-footer');
  var footerCopyright = document.getElementById('footer-copyright');

  function isChess() {
    return mode === 'chess';
  }

  function setMode(next) {
    if (next !== 'volleyball' && next !== 'chess') return;
    mode = next;
    localStorage.setItem(STORAGE_KEY, mode);
    applyMode();
  }

  function toggleMode() {
    setMode(isChess() ? 'volleyball' : 'chess');
  }

  function updateToggleAria() {
    var label = isChess()
      ? 'Switch to Volleyball mode. Currently Chess mode'
      : 'Switch to Chess mode. Currently Volleyball mode';

    [modeToggleNav, modeToggleFooter].forEach(function (btn) {
      if (!btn) return;
      btn.setAttribute('aria-checked', String(isChess()));
      btn.setAttribute('aria-label', label);
    });
  }

  function updateHeroContent() {
    var content = HERO_CONTENT[mode];
    if (heroEyebrow) heroEyebrow.textContent = content.eyebrow;
    if (heroSubtitle) heroSubtitle.textContent = content.subtitle;

    if (heroCtaText) heroCtaText.textContent = content.cta;

    if (heroBaseImage) {
      heroBaseImage.src = content.baseImage;
      heroBaseImage.alt = content.baseAlt;
    }
    if (heroRevealImage) {
      heroRevealImage.src = content.revealImage;
      heroRevealImage.alt = content.revealAlt;
    }
  }

  function renderHighlights() {
    if (!highlightsGrid) return;
    
    var tiles = isChess() ? CHESS_TILES : VOLLEYBALL_TILES;
    var frontGradient = isChess()
      ? 'linear-gradient(145deg, #fff9c4 0%, #ffd54f 50%, #D4A017 100%)'
      : 'linear-gradient(145deg, #dbeafe 0%, #60a5fa 55%, #1E6FBF 100%)';
    var backTitleColor = isChess() ? '#ffd54f' : '#7FB6FF';

    highlightsGrid.innerHTML = '';

    tiles.forEach(function (tile, i) {
      var wrapper = document.createElement('div');
      // Using Bootstrap col class dynamically
      wrapper.className = 'col-md-6 col-lg-4 reveal highlights__tile';
      if (i > 0) wrapper.classList.add('reveal--delay-' + Math.min(i, 2));

      wrapper.innerHTML =
        '<div class="tm-perspective" style="height: 100%;">' +
          '<div class="tm-flip-trigger highlights__trigger" tabindex="0" role="group" aria-label="' + escapeHtml(tile.title) + ' — flip for a fact" onclick="this.classList.toggle(\'is-flipped\')">' +
            '<div class="tm-flip">' +
              '<!-- FRONT -->' +
              '<div class="tm-flip-face highlights__front" style="background: ' + frontGradient + '">' +
                '<span class="highlights__front-glare" aria-hidden="true"></span>' +
                '<div class="highlights__icon-wrap">' + tile.icon + '</div>' +
                '<h3 class="highlights__card-title">' + escapeHtml(tile.title) + '</h3>' +
                '<p class="highlights__card-teaser">' + escapeHtml(tile.teaser) + '</p>' +
                '<span class="highlights__card-hint">Hover to flip</span>' +
              '</div>' +
              '<!-- BACK -->' +
              '<div class="tm-flip-face tm-flip-back highlights__back">' +
                '<span class="highlights__back-label">' + escapeHtml(tile.factLabel) + '</span>' +
                '<h3 class="highlights__back-title" style="color: ' + backTitleColor + '">' + escapeHtml(tile.factTitle) + '</h3>' +
                '<p class="highlights__back-fact">' + escapeHtml(tile.fact) + '</p>' +
                '<span class="highlights__card-hint highlights__card-hint--back">Hover to flip back</span>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';

      highlightsGrid.appendChild(wrapper);
      observeReveal(wrapper);
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderHobbyNav() {
    var items = HOBBY_NAV_ITEMS[mode];
    if (!items) return;

    if (dropdownTriggerLabel) {
      dropdownTriggerLabel.textContent = isChess() ? 'Chess' : 'Volleyball';
    }

    if (dropdownMenu) {
      dropdownMenu.innerHTML = items
        .map(function (item) {
          var activeClass = item.active ? ' active' : '';
          return (
            '<li><a href="' +
            item.href +
            '" role="menuitem" class="dropdown-item' +
            activeClass +
            '">' +
            escapeHtml(item.label) +
            '</a></li>'
          );
        })
        .join('');
    }
  }

  function applyMode() {
    var mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.style.transition = 'opacity 0.3s ease-in-out, filter 0.3s ease-in-out';
      mainContent.style.opacity = '0';
      mainContent.style.filter = 'blur(10px)';
      setTimeout(function () {
        html.setAttribute('data-mode', mode);
        updateToggleAria();
        updateHeroContent();
        renderHighlights();
        renderHobbyNav();
        mainContent.style.opacity = '1';
        mainContent.style.filter = 'blur(0)';
      }, 300);
    } else {
      html.setAttribute('data-mode', mode);
      updateToggleAria();
      updateHeroContent();
      renderHighlights();
      renderHobbyNav();
    }
  }

  function initSpotlight() {
    if (!heroSpotlight) return;

    var targetX = 0;
    var targetY = 0;
    var currentX = 0;
    var currentY = 0;
    var isActive = false;
    var rafId = null;
    var ease = 0.1; // adjust this for more/less lag (0.01 is very slow, 0.2 is fast)

    function animateSpotlight() {
      if (!isActive) return;

      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;

      var mask =
        'radial-gradient(circle ' +
        SPOTLIGHT_RADIUS +
        'px at ' +
        currentX +
        'px ' +
        currentY +
        'px, #000 0%, #000 62%, rgba(0,0,0,0.5) 80%, transparent 100%)';

      heroRevealLayer.style.webkitMaskImage = mask;
      heroRevealLayer.style.maskImage = mask;

      var content = HERO_CONTENT[mode];
      heroSpotlightRing.style.left = currentX - SPOTLIGHT_RADIUS + 'px';
      heroSpotlightRing.style.top = currentY - SPOTLIGHT_RADIUS + 'px';
      heroSpotlightRing.style.width = SPOTLIGHT_RADIUS * 2 + 'px';
      heroSpotlightRing.style.height = SPOTLIGHT_RADIUS * 2 + 'px';
      heroSpotlightRing.style.boxShadow =
        '0 0 0 1.5px ' +
        content.ringColor +
        ', 0 0 24px 4px rgba(0,0,0,0.25)';

      rafId = requestAnimationFrame(animateSpotlight);
    }

    heroSpotlight.addEventListener('mousemove', function (e) {
      var rect = heroSpotlight.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      if (!isActive) {
        // Initial setup on first hover to avoid snapping from 0,0
        currentX = targetX;
        currentY = targetY;
        isActive = true;
        heroRevealLayer.classList.add('is-active');
        animateSpotlight();
      }
    });

    heroSpotlight.addEventListener('mouseleave', function () {
      isActive = false;
      cancelAnimationFrame(rafId);
      heroRevealLayer.classList.remove('is-active');
    });
  }

  function initModeToggles() {
    [modeToggleNav, modeToggleFooter].forEach(function (btn) {
      if (btn) btn.addEventListener('click', toggleMode);
    });

    document.addEventListener('click', function (e) {
      var el = e.target.closest('[data-set-mode]');
      if (el) setMode(el.getAttribute('data-set-mode'));
    });
  }

  var revealObserver = null;

  function observeReveal(el) {
    if (!revealObserver) return;
    revealObserver.observe(el);
  }

  function initRevealAnimations() {
    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '-80px', threshold: 0 }
    );

    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });
  }

  function initCopyright() {
    if (footerCopyright) {
      footerCopyright.textContent =
        '\u00A9 ' +
        new Date().getFullYear() +
        ' Two Minds Two Passions. All rights reserved.';
    }
  }

  function initRippleEffect() {
    document.querySelectorAll('.btn').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var ripple = document.createElement('span');
        ripple.className = 'ripple';
        var diameter = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = diameter + 'px';
        ripple.style.left = (x - diameter / 2) + 'px';
        ripple.style.top = (y - diameter / 2) + 'px';
        btn.appendChild(ripple);
        setTimeout(function() {
          ripple.remove();
        }, 600);
      });
    });
  }

  function init() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'volleyball' || stored === 'chess') {
      mode = stored;
    }

    applyMode();
    initSpotlight();
    initModeToggles();
    initRevealAnimations();
    initCopyright();
    initRippleEffect();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
