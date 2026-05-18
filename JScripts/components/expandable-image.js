// ===== COMPONENTE IMAGEN AMPLIABLE CON TOOLTIP =====

/**
 * @param {Object} options
 * @param {string} options.src
 * @param {string} options.alt
 * @param {string} [options.imgClass='']
 * @param {string} [options.loading='lazy']
 * @param {number|string} [options.width]
 * @param {number|string} [options.height]
 * @param {string} [options.srcset='']
 * @param {string} [options.sizes='']
 * @param {string} [options.wrapperClass='']
 * @param {string} [options.imgStyle='']
 * @param {string} [options.onClickExtra='']
 * @param {'default'|'profile'} [options.variant='default']
 */
function getExpandableImageHTML(options) {
  const {
    src,
    alt,
    imgClass = '',
    loading = 'lazy',
    width,
    height,
    srcset = '',
    sizes = '',
    wrapperClass = '',
    imgStyle = '',
    onClickExtra = '',
    variant = 'default',
  } = options;

  const wrapperClasses = ['expandable-image', wrapperClass];
  if (variant === 'profile') {
    wrapperClasses.push('expandable-image--profile');
  }

  const imgAttrs = [`src="${src}"`, `alt="${alt}"`, `loading="${loading}"`];
  if (imgClass) imgAttrs.push(`class="${imgClass}"`);
  if (width) imgAttrs.push(`width="${width}"`);
  if (height) imgAttrs.push(`height="${height}"`);
  if (srcset) imgAttrs.push(`srcset="${srcset}"`);
  if (sizes) imgAttrs.push(`sizes="${sizes}"`);
  if (imgStyle) imgAttrs.push(`style="${imgStyle}"`);

  const clickParts = ['openImageModal(this.src, this.alt, this)'];
  if (onClickExtra) clickParts.push(onClickExtra);
  const onclick = `onclick="${clickParts.join('; ')}"`;

  return `<div class="${wrapperClasses.filter(Boolean).join(' ')}">
      <img ${imgAttrs.join(' ')} ${onclick}>
      <div class="expandable-image-tooltip" data-lang="profile_tooltip">Click para ampliar</div>
    </div>`;
}

/** Imagen de proyecto con tooltip y click para ampliar (misma regla en todos los proyectos) */
function getProjectExpandableImageHTML(src, alt) {
  return getExpandableImageHTML({
    src,
    alt,
    imgClass: 'project-img',
    width: 300,
    height: 200,
    srcset: `${src} 600w, ${src} 300w`,
    sizes: '(max-width: 600px) 100vw, 300px',
    wrapperClass: 'expandable-image--project',
  });
}

window.getExpandableImageHTML = getExpandableImageHTML;
window.getProjectExpandableImageHTML = getProjectExpandableImageHTML;
