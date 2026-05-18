// ===== GESTIÓN DE MODALES =====

const IMAGE_MODAL_ACCENT_KEYS = ['card-purple', 'card-cyan', 'card-orange', 'card-blue', 'card-pink', 'card-green'];

function getImageModalAccentClass(sourceEl) {
  const card = sourceEl?.closest?.('.card-project, .card, .card-acerca');
  if (!card) return 'image-modal-accent-purple';

  if (card.classList.contains('card-acerca')) return 'image-modal-accent-pink';

  const match = IMAGE_MODAL_ACCENT_KEYS.find((key) => card.classList.contains(key));
  return match ? `image-modal-accent-${match.replace('card-', '')}` : 'image-modal-accent-purple';
}

function clearImageModalAccentClasses(modalImage) {
  IMAGE_MODAL_ACCENT_KEYS.forEach((key) => {
    modalImage.classList.remove(`image-modal-accent-${key.replace('card-', '')}`);
  });
  modalImage.classList.remove('image-modal-accent-pink');
}

function applyImageModalAccent(modalImage, sourceEl) {
  clearImageModalAccentClasses(modalImage);
  modalImage.classList.add(getImageModalAccentClass(sourceEl));
}

// Función para abrir el modal de imagen
function openImageModal(imageSrc, imageAlt, sourceEl) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');

  if (!modal || !modalImage || !modalCaption) return;

  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  applyImageModalAccent(modalImage, sourceEl);

  if (imageSrc.includes('prop.jpg')) {
    const lang = localStorage.getItem('selectedLanguage') || 'ES';
    let translations = window.translations || {};
    if (!translations[lang]) {
      if (typeof getTranslations === 'function') translations = getTranslations();
      else translations = {};
    }
    modalCaption.textContent = translations[lang]?.profile_caption || 'Fernando A. Cancino Cuenca - Desarrollador y Animador Digital';
    if (window.innerWidth <= 991.98) {
      modalImage.classList.add('profile-image-modal');
    }
  } else {
    modalCaption.textContent = imageAlt;
    modalImage.classList.remove('profile-image-modal');
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  if (window.innerWidth <= 991.98) {
    modalImage.style.transform = 'scale(0.92)';
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

  if (window.innerWidth <= 991.98) {
    modalImage.style.transition = 'all 0.2s ease';
    modalImage.style.transform = 'scale(0.92)';
    modalImage.style.opacity = '0';
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      modalImage.style.transform = '';
      modalImage.style.opacity = '';
      modalImage.style.transition = '';
      modalImage.classList.remove('profile-image-modal');
      clearImageModalAccentClasses(modalImage);
    }, 200);
  } else {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    modalImage.classList.remove('profile-image-modal');
    clearImageModalAccentClasses(modalImage);
  }
}

// Función para manejar el clic en "Acerca de mí"
function handleAcercaClick(event) {
  if (window.innerWidth <= 991.98) {
    event.preventDefault();
    toggleCard('acercaModal');
    return;
  }
  event.preventDefault();
  if (typeof window.scrollToSection === 'function') {
    window.scrollToSection('#acercaModal');
  }
}

// Función para manejar clic en iconos móviles
function handleMobileIconClick(cardId) {
  if (typeof window.closeNavbarMenu === 'function') {
    window.closeNavbarMenu();
  }

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

  toggleCard(cardId);
}

// Inicializar modales
function initModals() {
  const imageModal = document.getElementById('imageModal');
  const modalCaption = document.getElementById('modalCaption');

  if (imageModal) {
    imageModal.addEventListener('click', function (e) {
      if (e.target === this || e.target.classList.contains('image-modal-content')) {
        closeImageModal();
      }
    });
  }

  if (modalCaption) {
    modalCaption.addEventListener('click', function (e) {
      if (e.target === this) {
        closeImageModal();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeImageModal();
    }
  });
}

window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
window.handleAcercaClick = handleAcercaClick;
window.handleMobileIconClick = handleMobileIconClick;
window.initModals = initModals;
