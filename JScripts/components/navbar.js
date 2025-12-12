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
}

// Exportar función
window.initNavbar = initNavbar;
