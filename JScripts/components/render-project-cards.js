// ===== RENDERIZADO DE PROJECT CARDS =====

function renderProjectCards() {
  const container = document.getElementById('project-cards-container');
  if (!container) return;

  // HTML de todas las project cards
  container.innerHTML = `
    <!-- Cards de proyecto modales -->
    <!-- Card del Proyecto ZomboyShop -->
    <div class="card-project card-purple" id="zomboyCard">
      <button class="card-close" onclick="closeProjectCard('zomboyCard')">×</button>
      <span class="card-icon">🌐</span>
      <h4 data-lang="zomboy_title">ZomboyShop-ReDesign</h4>
      <img src="imagenesP/ZomboyWeb.png" alt="ZomboyShop Web Design" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/ZomboyWeb.png 600w, imagenesP/ZomboyWeb.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="zomboy_description">
        Rediseño completo de la página web de ZomboyShop, implementando un diseño moderno y responsivo.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="zomboy_feature1">Diseño moderno y minimalista</li>
        <li data-lang="zomboy_feature2">Interfaz responsiva para todos los dispositivos</li>
        <li data-lang="zomboy_feature3">Optimización de rendimiento</li>
        <li data-lang="zomboy_feature4">Accesibilidad en el idioma y tipo de cambio $</li>
      </ul>
    </div>

    <!-- Card del Proyecto ArtVlog -->
    <div class="card-project card-purple" id="artvlogCard">
      <button class="card-close" onclick="closeProjectCard('artvlogCard')">×</button>
      <span class="card-icon">🎨</span>
      <h4 data-lang="artvlog_title">ArtVlog</h4>
      <img src="imagenesP/ArtWeb.png" alt="ArtVlog Platform" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/ArtWeb.png 600w, imagenesP/ArtWeb.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="artvlog_description">
        Plataforma de blog artístico que permite a los usuarios compartir y descubrir contenido creativo.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="artvlog_feature1">Sistema de gestión de contenido artístico</li>
        <li data-lang="artvlog_feature2">Galería de imágenes interactiva</li>
        <li data-lang="artvlog_feature3">Sistema de comentarios y buscador para obras y artistas</li>
        <li data-lang="artvlog_feature4">Backend para registro de usuarios y creación de publicaciones</li>
      </ul>
    </div>

    <!-- Card del Proyecto CADO Web -->
    <div class="card-project card-purple" id="cadoWebCard">
      <button class="card-close" onclick="closeProjectCard('cadoWebCard')">×</button>
      <span class="card-icon">🌐</span>
      <h4 data-lang="cadoWeb_title">CADO Web</h4>
      <img src="imagenesP/CadoWeb.png" alt="CADO Web" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CadoWeb.png 600w, imagenesP/CadoWeb.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="cadoWeb_description">
        Proyecto web frontend desarrollado para CADO.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="cadoWeb_feature1">Diseño moderno y responsivo</li>
        <li data-lang="cadoWeb_feature2">Interfaz de usuario intuitiva</li>
        <li data-lang="cadoWeb_feature3">Optimización de rendimiento</li>
        <li data-lang="cadoWeb_feature4">Experiencia de usuario mejorada</li>
      </ul>
    </div>

    <!-- Card del Proyecto EC2 Container -->
    <div class="card-project card-cyan" id="ec2Card">
      <button class="card-close" onclick="closeProjectCard('ec2Card')">×</button>
      <span class="card-icon">☁️</span>
      <h4 data-lang="ec2_title">EC2 Container - AWS</h4>
      <img src="imagenesP/Amazon.png" alt="EC2 Container" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Amazon.png 600w, imagenesP/Amazon.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="ec2_description">
        Implementación y gestión de contenedores en Amazon EC2 para aplicaciones web.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="ec2_feature1">Configuración de instancias EC2</li>
        <li data-lang="ec2_feature2">Gestión de contenedores Docker</li>
        <li data-lang="ec2_feature3">Automatización de despliegues</li>
        <li data-lang="ec2_feature4">Monitoreo y escalabilidad</li>
      </ul>
    </div>

    <!-- Card del Proyecto Gestión de Hotel SQL -->
    <div class="card-project card-blue" id="hotelCard">
      <button class="card-close" onclick="closeProjectCard('hotelCard')">×</button>
      <span class="card-icon">🏨</span>
      <h4 data-lang="hotel_title">Gestión de Hoteles con SQL</h4>
      <img src="imagenesP/HotelBd.png" alt="Sistema de Gestión Hotelera" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/HotelBd.png 600w, imagenesP/HotelBd.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="hotel_description">
        Sistema de gestión hotelera implementado con SQL para el control eficiente de operaciones.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="hotel_feature1">Gestión de reservaciones y habitaciones</li>
        <li data-lang="hotel_feature2">Control de clientes, personal e inventario</li>
        <li data-lang="hotel_feature3">Reportes en tiempo real de ingresos y huespedes</li>
        <li data-lang="hotel_feature4">Sistema de facturación integrado y validación de usuarios</li>
      </ul>
    </div>

    <!-- Card del Proyecto Nóminas BigData -->
    <div class="card-project card-blue" id="nominasCard">
      <button class="card-close" onclick="closeProjectCard('nominasCard')">×</button>
      <span class="card-icon">💰</span>
      <h4 data-lang="nominas_title">Manejo de Nóminas con BigData - CassandraDb</h4>
      <img src="imagenesP/Cassandra.png" alt="Sistema de Nóminas BigData" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Cassandra.png 600w, imagenesP/Cassandra.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="nominas_description">
        Sistema de gestión de nóminas implementado con CassandraDB para el manejo eficiente de grandes volúmenes de datos.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="nominas_feature1">Procesamiento de grandes volúmenes de datos</li>
        <li data-lang="nominas_feature2">Alta disponibilidad y escalabilidad</li>
        <li data-lang="nominas_feature3">Análisis predictivo de nóminas</li>
        <li data-lang="nominas_feature4">Reportes en tiempo real</li>
      </ul>
    </div>

    <!-- Card del Proyecto CADO Mobile -->
    <div class="card-project card-orange" id="cadoCard">
      <button class="card-close" onclick="closeProjectCard('cadoCard')">×</button>
      <span class="card-icon">📱</span>
      <h4 data-lang="cado_title">CADO Mobile App Backend - MongoDB</h4>
      <img src="imagenesP/Mongo.png" alt="CADO Mobile Backend" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Mongo.png 600w, imagenesP/Mongo.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="cado_description">
        Backend robusto para aplicación móvil CADO implementado con MongoDB para máxima flexibilidad y rendimiento.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="cado_feature1">Arquitectura NoSQL escalable con MongoDB</li>
        <li data-lang="cado_feature2">API RESTful optimizada y metodlogía MCV</li>
        <li data-lang="cado_feature3">Sistema de autenticación seguro</li>
        <li data-lang="cado_feature4">Sincronización en tiempo real</li>
      </ul>
    </div>

    <!-- Card del Proyecto Bolos Unity -->
    <div class="card-project card-pink" id="bolosCard">
      <button class="card-close" onclick="closeProjectCard('bolosCard')">×</button>
      <span class="card-icon">🎳</span>
      <h4 data-lang="bolos_title">Bolos en Unity con Háptico incluido</h4>
      <img src="imagenesP/Pinball.png" alt="Juego de Bolos" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Pinball.png 600w, imagenesP/Pinball.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="bolos_description">
        Simulador de bolos desarrollado en Unity con retroalimentación háptica para una experiencia inmersiva.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="bolos_feature1">Física realista de bolos</li>
        <li data-lang="bolos_feature2">Retroalimentación háptica avanzada</li>
        <li data-lang="bolos_feature3">Uso de Arduino, sensores, botones, leds y Unity</li>
        <li data-lang="bolos_feature4">Sistema de puntuación detallado y lógica de juego realista</li>
      </ul>
    </div>

    <!-- Card del Proyecto Escape Salvaje -->
    <div class="card-project card-pink" id="escapeCard">
      <button class="card-close" onclick="closeProjectCard('escapeCard')">×</button>
      <span class="card-icon">🏃</span>
      <h4 data-lang="escape_title">Escape Salvaje en Unity</h4>
      <img src="imagenesP/EscapeGame.jpg" alt="Escape Salvaje" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/EscapeGame.jpg 600w, imagenesP/EscapeGame.jpg 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="escape_description">
        Juego de aventura y supervivencia desarrollado en Unity con mecánicas de escape y puzzle.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="escape_feature1">Mundo abierto explorable</li>
        <li data-lang="escape_feature2">Sistema de puzzles complejos</li>
        <li data-lang="escape_feature3">IA avanzada para enemigos</li>
        <li data-lang="escape_feature4">Mecánicas de supervivencia</li>
      </ul>
    </div>

    <!-- Card del Proyecto Candy Collector -->
    <div class="card-project card-pink" id="candyCard">
      <button class="card-close" onclick="closeProjectCard('candyCard')">×</button>
      <span class="card-icon">🍬</span>
      <h4 data-lang="candy_title">Candy Collector con OGL Engine y C++</h4>
      <img src="imagenesP/CC.png" alt="Candy Collector" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CC.png 600w, imagenesP/CC.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="candy_description">
        Juego de recolección desarrollado con OpenGL y C++ para demostrar habilidades de programación de bajo nivel.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="candy_feature1">Motor gráfico personalizado con OpenGL</li>
        <li data-lang="candy_feature2">Optimización de rendimiento en C++</li>
        <li data-lang="candy_feature3">Sistema de partículas personalizado</li>
        <li data-lang="candy_feature4">Física de juego optimizada y hardcodeada</li>
      </ul>
    </div>

    <!-- Card del Proyecto Snake Slaughter -->
    <div class="card-project card-pink" id="snakeCard">
      <button class="card-close" onclick="closeProjectCard('snakeCard')">×</button>
      <span class="card-icon">🐍</span>
      <h4 data-lang="snake_title">Snake Slaughter con OGL Engine y Lenguaje Ensamblador</h4>
      <img src="imagenesP/Snake.png" alt="Snake Slaughter" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Snake.png 600w, imagenesP/Snake.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="snake_description">
        Reimaginación del clásico juego Snake implementada con OpenGL y optimizaciones en lenguaje ensamblador.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="snake_feature1">Optimizaciones en ensamblador</li>
        <li data-lang="snake_feature2">Renderizado eficiente con OpenGL</li>
        <li data-lang="snake_feature3">Mecánicas de juego mejoradas</li>
        <li data-lang="snake_feature4">Sistema de puntuación, vidas y colisiones</li>
      </ul>
    </div>

    <!-- Card del Certificado Sydney -->
    <div class="card-project card-green" id="sydneyCard">
      <button class="card-close" onclick="closeProjectCard('sydneyCard')">×</button>
      <span class="card-icon">🎓</span>
      <h4 data-lang="sydney_title">Innovation Through Design - Sydney University</h4>
      <img src="imagenesP/CSydney.png" alt="Certificado Sydney" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CSydney.png 600w, imagenesP/CSydney.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="sydney_description">
        Certificación en innovación y diseño de la Universidad de Sydney, enfocada en metodologías de diseño centrado en
        el usuario.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="sydney_feature1">Metodologías de diseño innovador</li>
        <li data-lang="sydney_feature2">Pensamiento crítico y creativo</li>
        <li data-lang="sydney_feature3">Resolución de problemas complejos</li>
        <li data-lang="sydney_feature4">Desarrollo de prototipos</li>
      </ul>
    </div>

    <!-- Card del Certificado Google -->
    <div class="card-project card-green" id="googleCard">
      <button class="card-close" onclick="closeProjectCard('googleCard')">×</button>
      <span class="card-icon">☁️</span>
      <h4 data-lang="google_title">GoogleCloud Fundamentals - Google</h4>
      <img src="imagenesP/CGoogle.png" alt="Certificado Google" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CGoogle.png 600w, imagenesP/CGoogle.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="google_description">
        Certificación en fundamentos de Google Cloud Platform, cubriendo los conceptos básicos de la nube y sus servicios.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="google_feature1">Fundamentos de computación en la nube</li>
        <li data-lang="google_feature2">Servicios de Google Cloud Platform</li>
        <li data-lang="google_feature3">Seguridad y cumplimiento</li>
        <li data-lang="google_feature4">Arquitectura de soluciones cloud</li>
      </ul>
    </div>

    <!-- Card del Certificado Georgia Tech -->
    <div class="card-project card-green" id="georgiaCard">
      <button class="card-close" onclick="closeProjectCard('georgiaCard')">×</button>
      <span class="card-icon">👥</span>
      <h4 data-lang="georgia_title">Introduction to User Experience Design - Georgia Institute of Technology</h4>
      <img src="imagenesP/Certificate.png" alt="Certificado Georgia Tech" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Certificate.png 600w, imagenesP/Certificate.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="georgia_description">
        Certificación en diseño de experiencia de usuario, enfocada en metodologías y prácticas de UX/UI.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="georgia_feature1">Principios de diseño UX/UI</li>
        <li data-lang="georgia_feature2">Investigación de usuarios</li>
        <li data-lang="georgia_feature3">Prototipado y wireframing</li>
        <li data-lang="georgia_feature4">Evaluación de usabilidad</li>
      </ul>
    </div>

    <!-- Card del Certificado Tec -->
    <div class="card-project card-green" id="tecCard">
      <button class="card-close" onclick="closeProjectCard('tecCard')">×</button>
      <span class="card-icon">💡</span>
      <h4 data-lang="tec_title">Desarrollo rápido de productos innovadores para mercados emergentes - Tec de Mty</h4>
      <img src="imagenesP/CTec.png" alt="Certificado Tec" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CTec.png 600w, imagenesP/CTec.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="tec_description">
        Certificación en desarrollo ágil de productos innovadores, enfocada en metodologías de innovación y
        emprendimiento.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="tec_feature1">Metodologías ágiles de desarrollo</li>
        <li data-lang="tec_feature2">Innovación y emprendimiento</li>
        <li data-lang="tec_feature3">Análisis de mercados emergentes</li>
        <li data-lang="tec_feature4">Gestión de proyectos innovadores</li>
      </ul>
    </div>

    <!-- Card del Certificado UNAM -->
    <div class="card-project card-green" id="unamCard">
      <button class="card-close" onclick="closeProjectCard('unamCard')">×</button>
      <span class="card-icon">📊</span>
      <h4 data-lang="unam_title">Introducción a Data Science: Programación Estadística con R - UNAM</h4>
      <img src="imagenesP/CUnam.png" alt="Certificado UNAM" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CUnam.png 600w, imagenesP/CUnam.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="unam_description">
        Certificación en ciencia de datos y programación estadística con R, enfocada en análisis de datos y visualización.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="unam_feature1">Programación estadística con R</li>
        <li data-lang="unam_feature2">Análisis exploratorio de datos</li>
        <li data-lang="unam_feature3">Visualización de datos</li>
        <li data-lang="unam_feature4">Modelos estadísticos básicos</li>
      </ul>
    </div>

    <!-- Card del Proyecto Cocina en Corto -->
    <div class="card-project card-orange" id="cocinaCard">
      <button class="card-close" onclick="closeProjectCard('cocinaCard')">×</button>
      <span class="card-icon">🍳</span>
      <h4 data-lang="cocina_title">Cocina en Corto</h4>
      <img src="imagenesP/CocinaEnCorto.png" alt="Cocina en Corto" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/CocinaEnCorto.png 600w, imagenesP/CocinaEnCorto.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="cocina_description">
        Aplicación móvil desarrollada para compartir recetas rápidas y fáciles de cocinar.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="cocina_feature1">Catálogo de recetas rápidas</li>
        <li data-lang="cocina_feature2">Búsqueda y filtrado de recetas</li>
        <li data-lang="cocina_feature3">Interfaz intuitiva y moderna</li>
        <li data-lang="cocina_feature4">Compatibilidad con diferentes dispositivos móviles</li>
      </ul>
    </div>

    <!-- Card del Proyecto Fleg -->
    <div class="card-project card-cyan" id="flegCard">
      <button class="card-close" onclick="closeProjectCard('flegCard')">×</button>
      <span class="card-icon">🚩</span>
      <h4 data-lang="fleg_title">Fleg</h4>
      <img src="imagenesP/Fleg.png" alt="Fleg" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Fleg.png 600w, imagenesP/Fleg.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="fleg_description">
        Proyecto web completo con backend desarrollado con funcionalidades innovadoras.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="fleg_feature1">Arquitectura backend robusta</li>
        <li data-lang="fleg_feature2">API RESTful bien estructurada</li>
        <li data-lang="fleg_feature3">Gestión de base de datos optimizada</li>
        <li data-lang="fleg_feature4">Integración frontend-backend eficiente</li>
      </ul>
    </div>

    <!-- Card del Proyecto Inffut -->
    <div class="card-project card-cyan" id="inffutCard">
      <button class="card-close" onclick="closeProjectCard('inffutCard')">×</button>
      <span class="card-icon">⚽</span>
      <h4 data-lang="inffut_title">Inffut</h4>
      <img src="imagenesP/Inffut.png" alt="Inffut" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Inffut.png 600w, imagenesP/Inffut.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="inffut_description">
        Proyecto web completo con backend para información y estadísticas de fútbol.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="inffut_feature1">Backend para información en tiempo real de partidos</li>
        <li data-lang="inffut_feature2">API para estadísticas detalladas de equipos y jugadores</li>
        <li data-lang="inffut_feature3">Sistema de notificaciones de eventos importantes</li>
        <li data-lang="inffut_feature4">Arquitectura escalable para seguimiento de resultados</li>
      </ul>
    </div>

    <!-- Card del Proyecto Steal the vibe -->
    <div class="card-project card-pink" id="stealCard">
      <button class="card-close" onclick="closeProjectCard('stealCard')">×</button>
      <span class="card-icon">🎯</span>
      <h4 data-lang="steal_title">Steal the vibe</h4>
      <img src="imagenesP/Steal.png" alt="Steal the vibe" class="project-img" loading="lazy" width="300" height="200" srcset="imagenesP/Steal.png 600w, imagenesP/Steal.png 300w" sizes="(max-width: 600px) 100vw, 300px"
        onclick="openImageModal(this.src, this.alt)">
      <p class="project-description" data-lang="steal_description">
        Videojuego desarrollado en Unreal Engine con mecánicas innovadoras y diseño atractivo.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="steal_feature1">Desarrollado con Unreal Engine</li>
        <li data-lang="steal_feature2">Gráficos de alta calidad</li>
        <li data-lang="steal_feature3">Mecánicas de juego innovadoras</li>
        <li data-lang="steal_feature4">Rendimiento optimizado</li>
      </ul>
    </div>

    <!-- Overlay para el fondo oscuro -->
    <div class="card-overlay" onclick="closeAllCards()"></div>
  `;
}

// Llamar automáticamente al renderizado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderProjectCards);
} else {
  renderProjectCards();
}

window.renderProjectCards = renderProjectCards;
