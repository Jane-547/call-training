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
