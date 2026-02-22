(function () {
  'use strict';

  // ========== STATE ==========
  var STORAGE_KEY = 'skill-dashboard-recently-used';
  var MAX_RECENT = 8;

  var state = {
    activeTab: 'skills',
    activeCategory: 'all',
    searchQuery: '',
    recentlyUsed: loadRecentlyUsed(),
  };

  // ========== DOM REFS ==========
  var els = {
    searchInput: document.getElementById('searchInput'),
    recentlyUsedList: document.getElementById('recentlyUsedList'),
    skillsGrid: document.getElementById('skillsGrid'),
    apisGrid: document.getElementById('apisGrid'),
    cheatBody: document.getElementById('cheatBody'),
    filterBar: document.getElementById('filterBar'),
    tabBar: document.getElementById('tabBar'),
    statsRow: document.getElementById('statsRow'),
    currentDate: document.getElementById('currentDate'),
    roadmapGrid: document.getElementById('roadmapGrid'),
  };

  // ========== INIT ==========
  function init() {
    els.currentDate.textContent = new Date().toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    });

    renderStats();
    renderFilterChips();
    renderRecentlyUsed();
    renderSkillsGrid();
    renderApiGrid();
    renderCheatSheet();
    renderRoadmap();

    // Events
    els.searchInput.addEventListener('input', debounce(handleSearch, 150));
    els.tabBar.addEventListener('click', handleTabClick);
    els.filterBar.addEventListener('click', handleFilterClick);
    document.addEventListener('keydown', handleKeyboardShortcut);
    document.addEventListener('click', handleGlobalClick);
  }

  // ========== LOCALSTORAGE ==========
  function loadRecentlyUsed() {
    try {
      var data = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!Array.isArray(data)) return [];
      // Filter out stale IDs that no longer exist in SKILLS
      return data.filter(function (id) {
        return typeof id === 'string' && findSkill(id) !== null;
      });
    } catch (e) {
      return [];
    }
  }

  function saveRecentlyUsed() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.recentlyUsed));
    } catch (e) { /* quota exceeded, ignore */ }
  }

  function addToRecentlyUsed(skillId) {
    var idx = state.recentlyUsed.indexOf(skillId);
    if (idx > -1) state.recentlyUsed.splice(idx, 1);
    state.recentlyUsed.unshift(skillId);
    if (state.recentlyUsed.length > MAX_RECENT) {
      state.recentlyUsed = state.recentlyUsed.slice(0, MAX_RECENT);
    }
    saveRecentlyUsed();
    renderRecentlyUsed();
  }

  // ========== RENDERING ==========
  function renderStats() {
    var skills = window.SKILLS;
    var active = skills.filter(function (s) { return s.status === 'active'; }).length;
    var categories = Object.keys(window.CATEGORIES).length - 1; // exclude 'all'
    var apis = window.APIS.filter(function (a) { return a.authStatus === 'connected'; }).length;

    els.statsRow.innerHTML =
      createStatCard(skills.length, 'Total Skills') +
      createStatCard(active, 'Active') +
      createStatCard(categories, 'Categories') +
      createStatCard(apis + '/' + window.APIS.length, 'APIs Connected');
  }

  function createStatCard(value, label) {
    return '<div class="stat-card">' +
      '<div class="stat-card__value">' + value + '</div>' +
      '<div class="stat-card__label">' + escapeHtml(label) + '</div>' +
      '</div>';
  }

  function renderRecentlyUsed() {
    if (state.recentlyUsed.length === 0) {
      els.recentlyUsedList.innerHTML =
        '<span class="recently-used__empty">No skills used yet. Click any skill to get started.</span>';
      return;
    }

    var html = '';
    for (var i = 0; i < state.recentlyUsed.length; i++) {
      var skill = findSkill(state.recentlyUsed[i]);
      if (skill) {
        html += createRecentChip(skill);
      }
    }
    els.recentlyUsedList.innerHTML = html;
  }

  function createRecentChip(skill) {
    return '<button class="recent-chip" data-skill-id="' + escapeHtml(skill.id) + '">' +
      '<span>' + escapeHtml(skill.name) + '</span>' +
      '<span class="recent-chip__trigger">' + escapeHtml(skill.trigger) + '</span>' +
      '</button>';
  }

  function renderFilterChips() {
    var html = '';
    var keys = Object.keys(window.CATEGORIES);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var cat = window.CATEGORIES[key];
      var activeClass = key === state.activeCategory ? ' filter-chip--active' : '';
      html += '<button class="filter-chip' + activeClass + '" data-category="' + key + '">' +
        escapeHtml(cat.label) +
        '</button>';
    }
    els.filterBar.innerHTML = html;
  }

  function renderSkillsGrid() {
    var filtered = getFilteredSkills();
    if (filtered.length === 0) {
      els.skillsGrid.innerHTML =
        '<div class="empty-state">' +
        '<div class="empty-state__icon">🔍</div>' +
        'No skills match your search.' +
        '</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < filtered.length; i++) {
      html += createSkillCard(filtered[i]);
    }
    els.skillsGrid.innerHTML = html;
  }

  function createSkillCard(skill) {
    var catInfo = window.CATEGORIES[skill.category] || { label: skill.category };
    return '<article class="card skill-card" data-skill-id="' + escapeHtml(skill.id) + '" tabindex="0">' +
      '<button class="copy-btn" data-trigger="' + escapeHtml(skill.trigger) + '" title="Copy trigger">' +
        '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>' +
        ' copy' +
      '</button>' +
      '<div class="skill-card__header">' +
        '<div>' +
          '<h3 class="skill-card__name">' + escapeHtml(skill.name) + '</h3>' +
          '<span class="skill-card__source">' + escapeHtml(skill.source) + '</span>' +
        '</div>' +
      '</div>' +
      '<p class="skill-card__desc">' + escapeHtml(skill.description) + '</p>' +
      '<div class="skill-card__footer">' +
        '<code class="trigger-phrase">' + escapeHtml(skill.trigger) + '</code>' +
        getStatusBadgeHtml(skill.status) +
      '</div>' +
      '<div class="skill-card__category">' + escapeHtml(catInfo.label) + '</div>' +
      '</article>';
  }

  function renderApiGrid() {
    var apis = getFilteredApis();
    if (apis.length === 0) {
      els.apisGrid.innerHTML =
        '<div class="empty-state">' +
        '<div class="empty-state__icon">🔌</div>' +
        'No APIs match your search.' +
        '</div>';
      return;
    }
    var html = '';
    for (var i = 0; i < apis.length; i++) {
      html += createApiCard(apis[i]);
    }
    els.apisGrid.innerHTML = html;
  }

  function getFilteredApis() {
    var apis = window.APIS;
    if (!state.searchQuery) return apis;
    var q = state.searchQuery.toLowerCase();
    return apis.filter(function (api) {
      return api.name.toLowerCase().indexOf(q) > -1 ||
        api.description.toLowerCase().indexOf(q) > -1;
    });
  }

  function createApiCard(api) {
    return '<div class="card api-card">' +
      '<div class="api-card__header">' +
        '<span class="api-card__icon">' + api.icon + '</span>' +
        '<span class="api-card__name">' + escapeHtml(api.name) + '</span>' +
      '</div>' +
      '<p class="api-card__desc">' + escapeHtml(api.description) + '</p>' +
      '<div class="api-card__footer">' +
        getAuthBadgeHtml(api.authStatus) +
        '<span class="api-card__cost">' + escapeHtml(api.monthlyCost) + '</span>' +
      '</div>' +
      '<a class="api-card__link" href="' + escapeHtml(api.quickLink) + '" target="_blank" rel="noopener">' +
        escapeHtml(api.quickLink.replace('https://', '')) + ' ↗' +
      '</a>' +
      '</div>';
  }

  function renderCheatSheet() {
    var skills = getFilteredSkillsForCheatSheet();
    skills.sort(function (a, b) {
      return a.trigger.localeCompare(b.trigger);
    });

    if (skills.length === 0) {
      els.cheatBody.innerHTML =
        '<tr><td colspan="3" class="empty-state">No matching triggers found.</td></tr>';
      return;
    }

    var html = '';
    for (var i = 0; i < skills.length; i++) {
      html += createCheatRow(skills[i]);
    }
    els.cheatBody.innerHTML = html;
  }

  function createCheatRow(skill) {
    var catInfo = window.CATEGORIES[skill.category] || { label: skill.category };
    return '<tr class="cheat-row" data-skill-id="' + escapeHtml(skill.id) + '">' +
      '<td>' +
        '<span class="cheat-row__trigger-cell">' +
          '<code class="trigger-phrase">' + escapeHtml(skill.trigger) + '</code>' +
          '<button class="copy-btn copy-btn--inline" data-trigger="' + escapeHtml(skill.trigger) + '">copy</button>' +
        '</span>' +
      '</td>' +
      '<td>' + escapeHtml(skill.name) + '</td>' +
      '<td>' + escapeHtml(catInfo.label) + '</td>' +
      '</tr>';
  }

  function renderRoadmap() {
    var items = window.ROADMAP;
    var html = '';
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      html += '<div class="card roadmap-card">' +
        '<h3 class="roadmap-card__title">' + escapeHtml(item.title) + '</h3>' +
        '<p class="roadmap-card__desc">' + escapeHtml(item.description) + '</p>' +
        '<span class="badge badge--roadmap">Planned</span>' +
        (item.hook ? '<p class="roadmap-card__hook">' + escapeHtml(item.hook) + '</p>' : '') +
        '</div>';
    }
    els.roadmapGrid.innerHTML = html;
  }

  // ========== FILTERING ==========
  function getFilteredSkills() {
    var skills = window.SKILLS;
    var result = [];
    for (var i = 0; i < skills.length; i++) {
      var s = skills[i];
      if (state.activeCategory !== 'all' && s.category !== state.activeCategory) continue;
      if (state.searchQuery && !matchesSearch(s, state.searchQuery)) continue;
      result.push(s);
    }
    return result;
  }

  function getFilteredSkillsForCheatSheet() {
    var skills = window.SKILLS;
    if (!state.searchQuery) return skills.slice();
    var result = [];
    for (var i = 0; i < skills.length; i++) {
      if (matchesSearch(skills[i], state.searchQuery)) {
        result.push(skills[i]);
      }
    }
    return result;
  }

  function matchesSearch(skill, query) {
    var q = query.toLowerCase();
    if (skill.name.toLowerCase().indexOf(q) > -1) return true;
    if (skill.trigger.toLowerCase().indexOf(q) > -1) return true;
    if (skill.description.toLowerCase().indexOf(q) > -1) return true;
    if (skill.category.toLowerCase().indexOf(q) > -1) return true;
    for (var i = 0; i < skill.keywords.length; i++) {
      if (skill.keywords[i].toLowerCase().indexOf(q) > -1) return true;
    }
    return false;
  }

  // ========== EVENT HANDLERS ==========
  function handleSearch(e) {
    state.searchQuery = e.target.value.trim();
    renderSkillsGrid();
    renderCheatSheet();
    renderApiGrid();
  }

  function handleTabClick(e) {
    var tab = e.target.closest('[data-tab]');
    if (!tab) return;

    var tabName = tab.getAttribute('data-tab');
    state.activeTab = tabName;

    // Update tab buttons
    var tabs = els.tabBar.querySelectorAll('.tab-item');
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('tab-item--active');
      tabs[i].setAttribute('aria-selected', 'false');
    }
    tab.classList.add('tab-item--active');
    tab.setAttribute('aria-selected', 'true');

    // Update panels
    var panels = document.querySelectorAll('.tab-panel');
    for (var i = 0; i < panels.length; i++) {
      panels[i].classList.remove('tab-panel--active');
    }
    var activePanel = document.getElementById('panel-' + tabName);
    if (activePanel) activePanel.classList.add('tab-panel--active');
  }

  function handleFilterClick(e) {
    var chip = e.target.closest('[data-category]');
    if (!chip) return;

    state.activeCategory = chip.getAttribute('data-category');

    // Update chips
    var chips = els.filterBar.querySelectorAll('.filter-chip');
    for (var i = 0; i < chips.length; i++) {
      chips[i].classList.remove('filter-chip--active');
    }
    chip.classList.add('filter-chip--active');

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

    // Skill card click (recently used tracking)
    var card = e.target.closest('[data-skill-id]');
    if (card) {
      var skillId = card.getAttribute('data-skill-id');
      addToRecentlyUsed(skillId);
    }
  }

  function handleCopyTrigger(text, btn) {
    // Prevent race condition from double-clicks
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
      renderSkillsGrid();
      renderCheatSheet();
      renderApiGrid();
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

  function findSkill(id) {
    for (var i = 0; i < window.SKILLS.length; i++) {
      if (window.SKILLS[i].id === id) return window.SKILLS[i];
    }
    return null;
  }

  function getStatusBadgeHtml(status) {
    if (status === 'active') {
      return '<span class="badge badge--active"><span class="badge__dot"></span>Active</span>';
    }
    if (status === 'installed') {
      return '<span class="badge badge--installed">Installed</span>';
    }
    return '<span class="badge badge--roadmap">Roadmap</span>';
  }

  function getAuthBadgeHtml(authStatus) {
    if (authStatus === 'connected') {
      return '<span class="badge badge--connected"><span class="badge__dot"></span>Connected</span>';
    }
    return '<span class="badge badge--not-connected">Not Connected</span>';
  }

  // ========== START ==========
  init();
})();
