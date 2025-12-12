// ===== RENDERIZADO DEL CARRUSEL =====

function renderCarousel() {
  const container = document.getElementById('carousel-container');
  if (container) {
    container.innerHTML = `
      <section class="project-carousel-section" id="carousel-section">
        <div class="carousel-container">
          <h2 class="carousel-title" data-lang="carousel_title">🎲 Proyectos Destacados</h2>
          <div class="winner-arrows-indicator">
            <!-- <span class="arrow-indicator">&#8595;</span> -->
          </div>
          <div class="multi-carousel-viewport">
            <div class="multi-carousel-strip" id="multiCarouselStrip">
              <!-- Tarjetas generadas por JS -->
            </div>
            <div class="multi-carousel-center-indicator"></div>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <button class="spin-button spin-small" id="spinMultiCarouselBtn">
              <span class="spin-text" data-lang="spin_button">🎯 ¡Girar!</span>
            </button>
          </div>
          <div class="d-flex justify-content-center mt-2 position-relative" style="z-index:3;">
            <button class="view-project-btn spin-small" id="viewProjectBtn" style="display:none;" data-lang="view_project">👁️ Ver Proyecto</button>
          </div>
        </div>
      </section>
    `;
  }
}

window.renderCarousel = renderCarousel;
