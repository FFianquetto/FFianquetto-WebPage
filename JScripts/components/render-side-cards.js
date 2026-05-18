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
      </div>
      </div>
      <p></p>
    `;
  }
}

window.renderSideCards = renderSideCards;
