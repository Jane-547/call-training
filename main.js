// ─── ACCORDION ───────────────────────────────────────

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const body = item.querySelector('.accordion-body');
    const isOpen = item.classList.contains('open');

    // close all
    document.querySelectorAll('.accordion-item.open').forEach(openItem => {
      openItem.classList.remove('open');
      openItem.querySelector('.accordion-body').style.maxHeight = '0';
    });

    if (!isOpen) {
      item.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
    }
  });
});

// ─── HAMBURGER ───────────────────────────────────────

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.site-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}

// ─── ACTIVE NAV ──────────────────────────────────────

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ─── CHECKLIST (visual toggle) ────────────────────────

document.querySelectorAll('.checklist-item').forEach(item => {
  item.addEventListener('click', () => {
    const box = item.querySelector('.check-box');
    if (box) box.classList.toggle('checked');
  });
});

// ─── SEARCH ──────────────────────────────────────────

const SEARCH_INDEX = [
  { title: 'Главная', url: 'index.html', description: 'Портал оператора. Разделы: Обучение, Регламент, Скрипт, GetCourse.', section: '' },
  { title: 'Обучение по звонкам', url: 'training.html', description: 'Учебные модули для операторов.', section: 'Обучение' },
  { title: 'Модуль 1: Структура звонка', url: 'module-1.html', description: 'Структура звонка, этапы и логика разговора.', section: 'Обучение' },
  { title: 'Модуль 2: Как не быть роботом', url: 'module-2.html', description: 'Живая речь, интонация, реакции на ответы клиента.', section: 'Обучение' },
  { title: 'Модуль 3: Фиксация времени', url: 'module-3.html', description: 'Как правильно фиксировать дату и время записи.', section: 'Обучение' },
  { title: 'Негативщики и как с ними работать', url: 'negatives.html', description: 'Работа с недовольными клиентами, конфликтные ситуации, эмоциональный клиент.', section: 'Обучение' },
  { title: 'Регламент работы', url: 'regulation.html', description: 'Все регламенты оператора в одном месте.', section: 'Регламент' },
  { title: 'Должностные обязанности оператора', url: 'regulation-duties.html', description: 'Что входит в обязанности оператора.', section: 'Регламент' },
  { title: 'Дежурство', url: 'regulation-duty.html', description: 'Регламент дежурства оператора.', section: 'Регламент' },
  { title: 'Работа со слотами', url: 'regulation-slots.html', description: 'Как найти и забронировать слот для записи на пробный урок.', section: 'Регламент' },
  { title: 'Регламент НДЗ (недозвон)', url: 'regulation-ndz.html', description: 'Что делать при недозвоне: 3 касания, шаблоны сообщений.', section: 'Регламент' },
  { title: 'Нецелевые лиды', url: 'regulation-nontarget.html', description: 'Как определить и оформить нецелевой лид, заполнение Google-формы.', section: 'Регламент' },
  { title: 'Шаблоны сообщений', url: 'regulation-templates.html', description: 'Готовые тексты для НДЗ, переносов, отмен и подключения к уроку.', section: 'Регламент' },
  { title: 'Технические проблемы', url: 'regulation-tech.html', description: 'Что делать при технических проблемах на уроке.', section: 'Регламент' },
  { title: 'Сброс после приветствия', url: 'regulation-dropout.html', description: 'Алгоритм действий при сбросе звонка сразу после ответа.', section: 'Регламент' },
  { title: 'Мотивация', url: 'regulation-motivation.html', description: 'Работа с мотивацией ученика и родителя.', section: 'Регламент' },
  { title: 'Ежедневный чек-лист оператора', url: 'regulation-checklist.html', description: 'Что нужно сделать каждый рабочий день.', section: 'Регламент' },
  { title: 'Регламент подтверждения встреч', url: 'regulation-confirm.html', description: 'Как и когда подтверждать запись на урок.', section: 'Регламент' },
  { title: 'Скрипт: 10 шагов звонка', url: 'script.html', description: 'Полный скрипт разговора с родителем от приветствия до закрепления записи.', section: 'Скрипт' },
  { title: 'Ключевые фразы', url: 'script-phrases.html', description: 'Фразы, которые обязательно должны прозвучать в каждом звонке.', section: 'Скрипт' },
  { title: 'Мини-чек-лист: как не быть роботом', url: 'script-checklist.html', description: 'Самопроверка после звонка — живая речь вместо чтения по бумажке.', section: 'Скрипт' },
  { title: 'Шпаргалка: 10 шагов звонка', url: 'script-cheatsheet.html', description: 'Краткий конспект всего скрипта для работы во время звонка.', section: 'Скрипт' },
  { title: 'Работа со сделками в GetCourse', url: 'getcourse.html', description: 'Основные действия в GetCourse: НДЗ, диалог, переписка, перенос.', section: 'GetCourse' },
  { title: 'Процесс первой линии', url: 'getcourse-firstline.html', description: 'Полный процесс работы с воронкой в GetCourse от автопроцесса до записи.', section: 'GetCourse' },
  { title: 'Как закрывать сделки', url: 'getcourse-close.html', description: 'Порядок закрытия заказа: нецелевой, отказ, завершение по регламенту.', section: 'GetCourse' },
  { title: 'Как оставлять примечания', url: 'getcourse-notes.html', description: 'Добавление примечаний в профиле клиента в GetCourse.', section: 'GetCourse' },
  { title: 'Как поменять почту пользователю', url: 'getcourse-email.html', description: 'Смена email в профиле ученика, конфликт адресов.', section: 'GetCourse' }
];

(function initSearch() {
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner) return;

  const btn = document.createElement('button');
  btn.className = 'search-btn';
  btn.setAttribute('aria-label', 'Поиск');
  btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
  const hamb = headerInner.querySelector('.hamburger');
  headerInner.insertBefore(btn, hamb);

  const overlay = document.createElement('div');
  overlay.className = 'search-overlay';
  overlay.innerHTML = `
    <div class="search-box">
      <input class="search-input" type="text" placeholder="Поиск по сайту…" autocomplete="off" spellcheck="false">
    </div>
    <div class="search-results"></div>
    <div class="search-hint">Esc — закрыть · Ctrl+K — открыть</div>
  `;
  document.body.appendChild(overlay);

  const input = overlay.querySelector('.search-input');
  const resultsEl = overlay.querySelector('.search-results');

  function openSearch() {
    overlay.classList.add('active');
    input.value = '';
    resultsEl.innerHTML = '';
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    overlay.classList.remove('active');
  }

  function renderResults(q) {
    if (!q.trim()) { resultsEl.innerHTML = ''; return; }
    const lq = q.toLowerCase();
    const hits = SEARCH_INDEX.filter(p =>
      p.title.toLowerCase().includes(lq) ||
      p.description.toLowerCase().includes(lq) ||
      p.section.toLowerCase().includes(lq)
    );
    if (!hits.length) {
      resultsEl.innerHTML = '<div class="search-empty">Ничего не найдено</div>';
      return;
    }
    resultsEl.innerHTML = hits.map(p => `
      <a href="${p.url}" class="search-result-item">
        ${p.section ? `<div class="search-result-section">${p.section}</div>` : ''}
        <div class="search-result-title">${p.title}</div>
        <div class="search-result-desc">${p.description}</div>
      </a>
    `).join('');
  }

  btn.addEventListener('click', openSearch);
  input.addEventListener('input', () => renderResults(input.value));
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });
})();
