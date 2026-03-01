(function () {
  'use strict';

  // ========== STATE ==========
  var state = {
    activeBundle: 'all',
    activeTier: 'all',
    showNoise: false,
    searchQuery: '',
  };

  // ========== DOM REFS ==========
  var els = {
    searchInput: document.getElementById('searchInput'),
    statsStrip: document.getElementById('statsStrip'),
    bundleTabs: document.getElementById('bundleTabs'),
    tierFilters: document.getElementById('tierFilters'),
    legendarySpotlight: document.getElementById('legendarySpotlight'),
    legendaryList: document.getElementById('legendaryList'),
    skillsGrid: document.getElementById('skillsGrid'),
    currentDate: document.getElementById('currentDate'),
    skillCount: document.getElementById('skillCount'),
  };

  // ========== TIER ORDER ==========
  var TIER_ORDER = { legendary: 0, advanced: 1, standard: 2, noise: 3 };

  // ========== INIT ==========
  function init() {
    els.currentDate.textContent = new Date().toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });

    var visibleCount = countVisible();
    els.skillCount.textContent = visibleCount;

    renderStats();
    renderBundleTabs();
    renderTierFilters();
    renderLegendarySpotlight();
    renderSkillsGrid();

    // Events
    els.searchInput.addEventListener('input', debounce(handleSearch, 150));
    els.bundleTabs.addEventListener('click', handleBundleClick);
    els.tierFilters.addEventListener('click', handleTierClick);
    document.addEventListener('keydown', handleKeyboardShortcut);
    document.addEventListener('click', handleGlobalClick);
  }

  // ========== COUNTS ==========
  function countVisible() {
    var count = 0;
    for (var i = 0; i < window.SKILLS.length; i++) {
      if (window.SKILLS[i].tier !== 'noise') count++;
    }
    return count;
  }

  function countByTier(tier) {
    var count = 0;
    for (var i = 0; i < window.SKILLS.length; i++) {
      if (window.SKILLS[i].tier === tier) count++;
    }
    return count;
  }

  function countBundles() {
    var bundles = {};
    for (var i = 0; i < window.SKILLS.length; i++) {
      if (window.SKILLS[i].tier !== 'noise') {
        bundles[window.SKILLS[i].bundle] = true;
      }
    }
    return Object.keys(bundles).length;
  }

  // ========== RENDERING ==========
  function renderStats() {
    var legendary = countByTier('legendary');
    var advanced = countByTier('advanced');
    var standard = countByTier('standard');
    var bundles = countBundles();

    els.statsStrip.innerHTML =
      '<span class="stat-legendary">' + legendary + ' Legendary</span>' +
      ' &middot; ' +
      '<span class="stat-advanced">' + advanced + ' Advanced</span>' +
      ' &middot; ' +
      '<span class="stat-standard">' + standard + ' Standard</span>' +
      ' across ' + bundles + ' bundles';
  }

  function renderBundleTabs() {
    var html = '';
    var keys = Object.keys(window.BUNDLES);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var bundle = window.BUNDLES[key];
      var activeClass = key === state.activeBundle ? ' bundle-tab--active' : '';
      html += '<button class="bundle-tab' + activeClass + '" role="tab" ' +
        'aria-selected="' + (key === state.activeBundle ? 'true' : 'false') + '" ' +
        'data-bundle="' + key + '">' +
        escapeHtml(bundle.label) +
        '</button>';
    }
    els.bundleTabs.innerHTML = html;
  }

  function renderTierFilters() {
    var tiers = [
      { key: 'all', label: 'All Tiers', cls: '' },
      { key: 'legendary', label: 'Legendary', cls: ' tier-chip--legendary' },
      { key: 'advanced', label: 'Advanced', cls: ' tier-chip--advanced' },
      { key: 'standard', label: 'Standard', cls: ' tier-chip--standard' },
    ];

    var html = '';
    for (var i = 0; i < tiers.length; i++) {
      var t = tiers[i];
      var activeClass = t.key === state.activeTier ? ' tier-chip--active' : '';
      html += '<button class="tier-chip' + t.cls + activeClass + '" data-tier="' + t.key + '">' +
        t.label + '</button>';
    }

    // Divider + noise toggle
    html += '<span class="tier-divider"></span>';
    html += '<button class="noise-toggle' + (state.showNoise ? ' noise-toggle--active' : '') + '" data-noise-toggle>' +
      (state.showNoise ? 'Hide Noise' : 'Show Noise') + '</button>';

    els.tierFilters.innerHTML = html;
  }

  function renderLegendarySpotlight() {
    // Only show on All bundle, All tier, no search
    var shouldShow = state.activeBundle === 'all' &&
      state.activeTier === 'all' &&
      !state.searchQuery;

    if (!shouldShow) {
      els.legendarySpotlight.classList.add('legendary-spotlight--hidden');
      return;
    }

    var legendarySkills = [];
    for (var i = 0; i < window.SKILLS.length; i++) {
      if (window.SKILLS[i].tier === 'legendary') {
        legendarySkills.push(window.SKILLS[i]);
      }
    }

    if (legendarySkills.length === 0) {
      els.legendarySpotlight.classList.add('legendary-spotlight--hidden');
      return;
    }

    els.legendarySpotlight.classList.remove('legendary-spotlight--hidden');

    var html = '';
    for (var i = 0; i < legendarySkills.length; i++) {
      html += createSpotlightCard(legendarySkills[i]);
    }
    els.legendaryList.innerHTML = html;
  }

  function createSpotlightCard(skill) {
    var bundleInfo = window.BUNDLES[skill.bundle] || { label: skill.bundle };
    return '<div class="spotlight-card" data-skill-id="' + escapeHtml(skill.id) + '" tabindex="0">' +
      '<div class="spotlight-card__tier">&#9733; LEGENDARY</div>' +
      '<code class="spotlight-card__trigger">' + escapeHtml(skill.trigger) + '</code>' +
      '<h3 class="spotlight-card__name">' + escapeHtml(skill.name) + '</h3>' +
      '<p class="spotlight-card__desc">' + escapeHtml(skill.description) + '</p>' +
      '<div class="spotlight-card__meta">' +
        '<span class="spotlight-card__bundle">' + escapeHtml(bundleInfo.label) + '</span>' +
        (skill.grimoire_ready ? '<span class="spotlight-card__grimoire">&#9733;</span>' : '') +
      '</div>' +
      '</div>';
  }

  function renderSkillsGrid() {
    var filtered = getFilteredSkills();

    if (filtered.length === 0) {
      els.skillsGrid.innerHTML =
        '<div class="empty-state">' +
        '<div class="empty-state__icon">&#x1F50D;</div>' +
        'No skills match your search.' +
        '</div>';
      return;
    }

    // Sort by tier order, then by name
    filtered.sort(function (a, b) {
      var tierDiff = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
      if (tierDiff !== 0) return tierDiff;
      return a.name.localeCompare(b.name);
    });

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      html += createSkillCard(filtered[i]);
    }
    els.skillsGrid.innerHTML = html;
  }

  function createSkillCard(skill) {
    var bundleInfo = window.BUNDLES[skill.bundle] || { label: skill.bundle };
    var tierInfo = window.TIERS[skill.tier] || { label: skill.tier };

    return '<article class="card skill-card" data-skill-id="' + escapeHtml(skill.id) + '" data-tier="' + escapeHtml(skill.tier) + '" tabindex="0">' +
      // Tier badge top right
      '<div class="skill-card__tier-badge skill-card__tier-badge--' + escapeHtml(skill.tier) + '">' +
        escapeHtml(tierInfo.label) +
      '</div>' +
      // Trigger row
      '<div class="skill-card__trigger-row">' +
        '<code class="trigger-phrase trigger-phrase--hero">' + escapeHtml(skill.trigger) + '</code>' +
        '<button class="copy-btn" data-trigger="' + escapeHtml(skill.trigger) + '" title="Copy trigger">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
          ' copy' +
        '</button>' +
      '</div>' +
      // Name
      '<h3 class="skill-card__name">' + escapeHtml(skill.name) + '</h3>' +
      // Description
      '<p class="skill-card__desc">' + escapeHtml(skill.description) + '</p>' +
      // Meta row
      '<div class="skill-card__meta">' +
        '<span class="skill-card__bundle">' + escapeHtml(bundleInfo.label) + '</span>' +
        '<span class="skill-card__source">' + escapeHtml(skill.source) + '</span>' +
        (skill.grimoire_ready ? '<span class="skill-card__grimoire">&#9733;</span>' : '') +
      '</div>' +
      '</article>';
  }

  // ========== FILTERING ==========
  function getFilteredSkills() {
    var skills = window.SKILLS;
    var result = [];
    for (var i = 0; i < skills.length; i++) {
      var s = skills[i];

      // Hide noise unless toggled
      if (s.tier === 'noise' && !state.showNoise) continue;

      // Bundle filter
      if (state.activeBundle !== 'all' && s.bundle !== state.activeBundle) continue;

      // Tier filter
      if (state.activeTier !== 'all' && s.tier !== state.activeTier) continue;

      // Search filter
      if (state.searchQuery && !matchesSearch(s, state.searchQuery)) continue;

      result.push(s);
    }
    return result;
  }

  function matchesSearch(skill, query) {
    var q = query.toLowerCase();
    if (skill.name.toLowerCase().indexOf(q) > -1) return true;
    if (skill.trigger.toLowerCase().indexOf(q) > -1) return true;
    if (skill.description.toLowerCase().indexOf(q) > -1) return true;
    if (skill.bundle.toLowerCase().indexOf(q) > -1) return true;
    if (skill.tier.toLowerCase().indexOf(q) > -1) return true;
    for (var i = 0; i < skill.keywords.length; i++) {
      if (skill.keywords[i].toLowerCase().indexOf(q) > -1) return true;
    }
    return false;
  }

  // ========== EVENT HANDLERS ==========
  function handleSearch(e) {
    state.searchQuery = e.target.value.trim();
    renderLegendarySpotlight();
    renderSkillsGrid();
  }

  function handleBundleClick(e) {
    var tab = e.target.closest('[data-bundle]');
    if (!tab) return;

    state.activeBundle = tab.getAttribute('data-bundle');
    renderBundleTabs();
    renderLegendarySpotlight();
    renderSkillsGrid();
  }

  function handleTierClick(e) {
    // Noise toggle
    var noiseBtn = e.target.closest('[data-noise-toggle]');
    if (noiseBtn) {
      state.showNoise = !state.showNoise;
      renderTierFilters();
      renderSkillsGrid();
      return;
    }

    // Tier chip
    var chip = e.target.closest('[data-tier]');
    if (!chip) return;

    state.activeTier = chip.getAttribute('data-tier');
    renderTierFilters();
    renderLegendarySpotlight();
    renderSkillsGrid();
  }

  function handleGlobalClick(e) {
    // Copy button
    var copyBtn = e.target.closest('.copy-btn');
    if (copyBtn) {
      e.stopPropagation();
      var trigger = copyBtn.getAttribute('data-trigger');
      handleCopyTrigger(trigger, copyBtn);
      return;
    }
  }

  function handleCopyTrigger(text, btn) {
    if (btn.dataset.copying === 'true') return;
    btn.dataset.copying = 'true';
    var original = btn.innerHTML;

    function showCopied() {
      btn.classList.add('copy-btn--copied');
      btn.innerHTML =
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>' +
        ' copied!';
      setTimeout(function () {
        btn.classList.remove('copy-btn--copied');
        btn.innerHTML = original;
        btn.dataset.copying = 'false';
      }, 2000);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showCopied).catch(function () {
        fallbackCopy(text);
        showCopied();
      });
    } else {
      fallbackCopy(text);
      showCopied();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function handleKeyboardShortcut(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      els.searchInput.focus();
      els.searchInput.select();
    }
    if (e.key === 'Escape' && document.activeElement === els.searchInput) {
      els.searchInput.blur();
      els.searchInput.value = '';
      state.searchQuery = '';
      renderLegendarySpotlight();
      renderSkillsGrid();
    }
  }

  // ========== UTILITIES ==========
  function debounce(fn, ms) {
    var timer;
    return function () {
      var args = arguments;
      var context = this;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, ms);
    };
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ========== START ==========
  init();
})();

