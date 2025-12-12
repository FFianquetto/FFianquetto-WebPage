// ===== CARGADOR DE COMPONENTES HTML =====
// Sistema que funciona sin servidor (file://)

/**
 * Renderiza el componente Aurora
 */
function renderAurora() {
  const container = document.getElementById('aurora-container');
  if (container) {
    container.innerHTML = `
      <div class="aurora-container">
        <div class="aurora"></div>
        <div class="aurora"></div>
        <div class="aurora"></div>
      </div>
    `;
  }
}

/**
 * Renderiza el componente Navbar
 */
function renderNavbar() {
  const container = document.getElementById('navbar-container');
  if (container) {
    container.innerHTML = `
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="logo">
            <img src="../imagenes/export.png" alt="Logo" onclick="this.classList.toggle('pirouette')" loading="lazy" width="48" height="48"/>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="mobile-icons d-flex d-lg-none">
            <button type="button" class="btn btn-link" onclick="handleMobileIconClick('contactoModal')" style="color: #a259ff;">
              <i class="fas fa-phone"></i>
            </button>
            <button type="button" class="btn btn-link" onclick="handleMobileIconClick('softskillsModal')" style="color: #3772ff;">
              <i class="fas fa-bullseye"></i>
            </button>
            <button type="button" class="btn btn-link" onclick="handleMobileIconClick('acercaModal')" style="color: #ff4ecd;">
              <i class="fas fa-user"></i>
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav-links navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="../pages/inicioFF.html" data-lang="inicio">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#paginas-web" data-lang="proyectos">Proyectos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#certificaciones" data-lang="certificados">Certificaciones</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#carousel-section" data-lang="carousel_nav">🎲 Ruleta</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#acercaModal" data-lang="acerca_de" onclick="handleAcercaClick(event)">Acerca de mí...</a>
              </li>
            </ul>
            <div class="nav-actions d-flex align-items-center">
              <div class="d-flex align-items-center">
                <button class="dark-mode-toggle me-2" onclick="toggleDarkMode()">☀️</button>
                <select class="lang-select">
                  <option>ES</option>
                  <option>EN</option>
                  <option>FR</option>
                  <option>DE</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <hr style="border: none; border-top: 1.5px solid #222; margin: 0" />
    `;
  }
}

/**
 * Renderiza el componente Hero
 */
function renderHero() {
  const container = document.getElementById('hero-container');
  if (container) {
    container.innerHTML = `
      <section class="hero">
        <h1 lang="es" data-lang="bienvenido">¡Bienvenido a FFianquetto Projects!</h1>
        <p class="hero-subtitle" data-lang="subtitulo">
          Aquí podrás explorar distintos proyectos de mi autoría y algunos en
          colaboración con otros artistas y desarrolladores.
        </p>
      </section>
    `;
  }
}

/**
 * Renderiza el componente Footer
 */
function renderFooter() {
  const container = document.getElementById('footer-container');
  if (container) {
    container.innerHTML = `
      <footer>
        <p class="copyright" data-lang="copyright">All information copyright © Fernando A. Cancino</p> 
      </footer>
    `;
  }
}

/**
 * Renderiza el componente Image Modal
 */
function renderImageModal() {
  const container = document.getElementById('image-modal-container');
  if (container) {
    container.innerHTML = `
      <div id="imageModal" class="image-modal">
        <div class="image-modal-content">
          <span class="image-modal-close" onclick="closeImageModal()">&times;</span>
          <span class="image-modal-close-mobile" onclick="closeImageModal()">&times;</span>
          <img id="modalImage" class="image-modal-img" alt="Imagen ampliada">
          <div id="modalCaption" class="image-modal-caption"></div>
        </div>
      </div>
    `;
  }
}

/**
 * Carga todos los componentes básicos
 */
function loadAllComponents() {
  renderAurora();
  renderNavbar();
  renderHero();
  renderFooter();
  renderImageModal();
  
  // Los componentes más complejos se cargan desde sus archivos separados
  // main-cards, side-cards, carousel y project-cards se cargan después
}

// Exportar funciones
window.renderAurora = renderAurora;
window.renderNavbar = renderNavbar;
window.renderHero = renderHero;
window.renderFooter = renderFooter;
window.renderImageModal = renderImageModal;
window.loadAllComponents = loadAllComponents;
