// ===== RENDERIZADO DE SIDE CARDS =====

function renderSideCards() {
  const container = document.getElementById('side-cards-container');
  if (container) {
    container.innerHTML = `
      <div class="side-cards">
        <div class="card-contact" id="contactoModal" style="display:none;">
          ${getSideCardCloseButton('contactoModal')}
          <span class="card-icon">📱</span>
          <span class="card-icon-mobile">📱</span>
          <h4 data-lang="contacto">Contacto</h4>
          <ul class="contact-list">
            <li><i class="fas fa-envelope"></i> <a href="mailto:fernandocancino2004@gmail.com"
                class="contact-link">fernandocancino2004@gmail.com</a></li>
            <li><i class="fas fa-phone"></i> <span>+52 92 1133 7977</span></li>
            <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/ffianquettodev/"
                class="contact-link" target="_blank">LinkedIn</a></li>
            <li><i class="fab fa-github"></i> <a href="https://github.com/FFianquetto" class="contact-link"
                target="_blank">GitHub</a></li>
          </ul>
        </div>

        <div class="card-habilidades" id="softskillsModal">
          ${getSideCardCloseButton('softskillsModal')}
          <span class="card-icon">🎯</span>
          <span class="card-icon-mobile">🎯</span>
          <h4 data-lang="soft_skills">Habilidades</h4>
          <ul class="contact-list">
            <li><i class="fas fa-language"></i> <span data-lang="idiomas">Español, Inglés, Alemán</span></li>
            <li><i class="fas fa-code"></i> <span data-lang="organización">Buenas prácticas de desarrollo</span></li>
            <li><i class="fas fa-music"></i> <span data-lang="musica">Conocimientos musicales</span></li>
            <li><i class="fas fa-camera"></i> <span data-lang="fotografia">Conocimientos en fotografía</span></li>
            <li><i class="fas fa-comments"></i> <span data-lang="orador">Buen orador</span></li>
          </ul>
        </div>

        <div class="card-acerca" id="acercaModal">
          ${getSideCardCloseButton('acercaModal')}
          <h4 data-lang="acerca_de">Acerca de mí</h4>
          <div style="text-align: center; margin: 20px 0;">
            ${getExpandableImageHTML({
              src: 'imagenes/prop.jpg',
              alt: 'Foto de perfil',
              variant: 'profile',
              width: 175,
              height: 175,
              imgStyle: 'width: 175px; height: 175px; object-fit: cover;',
              onClickExtra: "this.style.animation='none'",
            })}
          </div>
          <ul class="contact-list">
            <li><i class="fas fa-graduation-cap"></i> <span data-lang="estudiante">Estudiante de 7mo semestre en
                Multimedia y Animación Digital</span></li>
            <li><i class="fas fa-university"></i> <span data-lang="universidad">Universidad Autónoma de Nuevo León</span>
            </li>
            <li><i class="fas fa-map-marker-alt"></i> <span data-lang="ubicacion">Monterrey, Nuevo León</span></li>
            <li><i class="fas fa-heart"></i> <span data-lang="tecnologia">Apasionado por la tecnología y el
                desarrollo</span></li>
            <li><i class="fas fa-chess-knight"></i> <span data-lang="ajedrez">Ajedrecista para Tigres UANL</span></li>
            <li><i class="fab fa-bitcoin"></i> <span data-lang="crypto">Crypto Enthusiastic</span></li>
          </ul>
        </div>

        <div class="card-experiencia" id="experienciaModal">
          ${getSideCardCloseButton('experienciaModal')}
          <span class="card-icon">💼</span>
          <span class="card-icon-mobile">💼</span>
          <h4 data-lang="experiencia">Experiencia</h4>
          <ul class="contact-list">
            <li class="exp-list-item">
              <i class="fab fa-apple"></i>
              <div class="exp-item-body">
                <a href="https://www.instagram.com/ios.uanl/" class="exp-link" target="_blank" rel="noopener noreferrer">
                  <span class="exp-item-title" data-lang="exp_1">iOS Lab UANL</span>
                </a>
                <span class="exp-item-period" data-lang="exp_1_period">Dic 2025 — Actualidad · 6 meses</span>
              </div>
            </li>
            <li class="exp-list-item">
              <i class="fas fa-briefcase"></i>
              <div class="exp-item-body">
                <a href="https://sumapp.com/" class="exp-link" target="_blank" rel="noopener noreferrer">
                  <span class="exp-item-title" data-lang="exp_2">Programador Jr. — Empresa Virtual (SumApp)</span>
                </a>
                <span class="exp-item-period" data-lang="exp_2_period">Ago 2025 – Feb 2026 · 7 meses</span>
              </div>
            </li>
            <li class="exp-list-item">
              <i class="fas fa-mobile-alt"></i>
              <div class="exp-item-body">
                <a href="https://somoscado.com/" class="exp-link" target="_blank" rel="noopener noreferrer">
                  <span class="exp-item-title" data-lang="exp_3">Programador Jr. — Cado (Festival Destacado)</span>
                </a>
                <span class="exp-item-period" data-lang="exp_3_period">Ago 2024 – Feb 2025 · 7 meses (6 prácticas + 1 web)</span>
              </div>
            </li>
            <li class="exp-list-item exp-list-item--expandable" role="button" tabindex="0" onclick="toggleExperienciaHackathons(event)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleExperienciaHackathons(event);}">
              <i class="fas fa-trophy"></i>
              <div class="exp-item-body">
                <div class="exp-item-header">
                  <span class="exp-item-title" data-lang="exp_4">Hackathons</span>
                  <i class="fas fa-chevron-down exp-item-chevron" aria-hidden="true"></i>
                </div>
                <ul class="exp-sublist" id="expHackathonsSublist">
                  <li><span data-lang="exp_hack_1">1er lugar — Hackathon iOS/UANL 2026</span></li>
                  <li><span data-lang="exp_hack_2">ArcaContinental 2024</span></li>
                  <li><span data-lang="exp_hack_3">NASA Space Apps 2025</span></li>
                </ul>
              </div>
            </li>
          </ul>
          <a href="assets/cv/CV_Fernando_Cancino.pdf" class="exp-cv-download" target="_blank" rel="noopener noreferrer">
            <i class="fas fa-file-pdf" aria-hidden="true"></i>
            <span data-lang="exp_cv_download">Descargar CV</span>
          </a>
        </div>
      </div>
      </div>
      <p></p>
    `;
  }
}

window.renderSideCards = renderSideCards;
