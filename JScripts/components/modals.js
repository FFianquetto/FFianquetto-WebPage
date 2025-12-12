// ===== GESTIÓN DE MODALES =====

// Función para abrir el modal de imagen
function openImageModal(imageSrc, imageAlt) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  if (!modal || !modalImage || !modalCaption) return;

  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  
  // Si es la imagen de perfil, mostrar un mensaje más descriptivo
  if (imageSrc.includes('prop.jpg')) {
    // Obtener idioma actual
    const lang = localStorage.getItem('selectedLanguage') || 'ES';
    // Obtener traducciones (debe estar global)
    let translations = window.translations || {};
    // Fallback si no está global
    if (!translations[lang]) {
      if (typeof getTranslations === 'function') translations = getTranslations();
      else translations = {};
    }
    // Asignar traducción
    modalCaption.textContent = translations[lang]?.profile_caption || 'Fernando A. Cancino Cuenca - Desarrollador y Animador Digital';
    // Agregar clase específica para la imagen de perfil solo en móvil
    if (window.innerWidth <= 991.98) {
      modalImage.classList.add('profile-image-modal');
    }
  } else {
    modalCaption.textContent = imageAlt;
    modalImage.classList.remove('profile-image-modal');
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  
  // Agregar animación de entrada solo para móvil
  if (window.innerWidth <= 767.98) {
    modalImage.style.transform = 'scale(0.8)';
    modalImage.style.opacity = '0';
    setTimeout(() => {
      modalImage.style.transition = 'all 0.3s ease';
      modalImage.style.transform = 'scale(1)';
      modalImage.style.opacity = '1';
    }, 100);
  }
}

// Función para cerrar el modal de imagen
function closeImageModal() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  if (!modal || !modalImage) return;
  
  // Animación de salida solo para móvil
  if (window.innerWidth <= 767.98) {
    modalImage.style.transition = 'all 0.2s ease';
    modalImage.style.transform = 'scale(0.8)';
    modalImage.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      // Resetear estilos
      modalImage.style.transform = '';
      modalImage.style.opacity = '';
      modalImage.style.transition = '';
      modalImage.classList.remove('profile-image-modal');
    }, 200);
  } else {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalImage.classList.remove('profile-image-modal');
  }
}

// Función para manejar el clic en "Acerca de mí"
function handleAcercaClick(event) {
  // En móvil, mostrar la card como modal
  if (window.innerWidth <= 991.98) {
    event.preventDefault();
    toggleCard('acercaModal');
  }
  // En desktop, permitir el comportamiento normal del enlace (no prevenir)
}

// Función para manejar clic en iconos móviles
function handleMobileIconClick(cardId) {
  // Cerrar el menú hamburguesa si está abierto
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    navbarCollapse.classList.remove('show');
  }
  
  // Cerrar todas las cards de proyecto si están abiertas
  const projectCards = document.querySelectorAll('.card-project');
  projectCards.forEach(card => {
    if (card.style.display === 'block') {
      card.classList.add('closing');
      setTimeout(() => {
        card.style.display = 'none';
        card.classList.remove('closing');
      }, 300);
    }
  });
  
  // Mostrar la card correspondiente
  toggleCard(cardId);
}

// Inicializar modales
function initModals() {
  const imageModal = document.getElementById('imageModal');
  const modalCaption = document.getElementById('modalCaption');
  
  // Cerrar modal al hacer clic en el overlay
  if (imageModal) {
    imageModal.addEventListener('click', function (e) {
      // Solo cerrar si se hace clic en el fondo del modal, no en la imagen o caption
      if (e.target === this || e.target.classList.contains('image-modal-content')) {
        closeImageModal();
      }
    });
  }

  // Cerrar modal al hacer clic en el caption (solo el fondo, no el texto)
  if (modalCaption) {
    modalCaption.addEventListener('click', function (e) {
      // Solo cerrar si se hace clic en el fondo del caption, no en el texto
      if (e.target === this) {
        closeImageModal();
      }
    });
  }

  // Cerrar modal con ESC
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
}

// Exportar funciones globales
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.handleAcercaClick = handleAcercaClick;
window.handleMobileIconClick = handleMobileIconClick;
window.initModals = initModals;
