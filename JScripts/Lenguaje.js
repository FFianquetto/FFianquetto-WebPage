document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.querySelector('.lang-select');
    const translations = {
        'ES': {
            'inicio': 'Inicio',
            'perfil': 'Perfil',
            'proyectos': 'Proyectos',
            'musica': 'Musica',
            'artistas': 'Artistas',
            'buscar': 'Buscar',
            'bienvenido': '¡Bienvenido a FFianquetto Projects!',
            'subtitulo': 'Aquí podrás explorar distintos proyectos de mi autoría y algunos en colaboración con otros artistas y desarrolladores.',
            'paginas_web': 'Páginas Web',
            'descubre_web': 'Descubre algunas páginas web que he creado.',
            'bases_datos': 'Bases de datos',
            'revisa_db': 'Revisa algunas bases de datos que he trabajado.',
            'videojuegos': 'Videojuegos',
            'sumergete': 'Sumérgete en los videojuegos que he desarrollado.',
            'certificados': 'Certificados',
            'observa': 'Observa algunos certificados que he obtenido.',
            'carousel_nav': '🎲 Ruleta',
            'acerca_de': 'Acerca de mí...',
            'copyright': 'All information copyright © Fernando A. Cancino',

            'idiomas': 'Español, Inglés, Alemán',
            'musica': 'Conocimientos musicales',
            'fotografia': 'Conocimientos en fotografía',
            'orador': 'Buen orador',
            'estudiante': 'Estudiante de 7mo semestre en Multimedia y Animación Digital',
            'universidad': 'Universidad Autónoma de Nuevo León',
            'ubicacion': 'Monterrey, Nuevo León',
            'tecnologia': 'Apasionado por la tecnología y el desarrollo',
            'ajedrez': 'Ajedrecista para Tigres UANL',
            'crypto': 'Crypto Enthusiastic',
            'contacto': 'Contacto',
            'soft_skills': 'Habilidades',
            'email': 'fernandocancino2004@gmail.com',
            'telefono': '+52 921 133 7977',
            'linkedin': 'LinkedIn',
            'github': 'GitHub',
            'zomboy_title': "ZomboyShop-ReDesign",
            'zomboy_description': "Rediseño completo de la página web de ZomboyShop, implementando un diseño moderno y responsivo. Características principales:",
            'zomboy_feature1': "Diseño moderno y minimalista",
            'zomboy_feature2': "Interfaz responsiva para todos los dispositivos",
            'zomboy_feature3': "Optimización de rendimiento",
            'zomboy_feature4': "Accesibilidad en el idioma y tipo de cambio $",
            'artvlog_title': "ArtVlog",
            'artvlog_description': "Plataforma de blog artístico que permite a los usuarios compartir y descubrir contenido creativo. Características principales:",
            'artvlog_feature1': "Sistema de gestión de contenido artístico",
            'artvlog_feature2': "Galería de imágenes interactiva",
            'artvlog_feature3': "Sistema de comentarios y buscador para obras y artistas",
            'artvlog_feature4': "Backend para registro de usuarios y creación de publicaciones",
            'ec2_title': "Contenedor en EC2 - AWS",
            'ec2_description': "Implementación y gestión de contenedores en Amazon EC2 para aplicaciones web. Características principales:",
            'ec2_feature1': "Configuración de instancias EC2",
            'ec2_feature2': "Gestión de contenedores Docker",
            'ec2_feature3': "Automatización de despliegues",
            'ec2_feature4': "Monitoreo y escalabilidad",
            'web_title': 'Páginas Web',
            'db_title': 'Bases de datos',
            'games_title': 'Videojuegos',
            'cert_title': 'Certificados',
            'web_desc': 'Descubre algunas páginas web que he creado.',
            'db_desc': 'Revisa algunas bases de datos que he trabajado.',
            'games_desc': 'Sumérgete en los videojuegos que he desarrollado.',
            'cert_desc': 'Observa algunos certificados que he obtenido.',
            'zomboy_list': 'ZomboyShop-ReDesign',
            'artvlog_list': 'ArtVlog',
            'ec2_list': 'Contenedor en EC2 - AWS',
            'hotel_title': "Gestión de Hoteles con SQL",
            'hotel_description': "Sistema de gestión hotelera implementado con SQL para el control eficiente de operaciones. Características principales:",
            'hotel_feature1': "Gestión de reservaciones y habitaciones",
            'hotel_feature2': "Control de clientes, personal e inventario",
            'hotel_feature3': "Reportes en tiempo real de ingresos y huespedes",
            'hotel_feature4': "Sistema de facturación integrado y validación de usuarios",
            'nominas_title': "Manejo de Nóminas con BigData - CassandraDb",
            'nominas_description': "Sistema de gestión de nóminas implementado con CassandraDB para el manejo eficiente de grandes volúmenes de datos. Características principales:",
            'nominas_feature1': "Procesamiento de grandes volúmenes de datos",
            'nominas_feature2': "Alta disponibilidad y escalabilidad",
            'nominas_feature3': "Análisis predictivo de nóminas",
            'nominas_feature4': "Reportes en tiempo real",
            'cado_title': "CADO Mobile App Backend - MongoDB",
            'cado_description': "Backend robusto para aplicación móvil CADO implementado con MongoDB para máxima flexibilidad y rendimiento. Características principales:",
            'cado_feature1': "Arquitectura NoSQL escalable con MongoDB",
            'cado_feature2': "API RESTful optimizada y metodlogía MCV",
            'cado_feature3': "Sistema de autenticación seguro",
            'cado_feature4': "Sincronización en tiempo real",
            'hotel_list': 'Gestión de Hoteles con SQL',
            'nominas_list': 'Manejo de Nóminas con BigData - CassandraDb',
            'cado_list': 'CADO Mobile App Backend - MongoDB',
            'bolos_list': 'Bolos en Unity con Háptico incluido',
            'escape_list': 'Escape Salvaje en Unity',
            'candy_list': 'Candy Collector con OGL Engine y C++',
            'snake_title': "Snake Slaughter con OGL Engine y Lenguaje Ensamblador",
            'snake_description': "Reimaginación del clásico juego Snake implementada con OpenGL y optimizaciones en lenguaje ensamblador. Características principales:",
            'snake_feature1': "Optimizaciones en ensamblador",
            'snake_feature2': "Renderizado eficiente con OpenGL",
            'snake_feature3': "Mecánicas de juego mejoradas",
            'snake_feature4': "Sistema de puntuación, vidas y colisiones",
            'sydney_title': "Innovation Through Design - Sydney University",
            'sydney_description': "Certificación en innovación y diseño de la Universidad de Sydney, enfocada en metodologías de diseño centrado en el usuario. Características principales:",
            'sydney_feature1': "Metodologías de diseño innovador",
            'sydney_feature2': "Pensamiento crítico y creativo",
            'sydney_feature3': "Resolución de problemas complejos",
            'sydney_feature4': "Desarrollo de prototipos",
            'google_title': "GoogleCloud Fundamentals - Google",
            'google_description': "Certificación en fundamentos de Google Cloud Platform, cubriendo los conceptos básicos de la nube y sus servicios. Características principales:",
            'google_feature1': "Fundamentos de computación en la nube",
            'google_feature2': "Servicios de Google Cloud Platform",
            'google_feature3': "Seguridad y cumplimiento",
            'google_feature4': "Arquitectura de soluciones cloud",
            'georgia_title': "Introduction to User Experience Design - Georgia Institute of Technology",
            'georgia_description': "Certificación en diseño de experiencia de usuario, enfocada en metodologías y prácticas de UX/UI. Características principales:",
            'georgia_feature1': "Principios de diseño UX/UI",
            'georgia_feature2': "Investigación de usuarios",
            'georgia_feature3': "Prototipado y wireframing",
            'georgia_feature4': "Evaluación de usabilidad",
            'tec_title': "Desarrollo rápido de productos innovadores para mercados emergentes - Tec de Mty",
            'tec_description': "Certificación en desarrollo ágil de productos innovadores, enfocada en metodologías de innovación y emprendimiento. Características principales:",
            'tec_feature1': "Metodologías ágiles de desarrollo",
            'tec_feature2': "Innovación y emprendimiento",
            'tec_feature3': "Análisis de mercados emergentes",
            'tec_feature4': "Gestión de proyectos innovadores",
            'unam_title': "Introducción a Data Science: Programación Estadística con R - UNAM",
            'unam_description': "Certificación en ciencia de datos y programación estadística con R, enfocada en análisis de datos y visualización. Características principales:",
            'unam_feature1': "Programación estadística con R",
            'unam_feature2': "Análisis exploratorio de datos",
            'unam_feature3': "Visualización de datos",
            'unam_feature4': "Modelos estadísticos básicos",
            'bolos_title': "Bolos en Unity con Háptico incluido",
            'bolos_description': "Simulador de bolos desarrollado en Unity con retroalimentación háptica para una experiencia inmersiva. Características principales:",
            'bolos_feature1': "Física realista de bolos",
            'bolos_feature2': "Retroalimentación háptica avanzada",
            'bolos_feature3': "Uso de Arduino, sensores, botones, leds y Unity",
            'bolos_feature4': "Sistema de puntuación detallado y lógica de juego realista",
            'escape_title': "Escape Salvaje en Unity",
            'escape_description': "Juego de aventura y supervivencia desarrollado en Unity con mecánicas de escape y puzzle. Características principales:",
            'escape_feature1': "Mundo abierto explorable",
            'escape_feature2': "Sistema de puzzles complejos",
            'escape_feature3': "IA avanzada para enemigos",
            'escape_feature4': "Mecánicas de supervivencia",
            'candy_title': "Candy Collector con OGL Engine y C++",
            'candy_description': "Juego de recolección desarrollado con OpenGL y C++ para demostrar habilidades de programación de bajo nivel. Características principales:",
            'candy_feature1': "Motor gráfico personalizado con OpenGL",
            'candy_feature2': "Optimización de rendimiento en C++",
            'candy_feature3': "Sistema de partículas personalizado",
            'candy_feature4': "Física de juego optimizada y hardcodeada",
            'organización': 'Buenas prácticas de desarrollo',
            'carousel_title': '🎲 Descubre un Proyecto al Azar',
            'carousel_subtitle': '¡Haz clic en la ruleta para descubrir un proyecto sorpresa!',
            'spin_button': '🎯 ¡Girar!',
            'view_project': '👁️ Ver Proyecto',
            'profile_tooltip': 'Click para ampliar',
            'profile_caption': 'Fernando A. Cancino Cuenca - Desarrollador y Animador Digital'
        },
        'EN': {
            'inicio': 'Home',
            'perfil': 'Profile',
            'proyectos': 'Projects',
            'musica': 'Music',
            'artistas': 'Artists',
            'buscar': 'Search',
            'bienvenido': 'Welcome to FFianquetto Projects!',
            'subtitulo': 'Here you can explore different projects of my authorship and some in collaboration with other artists and developers.',
            'paginas_web': 'Web Pages',
            'descubre_web': 'Discover some websites I have created.',
            'bases_datos': 'Databases',
            'revisa_db': 'Check out some databases I have worked.',
            'videojuegos': 'Video Games',
            'sumergete': 'Immerse yourself in the video games I have developed.',
            'certificados': 'Certificates',
            'observa': 'View some certificates I have obtained.',
            'carousel_nav': '🎲 Wheel',
            'acerca_de': 'About me...',
            'copyright': 'All information copyright © Fernando A. Cancino',
            'idiomas': 'Spanish, English, German',
            'musica': 'Musical knowledge',
            'fotografia': 'Photography knowledge',
            'orador': 'Good speaker',
            'estudiante': '7th semester student in Multimedia and Digital Animation',
            'universidad': 'Autonomous University of Nuevo León',
            'ubicacion': 'Monterrey, Nuevo León',
            'tecnologia': 'Passionate about technology and development',
            'ajedrez': 'Chess player for Tigres UANL',
            'crypto': 'Crypto Enthusiastic',
            'contacto': 'Contact',
            'soft_skills': 'Skills',
            'email': 'fernandocancino2004@gmail.com',
            'telefono': '+52 921 133 7977',
            'linkedin': 'LinkedIn',
            'github': 'GitHub',
            'zomboy_title': "ZomboyShop-ReDesign",
            'zomboy_description': "Complete redesign of the ZomboyShop website, implementing a modern and responsive design. Main features:",
            'zomboy_feature1': "Modern and minimalist design",
            'zomboy_feature2': "Responsive interface for all devices",
            'zomboy_feature3': "Performance optimization",
            'zomboy_feature4': "Language and currency accessibility $",
            'artvlog_title': "ArtVlog",
            'artvlog_description': "Art blog platform that allows users to share and discover creative content. Main features:",
            'artvlog_feature1': "Art content management system",
            'artvlog_feature2': "Interactive image gallery",
            'artvlog_feature3': "Comment system and search for artworks and artists",
            'artvlog_feature4': "Backend for user registration and post creation",
            'ec2_title': "EC2 Container - AWS",
            'ec2_description': "Implementation and management of containers in Amazon EC2 for web applications. Main features:",
            'ec2_feature1': "EC2 instance configuration",
            'ec2_feature2': "Docker container management",
            'ec2_feature3': "Deployment automation",
            'ec2_feature4': "Monitoring and scalability",
            'web_title': 'Web Pages',
            'db_title': 'Databases',
            'games_title': 'Video Games',
            'cert_title': 'Certificates',
            'web_desc': 'Discover some web pages I\'ve created.',
            'db_desc': 'Check out some databases I\'ve worked.',
            'games_desc': 'Dive into the video games I\'ve developed.',
            'cert_desc': 'See some certificates I\'ve obtained.',
            'zomboy_list': 'ZomboyShop-ReDesign',
            'artvlog_list': 'ArtVlog',
            'ec2_list': 'EC2 Container - AWS',
            'hotel_title': "Hotel Management with SQL",
            'hotel_description': "Hotel management system implemented with SQL for efficient operations control. Main features:",
            'hotel_feature1': "Reservation and room management",
            'hotel_feature2': "Customer and staff control",
            'hotel_feature3': "Real-time reports and statistics",
            'hotel_feature4': "Integrated billing system and user validation",
            'nominas_title': "Payroll Management with BigData - CassandraDb",
            'nominas_description': "Payroll management system implemented with CassandraDB for efficient handling of large data volumes. Main features:",
            'nominas_feature1': "Processing of large data volumes",
            'nominas_feature2': "High availability and scalability",
            'nominas_feature3': "Predictive payroll analysis",
            'nominas_feature4': "Real-time reporting",
            'cado_title': "CADO Mobile App Backend - MongoDB",
            'cado_description': "Robust backend for the CADO mobile app implemented with MongoDB for maximum flexibility and performance. Main features:",
            'cado_feature1': "Scalable NoSQL architecture with MongoDB",
            'cado_feature2': "Optimized RESTful API and MVC methodology",
            'cado_feature3': "Secure authentication system",
            'cado_feature4': "Real-time synchronization",
            'hotel_list': 'Hotel Management with SQL',
            'nominas_list': 'Payroll Management with BigData - CassandraDb',
            'cado_list': 'CADO Mobile App Backend - MongoDB',
            'bolos_list': 'Bowling in Unity with Haptic Feedback',
            'escape_list': 'Wild Escape in Unity',
            'candy_list': 'Candy Collector with OGL Engine and C++',
            'snake_title': "Snake Slaughter with OGL Engine and Assembly Language",
            'snake_description': "Reimagining of the classic Snake game implemented with OpenGL and assembly language optimizations. Main features:",
            'snake_feature1': "Assembly optimizations",
            'snake_feature2': "Efficient rendering with OpenGL",
            'snake_feature3': "Enhanced gameplay mechanics",
            'snake_feature4': "Advanced scoring system",
            'sydney_title': "Innovation Through Design - Sydney University",
            'sydney_description': "Certification in innovation and design from the University of Sydney, focused on user-centered design methodologies. Características principales:",
            'sydney_feature1': "Innovative design methodologies",
            'sydney_feature2': "Critical and creative thinking",
            'sydney_feature3': "Complex problem solving",
            'sydney_feature4': "Prototype development",
            'google_title': "GoogleCloud Fundamentals - Google",
            'google_description': "Certification in Google Cloud Platform fundamentals, covering cloud computing basics and services. Características principales:",
            'google_feature1': "Cloud computing fundamentals",
            'google_feature2': "Google Cloud Platform services",
            'google_feature3': "Security and compliance",
            'google_feature4': "Architecture of solutions cloud",
            'georgia_title': "Introduction to User Experience Design - Georgia Institute of Technology",
            'georgia_description': "Certification in user experience design, focused on UX/UI methodologies and practices. Características principales:",
            'georgia_feature1': "UX/UI design principles",
            'georgia_feature2': "User research",
            'georgia_feature3': "Prototyping and wireframing",
            'georgia_feature4': "Usability evaluation",
            'tec_title': "Rapid Development of Innovative Products for Emerging Markets - Tec de Mty",
            'tec_description': "Certification in agile development of innovative products, focused on innovation and entrepreneurship methodologies. Características principales:",
            'tec_feature1': "Agile development methodologies",
            'tec_feature2': "Innovation and entrepreneurship",
            'tec_feature3': "Emerging market analysis",
            'tec_feature4': "Innovative project management",
            'unam_title': "Introduction to Data Science: Statistical Programming with R - UNAM",
            'unam_description': "Certification in data science and statistical programming with R, focused on data analysis and visualization. Características principales:",
            'unam_feature1': "Statistical programming with R",
            'unam_feature2': "Exploratory data analysis",
            'unam_feature3': "Data visualization",
            'unam_feature4': "Basic statistical models",
            'bolos_title': "Bowling in Unity with Haptic Feedback",
            'bolos_description': "Bowling simulator developed in Unity with haptic feedback for an immersive experience. Main features:",
            'bolos_feature1': "Realistic bowling physics",
            'bolos_feature2': "Advanced haptic feedback",
            'bolos_feature3': "Use of Arduino, sensors, buttons, LEDs, and Unity",
            'bolos_feature4': "Detailed scoring system and realistic game logic",
            'escape_title': "Wild Escape in Unity",
            'escape_description': "Adventure and survival game developed in Unity with escape and puzzle mechanics. Main features:",
            'escape_feature1': "Explorable open world",
            'escape_feature2': "Complex puzzle system",
            'escape_feature3': "Advanced enemy AI",
            'escape_feature4': "Survival mechanics",
            'candy_title': "Candy Collector with OGL Engine and C++",
            'candy_description': "Collecting game developed with OpenGL and C++ to demonstrate low-level programming skills. Main features:",
            'candy_feature1': "Custom graphics engine with OpenGL",
            'candy_feature2': "Performance optimization in C++",
            'candy_feature3': "Custom particle system",
            'candy_feature4': "Optimized and hardcoded game physics",
            'organización': 'Development best practices',
            'carousel_title': '🎲 Discover a Random Project',
            'carousel_subtitle': 'Click on the wheel to discover a surprise project!',
            'spin_button': '🎯 Spin!',
            'view_project': '👁️ View Project',
            'profile_tooltip': 'Click to enlarge',
            'profile_caption': 'Fernando A. Cancino Cuenca - Developer and Digital Animator'
        },
        'FR': {
            'inicio': 'Accueil',
            'perfil': 'Profil',
            'proyectos': 'Projets',
            'musica': 'Musique',
            'artistas': 'Artistes',
            'buscar': 'Rechercher',
            'bienvenido': 'Bienvenue sur FFianquetto Projects!',
            'subtitulo': 'Ici, vous pouvez explorer différents projets de ma création et certains en collaboration avec d\'autres artistes et développeurs.',
            'paginas_web': 'Pages Web',
            'descubre_web': 'Découvrez quelques sites web que j\'ai créés.',
            'bases_datos': 'Bases de données',
            'revisa_db': 'Consultez certaines bases de données sur lesquelles j\'ai travaillé.',
            'videojuegos': 'Jeux vidéo',
            'sumergete': 'Plongez dans les jeux vidéo que j\'ai développés.',
            'certificados': 'Certificats',
            'observa': 'Consultez certains certificats que j\'ai obtenus.',
            'carousel_nav': '🎲 Roue',
            'acerca_de': 'À propos de moi...',
            'copyright': 'All information copyright © Fernando A. Cancino',

            'idiomas': 'Espagnol, Anglais, Allemand',
            'musica': 'Connaissances musicales',
            'fotografia': 'Connaissances en photographie',
            'orador': 'Bon orateur',
            'estudiante': 'Étudiant de 7ème semestre en Multimédia et Animation Numérique',
            'universidad': 'Université Autonome de Nuevo León',
            'ubicacion': 'Monterrey, Nuevo León',
            'tecnologia': 'Passionné par la technologie et le développement',
            'ajedrez': 'Joueur d\'échecs - Tigres UANL',
            'crypto': 'Crypto Enthusiastic',
            'contacto': 'Contact',
            'soft_skills': 'Compétences',
            'email': 'fernandocancino2004@gmail.com',
            'telefono': '+52 921 133 7977',
            'linkedin': 'LinkedIn',
            'github': 'GitHub',
            'zomboy_title': "ZomboyShop-ReDesign",
            'zomboy_description': "Refonte complète du site ZomboyShop, avec un design moderne et responsive. Principales caractéristiques :",
            'zomboy_feature1': "Design moderne et minimaliste",
            'zomboy_feature2': "Interface responsive pour tous les appareils",
            'zomboy_feature3': "Optimisation des performances",
            'zomboy_feature4': "Accessibilité linguistique et type de devise $",
            'artvlog_title': "ArtVlog",
            'artvlog_description': "Plateforme de blog artistique permettant aux utilisateurs de partager et découvrir du contenu créatif. Principales caractéristiques :",
            'artvlog_feature1': "Système de gestion de contenu artistique",
            'artvlog_feature2': "Galerie d'images interactive",
            'artvlog_feature3': "Système de commentaires et recherche d'œuvres et d'artistes",
            'artvlog_feature4': "Backend pour l'inscription des utilisateurs et la création de publications",
            'ec2_title': "Conteneur EC2 - AWS",
            'ec2_description': "Implémentation et gestion de conteneurs dans Amazon EC2 pour applications web. Principales caractéristiques :",
            'ec2_feature1': "Configuration d'instance EC2",
            'ec2_feature2': "Gestion de conteneurs Docker",
            'ec2_feature3': "Automatisation des déploiements",
            'ec2_feature4': "Surveillance et évolutivité",
            'web_title': 'Pages Web',
            'db_title': 'Bases de données',
            'games_title': 'Jeux Vidéo',
            'cert_title': 'Certificats',
            'web_desc': 'Découvrez quelques pages web que j\'ai créées.',
            'db_desc': 'Consultez quelques bases de données sur lesquelles j\'ai travaillé.',
            'games_desc': 'Plongez dans les jeux vidéo que j\'ai développés.',
            'cert_desc': 'Consultez quelques certificats que j\'ai obtenus.',
            'zomboy_list': 'ZomboyShop-ReDesign',
            'artvlog_list': 'ArtVlog',
            'ec2_list': 'Conteneur EC2 - AWS',
            'hotel_title': "Gestion Hôtelière avec SQL",
            'hotel_description': "Système de gestion hôtelière implémenté avec SQL pour un contrôle efficace des opérations. Principales caractéristiques :",
            'hotel_feature1': "Gestion des réservations et des chambres",
            'hotel_feature2': "Contrôle des clients, du personnel et de l'inventaire",
            'hotel_feature3': "Rapports et statistiques en temps réel",
            'hotel_feature4': "Système de facturation intégré et validation des utilisateurs",
            'nominas_title': "Gestion des Salaires avec BigData - CassandraDb",
            'nominas_description': "Système de gestion de la paie avec CassandraDB pour le traitement efficace de grands volumes de données. Principales caractéristiques :",
            'nominas_feature1': "Traitement de grands volumes de données",
            'nominas_feature2': "Haute disponibilité et évolutivité",
            'nominas_feature3': "Analyse prédictive de la paie",
            'nominas_feature4': "Rapports en temps réel",
            'cado_title': "Backend Application Mobile CADO - MongoDB",
            'cado_description': "Robustes Backend pour l'application mobile CADO implémenté avec MongoDB pour une flexibilité et des performances maximales. Principales caractéristiques :",
            'cado_feature1': "Architecture NoSQL évolutive avec MongoDB",
            'cado_feature2': "API RESTful optimisée et méthodologie MVC",
            'cado_feature3': "Système d'authentification sécurisé",
            'cado_feature4': "Synchronisation en temps réel",
            'hotel_list': 'Gestion Hôtelière avec SQL',
            'nominas_list': 'Gestion des Salaires avec BigData - CassandraDb',
            'cado_list': 'Backend Application Mobile CADO - MongoDB',
            'bolos_list': 'Bowling dans Unity avec Retour Haptique',
            'escape_list': 'Évasion Sauvage dans Unity',
            'candy_list': 'Candy Collector avec Moteur OGL et C++',
            'snake_title': "Snake Slaughter avec Moteur OGL et Langage Assembleur",
            'snake_description': "Réimagination du jeu classique Snake implémentée avec OpenGL et optimisations en langage assembleur. Principales caractéristiques :",
            'snake_feature1': "Optimisations en assembleur",
            'snake_feature2': "Rendu efficace avec OpenGL",
            'snake_feature3': "Mécaniques de jeu améliorées",
            'snake_feature4': "Système de score avancé",
            'sydney_title': "Innovation Through Design - Université de Sydney",
            'sydney_description': "Certification en innovation et design de l'Université de Sydney, axée sur les méthodologies de design centré utilisateur. Caractéristiques principales :",
            'sydney_feature1': "Méthodologies de design innovantes",
            'sydney_feature2': "Pensée critique et créative",
            'sydney_feature3': "Résolution de problèmes complexes",
            'sydney_feature4': "Développement de prototypes",
            'google_title': "Fondamentaux GoogleCloud - Google",
            'google_description': "Certification en fondamentaux de Google Cloud Platform, couvrant les bases du cloud computing et ses services. Caractéristiques principales :",
            'google_feature1': "Fondamentaux du cloud computing",
            'google_feature2': "Services Google Cloud Platform",
            'google_feature3': "Sécurité et conformité",
            'google_feature4': "Architecture de solutions cloud",
            'georgia_title': "Introduction au Design d'Expérience Utilisateur - Georgia Institute of Technology",
            'georgia_description': "Certification en design d'expérience utilisateur, axée sur les méthodologies et pratiques UX/UI. Caractéristiques principales :",
            'georgia_feature1': "Principes de design UX/UI",
            'georgia_feature2': "Recherche utilisateur",
            'georgia_feature3': "Prototyping et wireframing",
            'georgia_feature4': "Évaluation de l'utilisabilité",
            'tec_title': "Développement Rapide de Produits Innovants pour Marchés Émergents - Tec de Mty",
            'tec_description': "Certification en développement agile de produits innovants, axée sur les méthodologies d'innovation et d'entrepreneuriat. Caractéristiques principales :",
            'tec_feature1': "Méthodologies de développement agile",
            'tec_feature2': "Innovation et entrepreneuriat",
            'tec_feature3': "Analyse des marchés émergents",
            'tec_feature4': "Gestion de projets innovants",
            'unam_title': "Introduction à la Science des Données : Programmation Statistique avec R - UNAM",
            'unam_description': "Certification en science des données et programmation statistique avec R, axée sur l'analyse et la visualisation de données. Caractéristiques principales :",
            'unam_feature1': "Programmation statistique avec R",
            'unam_feature2': "Analyse exploratoire des données",
            'unam_feature3': "Visualisation de données",
            'unam_feature4': "Modèles statistiques de base",
            'bolos_title': "Bowling dans Unity avec Retour Haptique",
            'bolos_description': "Bowling-Simulator entwickelt in Unity mit haptischem Feedback für ein immersives Erlebnis. Hauptmerkmale:",
            'bolos_feature1': "Realistische Bowling-Physik",
            'bolos_feature2': "Fortgeschrittenes haptisches Feedback",
            'bolos_feature3': "Einsatz von Arduino, Sensoren, Tasten, LEDs und Unity",
            'bolos_feature4': "Detailliertes Punktesystem und realistische Spielmechanik",
            'escape_title': "Évasion Sauvage dans Unity",
            'escape_description': "Jeu d'aventure et de survie développé dans Unity avec des mécaniques d'évasion et de puzzle. Caractéristiques principales :",
            'escape_feature1': "Monde ouvert explorable",
            'escape_feature2': "Système de puzzles complexe",
            'escape_feature3': "IA avancée pour les ennemis",
            'escape_feature4': "Mécaniques de survie",
            'candy_title': "Candy Collector avec Moteur OGL et C++",
            'candy_description': "Jeu de collecte développé avec OpenGL et C++ pour démontrer des compétences de programmation bas niveau. Caractéristiques principales :",
            'candy_feature1': "Moteur graphique personnalisé avec OpenGL",
            'candy_feature2': "Optimisation des performances en C++",
            'candy_feature3': "Individuelles Partikelsystem",
            'candy_feature4': "Optimierte und hardcodierte Spielphysik",
            'organización': 'Bonnes pratiques de développement',
            'carousel_title': '🎲 Découvrez un Projet Aléatoire',
            'carousel_subtitle': 'Cliquez sur la roue pour découvrir un projet surprise !',
            'spin_button': '🎯 Tourner !',
            'view_project': '👁️ Voir le Projet',
            'profile_tooltip': 'Cliquez pour agrandir',
            'profile_caption': 'Fernando A. Cancino Cuenca - Développeur et Animateur Digital'
        },
        'DE': {
            'inicio': 'Startseite',
            'perfil': 'Profil',
            'proyectos': 'Projekte',
            'musica': 'Musik',
            'artistas': 'Künstler',
            'buscar': 'Suchen',
            'bienvenido': 'Willkommen bei FFianquetto Projects!',
            'subtitulo': 'Hier können Sie verschiedene Projekte von mir und einige in Zusammenarbeit mit anderen Künstlern und Entwicklern erkunden.',
            'paginas_web': 'Webseiten',
            'descubre_web': 'Entdecken Sie einige Websites, die ich erstellt habe.',
            'bases_datos': 'Datenbanken',
            'revisa_db': 'Schauen Sie sich einige Datenbanken an, mit denen ich gearbeitet habe.',
            'videojuegos': 'Videospiele',
            'sumergete': 'Tauchen Sie ein in die Videospiele, die ich entwickelt habe.',
            'certificados': 'Zertifikate',
            'observa': 'Sehen Sie sich einige Zertifikate an, die ich erhalten habe.',
            'carousel_nav': '🎲 Rad',
            'acerca_de': 'Über mich...',
            'copyright': 'All information copyright © Fernando A. Cancino',

            'idiomas': 'Spanisch, Englisch, Deutsch',
            'musica': 'Musikkenntnisse',
            'fotografia': 'Fotografiekenntnisse',
            'orador': 'Guter Redner',
            'estudiante': 'Student im 7. Semester für Multimedia und digitale Animation',
            'universidad': 'Autonome Universität von Nuevo León',
            'ubicacion': 'Monterrey, Nuevo León',
            'tecnologia': 'Leidenschaftlich für Technologie und Entwicklung',
            'ajedrez': 'Schachspieler für Tigres UANL',
            'crypto': 'Crypto Enthusiastic',
            'contacto': 'Kontakt',
            'soft_skills': 'Fähigkeiten',
            'email': 'fernandocancino2004@gmail.com',
            'telefono': '+52 921 133 7977',
            'linkedin': 'LinkedIn',
            'github': 'GitHub',
            'zomboy_title': "ZomboyShop-ReDesign",
            'zomboy_description': "Komplettes Redesign der ZomboyShop-Webseite mit modernem und responsivem Design. Hauptmerkmale:",
            'zomboy_feature1': "Modernes und minimalistisches Design",
            'zomboy_feature2': "Responsives Interface für alle Geräte",
            'zomboy_feature3': "Leistungsoptimierung",
            'zomboy_feature4': "Sprach- und Währungszugänglichkeit $",
            'artvlog_title': "ArtVlog",
            'artvlog_description': "Künstlerblog-Plattform, die es Nutzern ermöglicht, kreative Inhalte zu teilen und zu entdecken. Hauptmerkmale:",
            'artvlog_feature1': "System zur Verwaltung künstlerischer Inhalte",
            'artvlog_feature2': "Interaktive Bildergalerie",
            'artvlog_feature3': "Kommentarsystem und Suche für Werke und Künstler",
            'artvlog_feature4': "Backend für Benutzerregistrierung und Beitragserstellung",
            'ec2_title': "EC2-Container - AWS",
            'ec2_description': "Implementierung und Verwaltung von Containern in Amazon EC2 für Webanwendungen. Hauptmerkmale:",
            'ec2_feature1': "EC2-Instanz-Konfiguration",
            'ec2_feature2': "Docker-Container-Verwaltung",
            'ec2_feature3': "Automatisierung von Bereitstellungen",
            'ec2_feature4': "Überwachung und Skalierbarkeit",
            'web_title': 'Webseiten',
            'db_title': 'Datenbanken',
            'games_title': 'Videospiele',
            'cert_title': 'Zertifikate',
            'web_desc': 'Entdecken Sie einige von mir erstellte Webseiten.',
            'db_desc': 'Schauen Sie sich einige Datenbanken an, mit denen ich gearbeitet habe.',
            'games_desc': 'Tauchen Sie ein in die von meine Videospiele.',
            'cert_desc': 'Sehen Sie sich einige meiner erworbenen Zertifikate an.',
            'zomboy_list': 'ZomboyShop-ReDesign',
            'artvlog_list': 'ArtVlog',
            'ec2_list': 'EC2-Container - AWS',
            'hotel_title': "Hotelmanagement mit SQL",
            'hotel_description': "Hotelmanagementsystem mit SQL für effiziente Betriebssteuerung. Hauptmerkmale:",
            'hotel_feature1': "Verwaltung von Reservierungen und Zimmern",
            'hotel_feature2': "Kunden-, Personal- und Inventarverwaltung",
            'hotel_feature3': "Echtzeitberichte zu Einnahmen und Gästen",
            'hotel_feature4': "Integriertes Abrechnungssystem und Benutzervalidierung",
            'nominas_title': "Gehaltsabrechnung mit BigData - CassandraDb",
            'nominas_description': "Gehaltsabrechnungssystem mit CassandraDB für effiziente Handhabung großer Datenmengen. Hauptmerkmale:",
            'nominas_feature1': "Verarbeitung großer Datenmengen",
            'nominas_feature2': "Hohe Verfügbarkeit und Skalierbarkeit",
            'nominas_feature3': "Prognostische Lohnanalyse",
            'nominas_feature4': "Echtzeit-Berichterstattung",
            'cado_title': "CADO Mobile App Backend - MongoDB",
            'cado_description': "Robustes Backend für die CADO-Mobilapplikation mit MongoDB für maximale Flexibilität und Leistung. Hauptmerkmale:",
            'cado_feature1': "Skalierbare NoSQL-Architektur mit MongoDB",
            'cado_feature2': "Optimierte RESTful-API und MVC-Methodik",
            'cado_feature3': "Sicheres Authentifizierungssystem",
            'cado_feature4': "Echtzeit-Synchronisierung",
            'hotel_list': 'Hotelmanagement mit SQL',
            'nominas_list': 'Gehaltsabrechnung mit BigData - CassandraDb',
            'cado_list': 'CADO Mobile App Backend - MongoDB',
            'bolos_list': 'Bowling in Unity mit Haptischem Feedback',
            'escape_list': 'Wild Escape in Unity',
            'candy_list': 'Candy Collector mit OGL Engine und C++',
            'snake_title': "Snake Slaughter mit OGL Engine und Assemblersprache",
            'snake_description': "Neuinterpretation des klassischen Snake-Spiels mit OpenGL und Assemblersprache-Optimierungen. Hauptmerkmale:",
            'snake_feature1': "Optimierungen in Assemblersprache",
            'snake_feature2': "Effizientes Rendering mit OpenGL",
            'snake_feature3': "Verbesserte Spielmechaniken",
            'snake_feature4': "Punktesystem, Leben und Kollisionen",
            'sydney_title': "Innovation Through Design - Universität Sydney",
            'sydney_description': "Certification in Innovation und Design von der Universität Sydney, fokussiert auf nutzerzentrierte Designmethodologien. Hauptmerkmale:",
            'sydney_feature1': "Innovative Designmethodologien",
            'sydney_feature2': "Kritisches und kreatives Denken",
            'sydney_feature3': "Komplexe Problemlösung",
            'sydney_feature4': "Prototypentwicklung",
            'google_title': "GoogleCloud Grundlagen - Google",
            'google_description': "Zertifizierung in Google Cloud Platform Grundlagen, abdeckend Cloud Computing Basics und Services. Hauptmerkmale:",
            'google_feature1': "Cloud Computing Grundlagen",
            'google_feature2': "Google Cloud Platform Services",
            'google_feature3': "Sicherheit und Compliance",
            'google_feature4': "Cloud-Lösungsarchitektur",
            'georgia_title': "Einführung in das User Experience Design - Georgia Institute of Technology",
            'georgia_description': "Zertifizierung im User Experience Design, fokussiert auf UX/UI-Methodologien und Praktiken. Hauptmerkmale:",
            'georgia_feature1': "UX/UI-Designprinzipien",
            'georgia_feature2': "Nutzerforschung",
            'georgia_feature3': "Prototyping und Wireframing",
            'georgia_feature4': "Usability-Evaluierung",
            'tec_title': "Schnelle Entwicklung innovativer Produkte für aufstrebende Märkte - Tec de Mty",
            'tec_description': "Zertifizierung in agiler Entwicklung innovativer Produkte, fokussiert auf Innovations- und Unternehmensmethodologien. Hauptmerkmale:",
            'tec_feature1': "Agile Entwicklungsmethodologien",
            'tec_feature2': "Innovation und Unternehmertum",
            'tec_feature3': "Analyse aufstrebender Märkte",
            'tec_feature4': "Innovatives Projektmanagement",
            'unam_title': "Einführung in Data Science: Statistische Programmierung mit R - UNAM",
            'unam_description': "Zertifizierung in Data Science und statistischer Programmierung mit R, fokussiert auf Datenanalyse und Visualisierung. Hauptmerkmale:",
            'unam_feature1': "Statistische Programmierung mit R",
            'unam_feature2': "Explorative Datenanalyse",
            'unam_feature3': "Datenvisualisierung",
            'unam_feature4': "Grundlegende statistische Modelle",
            'bolos_title': "Bowling in Unity mit Haptischem Feedback",
            'bolos_description': "Bowling-Simulator entwickelt in Unity mit haptischem Feedback für ein immersives Erlebnis. Hauptmerkmale:",
            'bolos_feature1': "Realistische Bowling-Physik",
            'bolos_feature2': "Fortgeschrittenes haptisches Feedback",
            'bolos_feature3': "Einsatz von Arduino, Sensoren, Tasten, LEDs und Unity",
            'bolos_feature4': "Detailliertes Punktesystem und realistische Spielmechanik",
            'escape_title': "Wild Escape in Unity",
            'escape_description': "Abenteuer- und Überlebensspiel entwickelt in Unity mit Escape- und Puzzle-Mechaniken. Hauptmerkmale:",
            'escape_feature1': "Erkundbare offene Welt",
            'escape_feature2': "Komplexes Puzzlesystem",
            'escape_feature3': "Fortschrittliche Gegner-KI",
            'escape_feature4': "Überlebensmechaniken",
            'candy_title': "Candy Collector mit OGL Engine und C++",
            'candy_description': "Sammelspiel entwickelt mit OpenGL und C++ zur Demonstration von Low-Level-Programmierfähigkeiten. Hauptmerkmale:",
            'candy_feature1': "Individuelle Grafik-Engine mit OpenGL",
            'candy_feature2': "Leistungsoptimierung in C++",
            'candy_feature3': "Individuelles Partikelsystem",
            'candy_feature4': "Optimierte und hardcodierte Spielphysik",
            'organización': 'Entwicklungsbest Practices',
            'carousel_title': '🎲 Entdecke ein zufälliges Projekt',
            'carousel_subtitle': 'Klicke auf das Rad, um ein Überraschungsprojekt zu entdecken!',
            'spin_button': '🎯 Drehen!',
            'view_project': '👁️ Projekt anzeigen',
            'profile_tooltip': 'Klicken zum Vergrößern',
            'profile_caption': 'Fernando A. Cancino Cuenca - Entwickler und Digital Animator'
        }
    };
    window.translations = translations;

    function updateLanguage(lang) {
        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('selectedLanguage', lang);
        
        // Actualizar el atributo lang del HTML
        document.documentElement.lang = lang.toLowerCase();
        
        // Actualizar textos del hero con animación
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            heroTitle.style.opacity = '0';
            setTimeout(() => {
                heroTitle.textContent = translations[lang]['bienvenido'];
                heroTitle.setAttribute('lang', lang.toLowerCase());
                heroTitle.style.opacity = '1';
            }, 300);
        }
        
        // Actualizar todos los elementos con atributo data-lang
        document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Actualizar placeholder del buscador si existe
        const searchBar = document.querySelector('.search-bar');
        if (searchBar && translations[lang]['buscar']) {
            searchBar.placeholder = translations[lang]['buscar'];
        }

        // Actualizar textos de todas las tarjetas de proyectos
        updateProjectCards(lang);
        
        // Actualizar el carrusel de proyectos si existe
        if (typeof renderMultiCarousel === 'function') {
            const currentIndex = parseInt(document.getElementById('multiCarouselStrip')?.dataset.selected || '0');
            renderMultiCarousel(currentIndex);
        }
    }

    // Función para actualizar las tarjetas de proyectos
    function updateProjectCards(lang) {
        const cards = {
            'zomboyCard': ['zomboy_title', 'zomboy_description', 'zomboy_feature1', 'zomboy_feature2', 'zomboy_feature3', 'zomboy_feature4'],
            'artvlogCard': ['artvlog_title', 'artvlog_description', 'artvlog_feature1', 'artvlog_feature2', 'artvlog_feature3', 'artvlog_feature4'],
            'ec2Card': ['ec2_title', 'ec2_description', 'ec2_feature1', 'ec2_feature2', 'ec2_feature3', 'ec2_feature4'],
            'hotelCard': ['hotel_title', 'hotel_description', 'hotel_feature1', 'hotel_feature2', 'hotel_feature3', 'hotel_feature4'],
            'nominasCard': ['nominas_title', 'nominas_description', 'nominas_feature1', 'nominas_feature2', 'nominas_feature3', 'nominas_feature4'],
            'cadoCard': ['cado_title', 'cado_description', 'cado_feature1', 'cado_feature2', 'cado_feature3', 'cado_feature4'],
            'bolosCard': ['bolos_title', 'bolos_description', 'bolos_feature1', 'bolos_feature2', 'bolos_feature3', 'bolos_feature4'],
            'escapeCard': ['escape_title', 'escape_description', 'escape_feature1', 'escape_feature2', 'escape_feature3', 'escape_feature4'],
            'candyCard': ['candy_title', 'candy_description', 'candy_feature1', 'candy_feature2', 'candy_feature3', 'candy_feature4'],
            'snakeCard': ['snake_title', 'snake_description', 'snake_feature1', 'snake_feature2', 'snake_feature3', 'snake_feature4'],
            'sydneyCard': ['sydney_title', 'sydney_description', 'sydney_feature1', 'sydney_feature2', 'sydney_feature3', 'sydney_feature4'],
            'googleCard': ['google_title', 'google_description', 'google_feature1', 'google_feature2', 'google_feature3', 'google_feature4'],
            'georgiaCard': ['georgia_title', 'georgia_description', 'georgia_feature1', 'georgia_feature2', 'georgia_feature3', 'georgia_feature4'],
            'tecCard': ['tec_title', 'tec_description', 'tec_feature1', 'tec_feature2', 'tec_feature3', 'tec_feature4'],
            'unamCard': ['unam_title', 'unam_description', 'unam_feature1', 'unam_feature2', 'unam_feature3', 'unam_feature4']
        };

        for (const [cardId, keys] of Object.entries(cards)) {
            const card = document.getElementById(cardId);
            if (card) {
                card.querySelector('h4').textContent = translations[lang][keys[0]];
                card.querySelector('.project-description').textContent = translations[lang][keys[1]];
                const features = card.querySelectorAll('.project-features li');
                features[0].textContent = translations[lang][keys[2]];
                features[1].textContent = translations[lang][keys[3]];
                features[2].textContent = translations[lang][keys[4]];
                features[3].textContent = translations[lang][keys[5]];
            }
        }
    }

    // Cargar el idioma guardado o usar español por defecto
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'ES';
    langSelect.value = savedLanguage;
    updateLanguage(savedLanguage);

    // Evento para cambiar el idioma
    langSelect.addEventListener('change', function() {
        updateLanguage(this.value);
    });
    
    // Inicializar el carrusel de proyectos
    initializeProjectCarousel();
});

