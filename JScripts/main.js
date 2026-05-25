// ===== SCRIPT PRINCIPAL - INICIALIZACIÓN DE COMPONENTES =====

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
  console.log('Inicializando componentes...');

  // Cargar componentes básicos
  if (typeof loadAllComponents === 'function') {
    loadAllComponents();
    console.log('Componentes básicos cargados');
  }

  // Cargar componentes complejos
  if (typeof renderCarousel === 'function') {
    renderCarousel();
    console.log('Carrusel renderizado');
  }

  // Renderizar main cards y side cards juntas (en el mismo contenedor)
  if (typeof renderMainCards === 'function') {
    renderMainCards();
    console.log('Main cards y side cards renderizadas');
    const lang = localStorage.getItem('selectedLanguage') || 'ES';
    if (typeof window.updateExperienciaCvDownload === 'function') {
      window.updateExperienciaCvDownload(lang);
    }
  }

  if (typeof renderProjectCards === 'function') {
    renderProjectCards();
    console.log('Project cards renderizadas');
  }

  // Inicializar modo oscuro/claro
  if (typeof initDarkMode === 'function') {
    initDarkMode();
    console.log('Modo oscuro/claro inicializado');
  }

  // Inicializar navbar
  if (typeof initNavbar === 'function') {
    initNavbar();
    console.log('Navbar inicializado');
  }

  // Inicializar cards
  if (typeof initCards === 'function') {
    initCards();
    console.log('Cards inicializadas');
  }

  // Inicializar modales
  if (typeof initModals === 'function') {
    initModals();
    console.log('Modales inicializados');
  }

  // Inicializar carrusel (después de que se renderice el componente)
  setTimeout(() => {
    if (typeof initCarousel === 'function') {
      initCarousel();
      console.log('Carrusel inicializado');
    }
  }, 100);

  console.log('Todos los componentes inicializados');
});
