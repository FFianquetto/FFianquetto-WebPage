// ===== COMPONENTE BOTÓN CERRAR =====

/**
 * Genera el HTML del botón cerrar circular reutilizable.
 * @param {Object} options
 * @param {string} options.onclick - Código JS al hacer clic (ej. closeImageModal())
 * @param {'viewport'|'card'} [options.variant='card'] - viewport: modal imagen; card: proyectos/laterales
 * @param {string} [options.extraClass=''] - Clases extra (ej. btn-close-circle--mobile-only)
 * @param {string} [options.ariaLabel='Cerrar']
 * @returns {string}
 */
function getCloseButtonHTML(options) {
  const {
    onclick,
    variant = 'card',
    extraClass = '',
    ariaLabel = 'Cerrar',
  } = options;

  const classes = ['btn-close-circle', `btn-close-circle--${variant}`, extraClass]
    .filter(Boolean)
    .join(' ');

  return `<button type="button" class="${classes}" onclick="event.stopPropagation(); ${onclick}" aria-label="${ariaLabel}">&times;</button>`;
}

/** Atajo para cards de proyecto */
function getProjectCloseButton(cardId) {
  return getCloseButtonHTML({
    onclick: `closeProjectCard('${cardId}')`,
    variant: 'card',
  });
}

/** Atajo para cards laterales en móvil */
function getSideCardCloseButton(modalId) {
  return getCloseButtonHTML({
    onclick: `closeSideCard('${modalId}')`,
    variant: 'card',
    extraClass: 'btn-close-circle--mobile-only',
  });
}

/** Atajo para modal de imagen */
function getImageModalCloseButton() {
  return getCloseButtonHTML({
    onclick: 'closeImageModal()',
    variant: 'viewport',
  });
}

window.getCloseButtonHTML = getCloseButtonHTML;
window.getProjectCloseButton = getProjectCloseButton;
window.getSideCardCloseButton = getSideCardCloseButton;
window.getImageModalCloseButton = getImageModalCloseButton;