// ===== CARRUSEL DE PROYECTOS =====

// Array con todos los proyectos disponibles
const projects = [
    {
        id: 'zomboyCard',
        title: 'ZomboyShop-ReDesign',
        description: 'Rediseño completo de la página web de ZomboyShop con diseño moderno y responsivo.',
        category: 'web',
        color: '#a259ff'
    },
    {
        id: 'artvlogCard',
        title: 'ArtVlog',
        description: 'Plataforma de blog artístico para compartir y descubrir contenido creativo.',
        category: 'web',
        color: '#a259ff'
    },
    {
        id: 'ec2Card',
        title: 'EC2 Container - AWS',
        description: 'Implementación y gestión de contenedores en Amazon EC2 para aplicaciones web.',
        category: 'web',
        color: '#a259ff'
    },
    {
        id: 'hotelCard',
        title: 'Gestión de Hoteles con SQL',
        description: 'Sistema de gestión hotelera implementado con SQL para control eficiente de operaciones.',
        category: 'database',
        color: '#3772ff'
    },
    {
        id: 'nominasCard',
        title: 'Manejo de Nóminas con BigData',
        description: 'Sistema de gestión de nóminas con CassandraDB para grandes volúmenes de datos.',
        category: 'database',
        color: '#3772ff'
    },
    {
        id: 'cadoCard',
        title: 'CADO Mobile App Backend',
        description: 'Backend robusto para aplicación móvil CADO implementado con MongoDB.',
        category: 'database',
        color: '#3772ff'
    },
    {
        id: 'bolosCard',
        title: 'Bolos en Unity con Háptico',
        description: 'Simulador de bolos desarrollado en Unity con retroalimentación háptica inmersiva.',
        category: 'game',
        color: '#ff4ecd'
    },
    {
        id: 'escapeCard',
        title: 'Escape Salvaje en Unity',
        description: 'Juego de aventura y supervivencia con mecánicas de escape y puzzle.',
        category: 'game',
        color: '#ff4ecd'
    },
    {
        id: 'candyCard',
        title: 'Candy Collector con OGL Engine',
        description: 'Juego desarrollado con motor gráfico personalizado OpenGL y C++.',
        category: 'game',
        color: '#ff4ecd'
    },
    {
        id: 'snakeCard',
        title: 'Snake Slaughter con OGL Engine',
        description: 'Reimaginación del clásico Snake con OpenGL y optimizaciones en ensamblador.',
        category: 'game',
        color: '#ff4ecd'
    },
    {
        id: 'sydneyCard',
        title: 'Innovation Through Design',
        description: 'Certificación en innovación y diseño de la Universidad de Sydney.',
        category: 'certificate',
        color: '#00ffa3'
    },
    {
        id: 'googleCard',
        title: 'GoogleCloud Fundamentals',
        description: 'Certificación en fundamentos de Google Cloud Platform.',
        category: 'certificate',
        color: '#00ffa3'
    },
    {
        id: 'georgiaCard',
        title: 'Introduction to User Experience Design',
        description: 'Certificación en diseño de experiencia de usuario del Georgia Institute.',
        category: 'certificate',
        color: '#00ffa3'
    },
    {
        id: 'tecCard',
        title: 'Desarrollo rápido de productos innovadores',
        description: 'Certificación en desarrollo ágil de productos innovadores del Tec de Mty.',
        category: 'certificate',
        color: '#00ffa3'
    },
    {
        id: 'unamCard',
        title: 'Introducción a Data Science',
        description: 'Certificación en ciencia de datos y programación estadística con R de la UNAM.',
        category: 'certificate',
        color: '#00ffa3'
    }
];

