// ===== GESTIÓN DE NAVBAR =====

// Cerrar el menú hamburguesa al hacer clic en cualquier enlace o elemento
function initNavbar() {
  // Cerrar menú al hacer clic en enlaces
  document.querySelectorAll('.nav-link, .dark-mode-toggle, .search-bar').forEach(element => {
    element.addEventListener('click', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });

  // Para el selector de idioma, cerrar solo cuando se selecciona una opción
  const langSelect = document.querySelector('.lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  }

  // Comportamiento especial para el enlace de "Proyectos"
  const proyectosLink = document.querySelector('.nav-link[data-lang="proyectos"]');
  if (proyectosLink) {
    proyectosLink.addEventListener('click', function (event) {
      const targetHash = '#paginas-web';
      const path = window.location.pathname.replace(/\\/g, '/');
      const isOnHome =
        !path.includes('/pages/') &&
        (path.endsWith('/') ||
          path.endsWith('/index.html') ||
          !/\.html$/i.test(path.split('/').pop() || ''));

      if (!isOnHome) {
        event.preventDefault();
        const home = path.includes('/pages/') ? '../index.html' : 'index.html';
        window.location.href = `${home}${targetHash}`;
      } else {
        // En la página de inicio, scroll suave a la sección
        const section = document.querySelector(targetHash);
        if (section) {
          event.preventDefault();
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.replaceState(null, '', targetHash);
        }
      }
    });
  }
}

// Exportar función
window.initNavbar = initNavbar;