// ========== SKILL MODAL ==========
(function() {
  var modal = null;

  function createModal() {
    var el = document.createElement('div');
    el.id = 'skillModal';
    el.className = 'skill-modal-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.innerHTML = '<div class="skill-modal" id="skillModalBox"><button class="skill-modal__close" id="skillModalClose" aria-label="Close">&times;</button><div id="skillModalContent"></div></div>';
    document.body.appendChild(el);
    modal = el;

    el.addEventListener('click', function(e) {
      if (e.target === el) closeModal();
    });
    document.getElementById('skillModalClose').addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openModal(skillId) {
    var skill = null;
    for (var i = 0; i < window.SKILLS.length; i++) {
      if (window.SKILLS[i].id === skillId) { skill = window.SKILLS[i]; break; }
    }
    if (!skill) return;

    if (!modal) createModal();

    var tierInfo = window.TIERS[skill.tier] || { label: skill.tier, color: '#888' };
    var bundleInfo = window.BUNDLES[skill.bundle] || { label: skill.bundle };
    var d = skill.detail || null;

    var html = '<div class="skill-modal__header">' +
      '<span class="skill-modal__tier" style="color:' + tierInfo.color + '">' + esc(tierInfo.label.toUpperCase()) + '</span>' +
      '<span class="skill-modal__bundle">' + esc(bundleInfo.label) + '</span>' +
      '</div>' +
      '<h2 class="skill-modal__name">' + esc(skill.name) + '</h2>' +
      '<div class="skill-modal__trigger-row">' +
        '<code class="skill-modal__trigger">' + esc(skill.trigger) + '</code>' +
        '<button class="copy-btn skill-modal__copy" data-trigger="' + esc(skill.trigger) + '"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> copy</button>' +
      '</div>' +
      '<p class="skill-modal__desc">' + esc(skill.description) + '</p>';

    if (d) {
      html += '<hr class="skill-modal__divider">';
      if (d.what) html += '<div class="skill-modal__section"><h4 class="skill-modal__section-title">What it does</h4><p>' + esc(d.what) + '</p></div>';
      if (d.why) html += '<div class="skill-modal__section"><h4 class="skill-modal__section-title">Why it matters</h4><p>' + esc(d.why) + '</p></div>';
      if (d.useCases && d.useCases.length) {
        html += '<div class="skill-modal__section"><h4 class="skill-modal__section-title">Use cases</h4><ul class="skill-modal__list">';
        for (var j = 0; j < d.useCases.length; j++) html += '<li>' + esc(d.useCases[j]) + '</li>';
        html += '</ul></div>';
      }
      if (d.commands && d.commands.length) {
        html += '<div class="skill-modal__section"><h4 class="skill-modal__section-title">Commands</h4><div class="skill-modal__commands">';
        for (var k = 0; k < d.commands.length; k++) html += '<code class="skill-modal__cmd">' + esc(d.commands[k]) + '</code>';
        html += '</div></div>';
      }
    }

    document.getElementById('skillModalContent').innerHTML = html;
    modal.classList.add('skill-modal-overlay--open');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('skill-modal-overlay--open');
    document.body.classList.remove('modal-open');
  }

  function esc(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
  }

  // Hook into existing global click handler
  var _originalGlobalClick = null;
  document.addEventListener('click', function(e) {
    var card = e.target.closest('[data-skill-id]');
    var copyBtn = e.target.closest('.copy-btn');
    if (card && !copyBtn) {
      var skillId = card.getAttribute('data-skill-id');
      if (skillId) openModal(skillId);
    }
  }, true); // capture phase so we catch before other handlers

  window.openSkillModal = openModal;
  window.closeSkillModal = closeModal;
})();
