// ===== GESTIÓN DE CARDS =====

// Función para actualizar la clase de la tarjeta de contacto
function updateContactCardClass() {
  const contactCard = document.getElementById('contactoModal');
  if (!contactCard) return;
  
  if (window.innerWidth <= 991.98) {
    contactCard.className = 'card-cell-c';
    contactCard.style.display = 'none';
  } else {
    contactCard.className = 'card-contact';
  }
}

// Función para actualizar la clase de la tarjeta de habilidades
function updateHabilidadesCardClass() {
  const habilidadesCard = document.getElementById('softskillsModal');
  if (!habilidadesCard) return;
  
  if (window.innerWidth <= 991.98) {
    habilidadesCard.className = 'card-cell-h';
    habilidadesCard.style.display = 'none';
  } else {
    habilidadesCard.className = 'card-habilidades';
  }
}

// Función para actualizar la clase de la tarjeta de acerca de mí
function updateAcercaCardClass() {
  const acercaCard = document.getElementById('acercaModal');
  if (!acercaCard) return;
  
  if (window.innerWidth <= 991.98) {
    acercaCard.className = 'card-cell-a';
    acercaCard.style.display = 'none';
  } else {
    acercaCard.className = 'card-acerca';
  }
}

// Función para restaurar las cards laterales en escritorio
function restoreSideCardsForDesktop() {
  const contactCard = document.getElementById('contactoModal');
  const habilidadesCard = document.getElementById('softskillsModal');
  const acercaCard = document.getElementById('acercaModal');

  if (contactCard) {
    contactCard.className = 'card-contact';
    contactCard.style.display = 'block';
  }
  if (habilidadesCard) {
    habilidadesCard.className = 'card-habilidades';
    habilidadesCard.style.display = 'block';
  }
  if (acercaCard) {
    acercaCard.className = 'card-acerca';
    acercaCard.style.display = 'block';
  }
}

// Función para cerrar todas las cards
function closeAllCards() {
  const cards = document.querySelectorAll('.card-project');
  const overlay = document.querySelector('.card-overlay');

  cards.forEach(card => {
    if (card.style.display === 'block') {
      card.classList.add('closing');
      setTimeout(() => {
        card.style.display = 'none';
        card.classList.remove('closing');
      }, 300);
    }
  });

  if (overlay) {
    overlay.style.display = 'none';
  }
}

// Función para mostrar/ocultar cards en móvil
function toggleCard(cardId) {
  // Oculta todas las cards primero
  document.querySelectorAll('.card-contact, .card-habilidades, .card-acerca, .card-cell-c, .card-cell-h, .card-cell-a').forEach(card => {
    card.classList.remove('show');
    card.style.display = 'none';
  });

  // Muestra solo la card correspondiente
  const card = document.getElementById(cardId);
  if (card) {
    card.style.display = 'block';
    card.classList.add('show');
  }

  // Muestra el overlay
  var overlay = document.querySelector('.card-overlay');
  if (overlay) overlay.style.display = 'block';
}

// Función para mostrar la card del proyecto
function toggleProjectCard(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  
  const overlay = document.querySelector('.card-overlay');

  if (window.innerWidth <= 991.98) {
    // En móvil, cerrar todas las cards antes de abrir una nueva
    if (card.style.display === 'none' || card.style.display === '') {
      closeAllCards();
      if (overlay) {
        overlay.style.display = 'block';
      }
      setTimeout(() => {
        card.style.display = 'block';
      }, 50);
    } else {
      closeProjectCard(cardId);
    }
  } else {
    // En PC, solo manejar la card específica
    if (card.style.display === 'none' || card.style.display === '') {
      if (overlay) {
        overlay.style.display = 'block';
      }
      card.style.display = 'block';
    } else {
      closeProjectCard(cardId);
    }
  }
}

// Función para cerrar la card del proyecto
function closeProjectCard(cardId) {
  const card = document.getElementById(cardId);
  const overlay = document.querySelector('.card-overlay');

  if (card) {
    card.classList.add('closing');
    setTimeout(() => {
      card.style.display = 'none';
      card.classList.remove('closing');

      // Solo ocultar el overlay si no hay más cards de proyecto visibles
      if (overlay && window.innerWidth > 991.98) {
        const visibleCards = document.querySelectorAll('.card-project[style*="display: block"]');
        if (visibleCards.length === 0) {
          overlay.style.display = 'none';
        }
      } else if (overlay) {
        overlay.style.display = 'none';
      }
    }, 300);
  }
}

// Función para cerrar cards laterales en móvil
function closeSideCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.classList.remove('show');
    card.style.display = 'none';
  }
  var overlay = document.querySelector('.card-overlay');
  if (overlay) overlay.style.display = 'none';
}

// Inicializar gestión de cards
function initCards() {
  if (window.innerWidth <= 991.98) {
    // En móvil, ocultar las cards laterales
    document.querySelectorAll('.card-cell-c, .card-cell-h, .card-cell-a, .card-contact, .card-habilidades, .card-acerca').forEach(card => {
      card.style.display = 'none';
    });
  } else {
    restoreSideCardsForDesktop();
    // Ocultar las cards móviles en desktop
    document.querySelectorAll('.card-cell-c, .card-cell-h, .card-cell-a').forEach(card => {
      card.style.display = 'none';
    });
  }
  updateContactCardClass();
  updateHabilidadesCardClass();
  updateAcercaCardClass();

  // Overlay click handler
  const overlay = document.querySelector('.card-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (event) {
      // Cierra cualquier card lateral visible
      document.querySelectorAll('.card-contact.show, .card-habilidades.show, .card-acerca.show, .card-cell-c.show, .card-cell-h.show, .card-cell-a.show').forEach(card => {
        card.classList.remove('show');
        card.style.display = 'none';
      });
      this.style.display = 'none';
    });
  }

  // Cerrar cards al presionar ESC
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && window.innerWidth > 991.98) {
      const visibleCards = Array.from(document.querySelectorAll('.card-project[style*="display: block"]'));
      if (visibleCards.length > 0) {
        const lastCard = visibleCards[visibleCards.length - 1];
        closeProjectCard(lastCard.id);
      }
    }
  });

  // Manejar cambios de tamaño de ventana
  window.addEventListener('resize', function () {
    if (window.innerWidth > 991.98) {
      restoreSideCardsForDesktop();
      if (overlay) overlay.style.display = 'none';
    } else {
      document.querySelectorAll('.card-contact, .card-habilidades, .card-acerca').forEach(card => {
        card.style.display = 'none';
      });
      // También oculta las cards móviles
      document.querySelectorAll('.card-cell-c, .card-cell-h, .card-cell-a').forEach(card => {
        card.style.display = 'none';
      });
    }
    updateContactCardClass();
    updateHabilidadesCardClass();
    updateAcercaCardClass();
  });

  // Ocultar las cards en móvil al cargar la página
  if (window.innerWidth <= 991.98) {
    document.querySelectorAll('.card-project').forEach(card => {
      card.style.display = 'none';
    });
  }
}

// Exportar funciones globales
window.closeAllCards = closeAllCards;
window.toggleCard = toggleCard;
window.toggleProjectCard = toggleProjectCard;
window.closeProjectCard = closeProjectCard;
window.closeSideCard = closeSideCard;
window.initCards = initCards;
