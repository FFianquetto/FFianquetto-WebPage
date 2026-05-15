// ===== GESTIÓN DE NAVBAR =====

const SCROLL_OFFSET_EXTRA = {
  '#carousel-section': 48,
  '#acercaModal': 56,
};

function getNavScrollOffset(hash) {
  const navbar = document.querySelector('.navbar');
  const base = navbar ? navbar.offsetHeight : 83;
  const extra = SCROLL_OFFSET_EXTRA[hash] || 20;
  return base + extra;
}

function scrollToSection(hash) {
  const section = document.querySelector(hash);
  if (!section) return false;

  const offset = getNavScrollOffset(hash);
  const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  history.replaceState(null, '', hash);
  return true;
}

window.scrollToSection = scrollToSection;
window.getNavScrollOffset = getNavScrollOffset;

// Cerrar el menú hamburguesa al hacer clic en cualquier enlace o elemento
function initNavbar() {
  document.querySelectorAll('.nav-link, .dark-mode-toggle, .search-bar').forEach(element => {
    element.addEventListener('click', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  const langSelect = document.querySelector('.lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  }

  const inicioLink = document.querySelector('.nav-link[data-lang="inicio"]');
  if (inicioLink) {
    inicioLink.addEventListener('click', function (event) {
      event.preventDefault();
      const base = window.location.pathname + window.location.search;
      window.location.href = base;
    });
  }

  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    if (link.getAttribute('data-lang') === 'acerca_de') return;

    link.addEventListener('click', function (event) {
      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      if (scrollToSection(hash)) {
        event.preventDefault();
        link.blur();
      }
    });
  });
}

window.initNavbar = initNavbar;
