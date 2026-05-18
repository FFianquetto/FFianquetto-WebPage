// ===== RENDERIZADO DE PROJECT CARDS =====

function renderProjectCards() {
  const container = document.getElementById('project-cards-container');
  if (!container) return;
  if (typeof getProjectExpandableImageHTML !== 'function' || typeof getProjectCloseButton !== 'function') {
    console.error('Cargar expandable-image.js y close-button.js antes de render-project-cards.js');
    return;
  }

  // HTML de todas las project cards
  container.innerHTML = `
    <!-- Cards de proyecto modales -->
    <!-- Card del Proyecto ZomboyShop -->
    <div class="card-project card-purple" id="zomboyCard">
      ${getProjectCloseButton('zomboyCard')}
      <span class="card-icon">🌐</span>
      <h4 data-lang="zomboy_title">ZomboyShop-ReDesign</h4>
      ${getProjectExpandableImageHTML('imagenesP/ZomboyWeb.png', 'ZomboyShop Web Design')}
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

    <!-- Card del Proyecto Festival DestaCado -->
    <div class="card-project card-purple" id="festivalDestacadoCard">
      ${getProjectCloseButton('festivalDestacadoCard')}
      <span class="card-icon">🎪</span>
      <h4 data-lang="festivalDestacado_title">Festival DestaCado</h4>
      ${getProjectExpandableImageHTML('imagenesP/CadoWeb.png', 'Festival DestaCado')}
      <p class="project-description" data-lang="festivalDestacado_description">
        Proyecto web frontend para Festival DestaCado. Diseñé el módulo de monitoreo de invitados y el diseño web del festival.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="festivalDestacado_feature1">Diseño web moderno y responsivo del festival</li>
        <li data-lang="festivalDestacado_feature2">Sistema de monitoreo y control de invitados</li>
        <li data-lang="festivalDestacado_feature3">Panel de gestión del evento en tiempo real</li>
        <li data-lang="festivalDestacado_feature4">Experiencia de usuario optimizada para asistentes y organizadores</li>
      </ul>
    </div>

    <!-- Card del Proyecto EC2 Container -->
    <div class="card-project card-cyan" id="ec2Card">
      ${getProjectCloseButton('ec2Card')}
      <span class="card-icon">☁️</span>
      <h4 data-lang="ec2_title">EC2 Container - AWS</h4>
      ${getProjectExpandableImageHTML('imagenesP/Amazon.png', 'EC2 Container')}
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
      ${getProjectCloseButton('hotelCard')}
      <span class="card-icon">🏨</span>
      <h4 data-lang="hotel_title">Gestión de Hoteles con SQL</h4>
      ${getProjectExpandableImageHTML('imagenesP/HotelBd.png', 'Sistema de Gestión Hotelera')}
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
      ${getProjectCloseButton('nominasCard')}
      <span class="card-icon">💰</span>
      <h4 data-lang="nominas_title">Manejo de Nóminas con BigData - CassandraDb</h4>
      ${getProjectExpandableImageHTML('imagenesP/Cassandra.png', 'Sistema de Nóminas BigData')}
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
      ${getProjectCloseButton('cadoCard')}
      <span class="card-icon">📱</span>
      <h4 data-lang="cado_title">CADO Mobile App Backend - MongoDB</h4>
      ${getProjectExpandableImageHTML('imagenesP/Mongo.png', 'CADO Mobile Backend')}
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
      ${getProjectCloseButton('bolosCard')}
      <span class="card-icon">🎳</span>
      <h4 data-lang="bolos_title">Bolos en Unity con Háptico incluido</h4>
      ${getProjectExpandableImageHTML('imagenesP/Pinball.png', 'Juego de Bolos')}
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
      ${getProjectCloseButton('escapeCard')}
      <span class="card-icon">🏃</span>
      <h4 data-lang="escape_title">Escape Salvaje en Unity</h4>
      ${getProjectExpandableImageHTML('imagenesP/EscapeGame.jpg', 'Escape Salvaje')}
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
      ${getProjectCloseButton('candyCard')}
      <span class="card-icon">🍬</span>
      <h4 data-lang="candy_title">Candy Collector con OGL Engine y C++</h4>
      ${getProjectExpandableImageHTML('imagenesP/CC.png', 'Candy Collector')}
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
      ${getProjectCloseButton('snakeCard')}
      <span class="card-icon">🐍</span>
      <h4 data-lang="snake_title">Snake Slaughter con OGL Engine y Lenguaje Ensamblador</h4>
      ${getProjectExpandableImageHTML('imagenesP/Snake.png', 'Snake Slaughter')}
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
      ${getProjectCloseButton('sydneyCard')}
      <span class="card-icon">🎓</span>
      <h4 data-lang="sydney_title">Innovation Through Design - Sydney University</h4>
      ${getProjectExpandableImageHTML('imagenesP/CSydney.png', 'Certificado Sydney')}
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
      ${getProjectCloseButton('googleCard')}
      <span class="card-icon">☁️</span>
      <h4 data-lang="google_title">GoogleCloud Fundamentals - Google</h4>
      ${getProjectExpandableImageHTML('imagenesP/CGoogle.png', 'Certificado Google')}
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
      ${getProjectCloseButton('georgiaCard')}
      <span class="card-icon">👥</span>
      <h4 data-lang="georgia_title">Introduction to User Experience Design - Georgia Institute of Technology</h4>
      ${getProjectExpandableImageHTML('imagenesP/Certificate.png', 'Certificado Georgia Tech')}
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
      ${getProjectCloseButton('tecCard')}
      <span class="card-icon">💡</span>
      <h4 data-lang="tec_title">Desarrollo rápido de productos innovadores para mercados emergentes - Tec de Mty</h4>
      ${getProjectExpandableImageHTML('imagenesP/CTec.png', 'Certificado Tec')}
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

    <!-- Card Reconocimiento iOSLab -->
    <div class="card-project card-green" id="ioslabCard">
      ${getProjectCloseButton('ioslabCard')}
      <span class="card-icon">🏅</span>
      <h4 data-lang="ioslab_title">Reconocimiento iOSLab</h4>
      ${getProjectExpandableImageHTML('imagenesP/ioslab.jpg', 'Reconocimiento iOSLab')}
      <p class="project-description" data-lang="ioslab_description">
        Reconocimiento obtenido en iOSLab por el desempeño y la contribución en el laboratorio de innovación.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="ioslab_feature1">Participación activa en proyectos de iOSLab</li>
        <li data-lang="ioslab_feature2">Desarrollo con enfoque en innovación y tecnología</li>
        <li data-lang="ioslab_feature3">Trabajo colaborativo en el laboratorio</li>
        <li data-lang="ioslab_feature4">Destacado por compromiso y calidad técnica</li>
      </ul>
    </div>

    <!-- Card del Proyecto Cocina en Corto -->
    <div class="card-project card-orange" id="cocinaCard">
      ${getProjectCloseButton('cocinaCard')}
      <span class="card-icon">🍳</span>
      <h4 data-lang="cocina_title">Cocina en Corto</h4>
      ${getProjectExpandableImageHTML('imagenesP/CocinaEnCorto.png', 'Cocina en Corto')}
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

    <!-- Card del Proyecto HappySkinAI -->
    <div class="card-project card-orange" id="happySkinAICard">
      ${getProjectCloseButton('happySkinAICard')}
      <span class="card-icon">✨</span>
      <h4 data-lang="happySkinAI_title">HappySkinAI</h4>
      ${getProjectExpandableImageHTML('imagenesP/happySkinAI.png', 'HappySkinAI')}
      <p class="project-description" data-lang="happySkinAI_description">
        Aplicación móvil desarrollada en Swift con los componentes que integran el proyecto: servicios API, listas dinámicas, interfaz nativa iOS y simulación en Xcode.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="happySkinAI_feature1">Desarrollo en Swift con arquitectura nativa iOS</li>
        <li data-lang="happySkinAI_feature2">Integración de API REST para datos dinámicos</li>
        <li data-lang="happySkinAI_feature3">Listas y componentes de interfaz nativos en iOS</li>
        <li data-lang="happySkinAI_feature4">Experiencia móvil optimizada en simulador y dispositivo</li>
      </ul>
    </div>

    <!-- Card del Proyecto BimboSIS -->
    <div class="card-project card-orange" id="bimboSISCard">
      ${getProjectCloseButton('bimboSISCard')}
      <span class="card-icon">🏭</span>
      <h4 data-lang="bimboSIS_title">BimboSIS</h4>
      ${getProjectExpandableImageHTML('imagenesP/bimboSIS.png', 'BimboSIS')}
      <p class="project-description" data-lang="bimboSIS_description">
        Aplicación desarrollada en Swift para Grupo Bimbo, enfocada en ahorrar costos y eficientizar procesos operativos.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="bimboSIS_feature1">Desarrollo nativo en Swift para iOS</li>
        <li data-lang="bimboSIS_feature2">Reducción de costos operativos para la organización</li>
        <li data-lang="bimboSIS_feature3">Automatización y eficiencia en flujos de trabajo</li>
        <li data-lang="bimboSIS_feature4">Impacto medible en la productividad del negocio</li>
      </ul>
    </div>

    <!-- Card del Proyecto AppSumapp -->
    <div class="card-project card-cyan" id="appSumappCard">
      ${getProjectCloseButton('appSumappCard')}
      <span class="card-icon">🍲</span>
      <h4 data-lang="appSumapp_title">AppSumapp</h4>
      ${getProjectExpandableImageHTML('imagenesP/sumApp.png', 'AppSumapp')}
      <p class="project-description" data-lang="appSumapp_description">
        Backend en Kotlin para la app móvil de recetas: ApiService con HttpURLConnection, verificación de salud del servidor PHP (health.php) e integración con el feed de recetas.
        Características principales:
      </p>
      <ul class="project-features">
        <li data-lang="appSumapp_feature1">ApiService en Kotlin para comunicación con el servidor</li>
        <li data-lang="appSumapp_feature2">Prueba de conexión y monitoreo vía health.php (GET, timeouts)</li>
        <li data-lang="appSumapp_feature3">Integración con login, registro y feed de recetas en Android</li>
        <li data-lang="appSumapp_feature4">Arquitectura por capas: data.api, layouts XML y flujo móvil</li>
      </ul>
    </div>

    <!-- Card del Proyecto Fleg -->
    <div class="card-project card-cyan" id="flegCard">
      ${getProjectCloseButton('flegCard')}
      <span class="card-icon">🚩</span>
      <h4 data-lang="fleg_title">Fleg</h4>
      ${getProjectExpandableImageHTML('imagenesP/Fleg.png', 'Fleg')}
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
      ${getProjectCloseButton('inffutCard')}
      <span class="card-icon">⚽</span>
      <h4 data-lang="inffut_title">Inffut</h4>
      ${getProjectExpandableImageHTML('imagenesP/Inffut.png', 'Inffut')}
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
      ${getProjectCloseButton('stealCard')}
      <span class="card-icon">🎯</span>
      <h4 data-lang="steal_title">Steal the vibe</h4>
      ${getProjectExpandableImageHTML('imagenesP/Steal.png', 'Steal the vibe')}
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
