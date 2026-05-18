// ===== RENDERIZADO DE MAIN CARDS Y SIDE CARDS =====

function renderMainCards() {
  const container = document.getElementById('main-cards-container');
  if (container) {
    container.innerHTML = `
      <div class="main-container" id="paginas-web">
        <!-- Cards principales -->
        <div class="main-cards">
          <div class="card card-purple" id="desarrollo-frontend">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">🌐</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="frontend_title">Desarrollo Frontend</h3>
                <p data-lang="frontend_desc">Descubre algunas páginas web y proyectos frontend que he creado.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('zomboyCard')" data-lang="zomboy_list">ZomboyShop-ReDesign</li>
                  <li onclick="toggleProjectCard('festivalDestacadoCard')" data-lang="festivalDestacado_list">Festival DestaCado</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  ${getExpandableImageHTML({ src: 'imagenesP/ZomboyWeb.png', alt: 'Desarrollo Frontend', width: 300, height: 200, srcset: 'imagenesP/ZomboyWeb.png 600w, imagenesP/ZomboyWeb.png 300w', sizes: '(max-width: 600px) 100vw, 300px' })}
                </div>
              </div>
            </div>
          </div>

          <div class="card card-cyan" id="desarrollo-backend">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">⚙️</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="backend_title">Desarrollo Backend</h3>
                <p data-lang="backend_desc">Explora los proyectos backend con servidores y APIs que he desarrollado.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('appSumappCard')" data-lang="appSumapp_list">AppSumapp</li>
                  <li onclick="toggleProjectCard('flegCard')" data-lang="fleg_list">Fleg</li>
                  <li onclick="toggleProjectCard('inffutCard')" data-lang="inffut_list">Inffut</li>
                  <li onclick="toggleProjectCard('ec2Card')" data-lang="ec2_list">Contenedor en EC2 - AWS</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  ${getExpandableImageHTML({ src: 'imagenesP/Amazon.png', alt: 'Desarrollo Backend', width: 300, height: 200, srcset: 'imagenesP/Amazon.png 600w, imagenesP/Amazon.png 300w', sizes: '(max-width: 600px) 100vw, 300px' })}
                </div>
              </div>
            </div>
          </div>

          <div class="card card-orange" id="desarrollo-movil">
            <div class="card-content">
              <div class="card-icon-section">
                <span class="card-icon">📱</span>
              </div>
              <div class="card-text-section">
                <h3 data-lang="mobile_title">Desarrollo Móvil</h3>
                <p data-lang="mobile_desc">Explora las aplicaciones móviles que he desarrollado.</p>
                <ul class="project-list">
                  <li onclick="toggleProjectCard('cocinaCard')" data-lang="cocina_list">Cocina en Corto</li>
                  <li onclick="toggleProjectCard('happySkinAICard')" data-lang="happySkinAI_list">HappySkinAI</li>
                  <li onclick="toggleProjectCard('bimboSISCard')" data-lang="bimboSIS_list">BimboSIS</li>
                  <li onclick="toggleProjectCard('cadoCard')" data-lang="cado_list">CADO Mobile App Backend - MongoDB</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  ${getExpandableImageHTML({ src: 'imagenesP/CocinaEnCorto.png', alt: 'Desarrollo Móvil', width: 300, height: 200, srcset: 'imagenesP/CocinaEnCorto.png 600w, imagenesP/CocinaEnCorto.png 300w', sizes: '(max-width: 600px) 100vw, 300px' })}
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
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  ${getExpandableImageHTML({ src: 'imagenesP/HotelBd.png', alt: 'Sistema de Gestión Hotelera', width: 300, height: 200, srcset: 'imagenesP/HotelBd.png 600w, imagenesP/HotelBd.png 300w', sizes: '(max-width: 600px) 100vw, 300px' })}
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
                  <li onclick="toggleProjectCard('stealCard')" data-lang="steal_list">Steal the vibe</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  ${getExpandableImageHTML({ src: 'imagenesP/EscapeGame.jpg', alt: 'Escape Salvaje', width: 300, height: 200, srcset: 'imagenesP/EscapeGame.jpg 600w, imagenesP/EscapeGame.jpg 300w', sizes: '(max-width: 600px) 100vw, 300px' })}
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
                  <li onclick="toggleProjectCard('ioslabCard')" data-lang="ioslab_list">Reconocimiento iOSLab</li>
                </ul>
              </div>
              <div class="card-image-section">
                <div class="card-image">
                  ${getExpandableImageHTML({ src: 'imagenesP/Certificate.png', alt: 'Certificados', width: 300, height: 200, srcset: 'imagenesP/Certificate.png 600w, imagenesP/Certificate.png 300w', sizes: '(max-width: 600px) 100vw, 300px' })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cards laterales -->
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

window.renderMainCards = renderMainCards;
