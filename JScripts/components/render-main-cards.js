// ===== RENDERIZADO DE MAIN CARDS Y SIDE CARDS =====

function renderMainCards() {
  const container = document.getElementById('main-cards-container');
  if (container) {
    container.innerHTML = `
      <div class="main-container">
        <!-- Cards principales -->
        <div class="main-cards">
          <div class="card card-purple" id="paginas-web">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">🌐</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="web_title">Páginas Web</h3>
                <p data-lang="web_desc">Descubre algunas páginas web que he creado.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('zomboyCard')" data-lang="zomboy_list">ZomboyShop-ReDesign</li>
                  <li onclick="toggleProjectCard('artvlogCard')" data-lang="artvlog_list">ArtVlog</li>
                  <li onclick="toggleProjectCard('ec2Card')" data-lang="ec2_list">Contenedor en EC2 - AWS</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  <img src="../imagenesP/ZomboyWeb.png" alt="ZomboyShop Web Design" loading="lazy" width="300" height="200" srcset="../imagenesP/ZomboyWeb.png 600w, ../imagenesP/ZomboyWeb.png 300w" sizes="(max-width: 600px) 100vw, 300px"
                    onclick="openImageModal(this.src, this.alt)">
                </div>
              </div>
            </div>
          </div>

          <div class="card card-blue">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">🗄️</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="db_title">Bases de datos</h3>
                <p data-lang="db_desc">Revisa algunas bases de datos que he trabajado.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('hotelCard')" data-lang="hotel_list">Gestión de Hoteles con SQL</li>
                  <li onclick="toggleProjectCard('nominasCard')" data-lang="nominas_list">Manejo de Nóminas con BigData - CassandraDb</li>
                  <li onclick="toggleProjectCard('cadoCard')" data-lang="cado_list">CADO Mobile App Backend - MongoDB</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  <img src="../imagenesP/HotelBd.png" alt="Sistema de Gestión Hotelera" loading="lazy" width="300" height="200" srcset="../imagenesP/HotelBd.png 600w, ../imagenesP/HotelBd.png 300w" sizes="(max-width: 600px) 100vw, 300px"
                    onclick="openImageModal(this.src, this.alt)">
                </div>
              </div>
            </div>
          </div>

          <div class="card card-pink">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">🎮</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="games_title">Videojuegos</h3>
                <p data-lang="games_desc">Sumérgete en los videojuegos que he desarrollado.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('bolosCard')" data-lang="bolos_list">Bolos en Unity con Háptico incluido</li>
                  <li onclick="toggleProjectCard('escapeCard')" data-lang="escape_list">Escape Salvaje en Unity</li>
                  <li onclick="toggleProjectCard('candyCard')" data-lang="candy_list">Candy Collector con OGL Engine y C++</li>
                  <li onclick="toggleProjectCard('snakeCard')" data-lang="snake_list">Snake Slaughter con OGL Engine y Lenguaje Ensamblador</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  <img src="../imagenesP/EscapeGame.jpg" alt="Escape Salvaje" loading="lazy" width="300" height="200" srcset="../imagenesP/EscapeGame.jpg 600w, ../imagenesP/EscapeGame.jpg 300w" sizes="(max-width: 600px) 100vw, 300px" onclick="openImageModal(this.src, this.alt)">
                </div>
              </div>
            </div>
          </div>

          <div class="card card-green" id="certificaciones">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">🏆</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="cert_title">Certificados</h3>
                <p data-lang="cert_desc">Observa algunos certificados que he obtenido.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('sydneyCard')" data-lang="sydney_list">Innovation Through Design</li>
                  <li onclick="toggleProjectCard('googleCard')" data-lang="google_list">GoogleCloud Fundamentals</li>
                  <li onclick="toggleProjectCard('georgiaCard')" data-lang="georgia_list">Introduction to User Experience Design</li>
                  <li onclick="toggleProjectCard('tecCard')" data-lang="tec_list">Desarrollo rápido de productos innovadores para mercados emergentes</li>
                  <li onclick="toggleProjectCard('unamCard')" data-lang="unam_list">Introducción a Data Science</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  <img src="../imagenesP/Certificate.png" alt="Certificados" loading="lazy" width="300" height="200" srcset="../imagenesP/Certificate.png 600w, ../imagenesP/Certificate.png 300w" sizes="(max-width: 600px) 100vw, 300px" onclick="openImageModal(this.src, this.alt)">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cards laterales -->
        <div class="side-cards">
          <div class="card-contact" id="contactoModal" style="display:none;">
            <button class="card-close mobile-only" onclick="closeSideCard('contactoModal')">×</button>
            <span class="card-icon">📱</span>
            <span class="card-icon-mobile">📱</span>
            <h4 data-lang="contacto">Contacto</h4>
            <ul class="contact-list">
              <li><i class="fas fa-envelope"></i> <a href="mailto:fernandocancino2004@gmail.com"
                  class="contact-link">fernandocancino2004@gmail.com</a></li>
              <li><i class="fas fa-phone"></i> <span>+52 92 1133 7977</span></li>
              <li><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/fernando-a-cancino-cuenca-19bb9a313/"
                  class="contact-link" target="_blank">LinkedIn</a></li>
              <li><i class="fab fa-github"></i> <a href="https://github.com/FFianquetto" class="contact-link"
                  target="_blank">GitHub</a></li>
            </ul>
          </div>

          <div class="card-habilidades" id="softskillsModal">
            <button class="card-close mobile-only" onclick="closeSideCard('softskillsModal')">×</button>
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
            <button class="card-close mobile-only" onclick="closeSideCard('acercaModal')">×</button>
            <h4 data-lang="acerca_de">Acerca de mí</h4>
            <div style="text-align: center; margin: 20px 0; position: relative;">
              <img src="../imagenes/prop.jpg" alt="Foto de perfil"
                style="width: 175px; height: 175px; object-fit: cover; border-radius: 50%; border: 3px solid #ff4ecd;"
                loading="lazy" width="175" height="175"
                onclick="openImageModal(this.src, this.alt); this.style.animation='none';"
                onmouseover="this.style.transform='scale(1.05)'; this.nextElementSibling.style.opacity='1';"
                onmouseout="this.style.transform='scale(1)'; this.nextElementSibling.style.opacity='0';">
              <div class="tooltip" data-lang="profile_tooltip">
                Click para ampliar
              </div>
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

window.renderMainCards = renderMainCards;