let currentRandomProject = null;
let isSpinning = false;

function initializeProjectCarousel() {
    // Crear los segmentos de la ruleta dinámicamente
    const wheel = document.getElementById('projectWheel');
    if (!wheel) return;
    
    const segmentAngle = 360 / projects.length;
    
    projects.forEach((project, index) => {
        const segment = document.createElement('div');
        segment.className = 'wheel-segment';
        segment.style.cssText = `
            position: absolute;
            width: 50%;
            height: 4px;
            background: ${project.color};
            top: 50%;
            left: 50%;
            transform-origin: 0 0;
            transform: rotate(${index * segmentAngle}deg) translateX(50%);
            z-index: 2;
            box-shadow: 0 0 10px ${project.color};
        `;
        wheel.appendChild(segment);
    });
}

function spinWheel() {
    if (isSpinning) return;
    
    isSpinning = true;
    const wheel = document.getElementById('projectWheel');
    const spinButton = document.querySelector('.spin-button');
    const resultDiv = document.getElementById('carouselResult');
    
    // Deshabilitar el botón durante el giro
    spinButton.disabled = true;
    spinButton.style.opacity = '0.6';
    
    // Generar un ángulo aleatorio
    const randomAngle = Math.random() * 360;
    const extraSpins = 5; // Número de vueltas completas
    const totalRotation = extraSpins * 360 + randomAngle;
    
    // Aplicar la animación
    wheel.style.transform = `rotate(${totalRotation}deg)`;
    
    // Calcular qué proyecto fue seleccionado
    const segmentAngle = 360 / projects.length;
    const normalizedAngle = (360 - (randomAngle % 360)) % 360;
    const selectedIndex = Math.floor(normalizedAngle / segmentAngle);
    currentRandomProject = projects[selectedIndex];
    
    // Mostrar el resultado después de la animación
    setTimeout(() => {
        showCarouselResult();
        isSpinning = false;
        spinButton.disabled = false;
        spinButton.style.opacity = '1';
    }, 3000);
}

