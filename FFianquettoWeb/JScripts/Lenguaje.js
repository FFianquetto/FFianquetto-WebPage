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
            'habilidades': 'Habilidades',
            'acerca_de': 'Acerca de mí...',
            'copyright': 'All information copyright © Fernando A. Cancino'
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
            'revisa_db': 'Check out some databases I have worked with.',
            'videojuegos': 'Video Games',
            'sumergete': 'Immerse yourself in the video games I have developed.',
            'certificados': 'Certificates',
            'observa': 'View some certificates I have obtained.',
            'habilidades': 'Skills',
            'acerca_de': 'About me...',
            'copyright': 'All information copyright © Fernando A. Cancino'
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
            'habilidades': 'Compétences',
            'acerca_de': 'À propos de moi...',
            'copyright': 'All information copyright © Fernando A. Cancino'
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
            'habilidades': 'Fähigkeiten',
            'acerca_de': 'Über mich...',
            'copyright': 'All information copyright © Fernando A. Cancino'
        }
    };

    function updateLanguage(lang) {
        // Guardar el idioma seleccionado en localStorage
        localStorage.setItem('selectedLanguage', lang);
        
        // Actualizar el atributo lang del HTML
        document.documentElement.lang = lang.toLowerCase();
        
        // Actualizar textos de navegación
        document.querySelector('a[href="../pages/inicioFF.html"]').textContent = translations[lang]['inicio'];
        document.querySelector('a[href="#paginas-web"]').textContent = translations[lang]['proyectos'];
        document.querySelector('a[href="#certificaciones"]').textContent = translations[lang]['certificados'];
        document.querySelector('a[href="#habilidades"]').textContent = translations[lang]['habilidades'];
        document.querySelector('a[href="#acerca-de-mi"]').textContent = translations[lang]['acerca_de'];
        
        // Actualizar placeholder del buscador
        document.querySelector('.search-bar').placeholder = translations[lang]['buscar'];
        
        // Actualizar textos del hero con animación
        const heroTitle = document.querySelector('.hero h1');
        heroTitle.style.opacity = '0';
        setTimeout(() => {
            heroTitle.textContent = translations[lang]['bienvenido'];
            heroTitle.setAttribute('lang', lang.toLowerCase());
            heroTitle.style.opacity = '1';
        }, 300);
        
        document.querySelector('.hero-subtitle').textContent = translations[lang]['subtitulo'];
        
        // Actualizar textos de las tarjetas
        const cards = document.querySelectorAll('.card');
        cards[0].querySelector('h3').textContent = translations[lang]['paginas_web'];
        cards[0].querySelector('p').textContent = translations[lang]['descubre_web'];
        
        cards[1].querySelector('h3').textContent = translations[lang]['bases_datos'];
        cards[1].querySelector('p').textContent = translations[lang]['revisa_db'];
        
        cards[2].querySelector('h3').textContent = translations[lang]['videojuegos'];
        cards[2].querySelector('p').textContent = translations[lang]['sumergete'];
        
        cards[3].querySelector('h3').textContent = translations[lang]['certificados'];
        cards[3].querySelector('p').textContent = translations[lang]['observa'];
        
        cards[4].querySelector('h3').textContent = translations[lang]['habilidades'];
        cards[4].querySelector('p').textContent = translations[lang]['observa'];
        
        cards[5].querySelector('h3').textContent = translations[lang]['acerca_de'];
        cards[5].querySelector('p').textContent = translations[lang]['observa'];
        
        // Actualizar copyright
        document.querySelector('.copyright').textContent = translations[lang]['copyright'];
    }

    // Manejar el cambio de idioma
    langSelect.addEventListener('change', function() {
        const selectedLang = this.value;
        updateLanguage(selectedLang);
    });

    // Recuperar el idioma guardado al cargar la página
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        langSelect.value = savedLanguage;
        updateLanguage(savedLanguage);
    }
}); 