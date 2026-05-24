// ===== GESTIÓN DE NAVBAR =====

const SCROLL_OFFSET_EXTRA = {
  '#carousel-section': 48,
  '#acercaModal': 56,
  '#experienciaModal': 56,
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

function setNavMenuOpen(isOpen) {
  document.body.classList.toggle('nav-menu-open', isOpen);
  document.documentElement.classList.toggle('nav-menu-open', isOpen);
}

function closeNavbarMenu() {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (!navbarCollapse || !navbarCollapse.classList.contains('show')) return;

  if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
    const instance = bootstrap.Collapse.getInstance(navbarCollapse)
      || new bootstrap.Collapse(navbarCollapse, { toggle: false });
    instance.hide();
  } else {
    navbarCollapse.classList.remove('show');
    setNavMenuOpen(false);
  }
}

window.closeNavbarMenu = closeNavbarMenu;

// Cerrar el menú hamburguesa al hacer clic en cualquier enlace o elemento
function initNavbar() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse) {
    navbarCollapse.addEventListener('shown.bs.collapse', () => setNavMenuOpen(true));
    navbarCollapse.addEventListener('hidden.bs.collapse', () => setNavMenuOpen(false));
  }

  document.querySelectorAll('.nav-link, .dark-mode-toggle, .search-bar').forEach(element => {
    element.addEventListener('click', closeNavbarMenu);
  });

  const langSelect = document.querySelector('.lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', closeNavbarMenu);
  }

  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    const langKey = link.getAttribute('data-lang');
    if (langKey === 'acerca_de' || langKey === 'experiencia_nav') return;

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