function showCarouselResult() {
    if (!currentRandomProject) return;
    
    const resultDiv = document.getElementById('carouselResult');
    const resultTitle = document.getElementById('resultTitle');
    const resultDescription = document.getElementById('resultDescription');
    
    resultTitle.textContent = currentRandomProject.title;
    resultDescription.textContent = currentRandomProject.description;
    
    resultDiv.style.display = 'block';
    resultDiv.style.animation = 'fadeInUp 0.5s ease';
}

function viewRandomProject() {
    if (!currentRandomProject) return;
    
    // Cerrar cualquier modal abierto
    closeAllModals();
    
    // Abrir el modal del proyecto seleccionado
    toggleProjectCard(currentRandomProject.id);
    
    // Ocultar el resultado del carrusel
    document.getElementById('carouselResult').style.display = 'none';
}

function closeAllModals() {
    // Cerrar todos los modales de proyecto
    const projectModals = document.querySelectorAll('.card-project');
    projectModals.forEach(modal => {
        modal.style.display = 'none';
    });
    
    // Cerrar el overlay
    const overlay = document.querySelector('.card-overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }
}

// Función para hacer scroll al carrusel
function scrollToCarousel() {
    const carouselSection = document.getElementById('carousel-section');
    if (carouselSection) {
        carouselSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// --- INICIO: Restricción para abrir solo una card en móvil ---
function toggleProjectCard(cardId) {
    const isMobile = window.innerWidth <= 991.98;
    const card = document.getElementById(cardId);
    if (!card) return;
    if (isMobile) {
        // Si ya hay una card abierta, no abrir otra
        const anyOpen = Array.from(document.querySelectorAll('.card-project')).some(c => c.style.display === 'block' && c.id !== cardId);
        if (anyOpen) return;
    }
    if (card.style.display === 'block') {
        card.style.display = 'none';
        const overlay = document.querySelector('.card-overlay');
        if (overlay) overlay.style.display = 'none';
    } else {
        closeAllModals();
        card.style.display = 'block';
        const overlay = document.querySelector('.card-overlay');
        if (overlay) overlay.style.display = 'block';
    }
}
// --- FIN restricción ---