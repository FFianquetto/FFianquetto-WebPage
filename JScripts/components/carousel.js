// ===== CARRUSEL DE PROYECTOS =====
// Lista de proyectos para el carrusel
const projectCards = [
  { id: 'zomboyCard', nameKey: 'zomboy_title', img: 'imagenesP/ZomboyWeb.png' },
  { id: 'festivalDestacadoCard', nameKey: 'festivalDestacado_title', img: 'imagenesP/CadoWeb.png' },
  { id: 'appSumappCard', nameKey: 'appSumapp_title', img: 'imagenesP/sumApp.png' },
  { id: 'flegCard', nameKey: 'fleg_title', img: 'imagenesP/Fleg.png' },
  { id: 'inffutCard', nameKey: 'inffut_title', img: 'imagenesP/Inffut.png' },
  { id: 'ec2Card', nameKey: 'ec2_title', img: 'imagenesP/Amazon.png' },
  { id: 'cocinaCard', nameKey: 'cocina_title', img: 'imagenesP/CocinaEnCorto.png' },
  { id: 'happySkinAICard', nameKey: 'happySkinAI_title', img: 'imagenesP/happySkinAI.png' },
  { id: 'bimboSISCard', nameKey: 'bimboSIS_title', img: 'imagenesP/bimboSIS.png' },
  { id: 'cadoCard', nameKey: 'cado_title', img: 'imagenesP/Mongo.png' },
  { id: 'hotelCard', nameKey: 'hotel_title', img: 'imagenesP/HotelBd.png' },
  { id: 'nominasCard', nameKey: 'nominas_title', img: 'imagenesP/Cassandra.png' },
  { id: 'bolosCard', nameKey: 'bolos_title', img: 'imagenesP/Pinball.png' },
  { id: 'escapeCard', nameKey: 'escape_title', img: 'imagenesP/EscapeGame.jpg' },
  { id: 'candyCard', nameKey: 'candy_title', img: 'imagenesP/CC.png' },
  { id: 'snakeCard', nameKey: 'snake_title', img: 'imagenesP/Snake.png' },
  { id: 'stealCard', nameKey: 'steal_title', img: 'imagenesP/Steal.png' }
];

// Renderiza 3 tarjetas en desktop, 1 en mobile
function renderMultiCarousel(centerIndex = 0) {
  const strip = document.getElementById('multiCarouselStrip');
  if (!strip) return;
  
  strip.innerHTML = '';
  const total = projectCards.length;
  const isMobile = window.innerWidth <= 600;
  
  // Obtener idioma actual
  const lang = localStorage.getItem('selectedLanguage') || 'ES';
  const translations = window.translations || {};
  
  let idxs;
  if (isMobile) {
    idxs = [centerIndex];
  } else {
    idxs = [
      (centerIndex - 1 + total) % total,
      centerIndex,
      (centerIndex + 1) % total
    ];
  }
  idxs.forEach((idx, i) => {
    const card = projectCards[idx];
    let classes = 'project-card-carousel';
    if ((isMobile && i === 0) || (!isMobile && i === 1)) classes += ' centered';
    const div = document.createElement('div');
    div.className = classes;
    
    // Obtener el título traducido
    const translatedName = translations[lang] && translations[lang][card.nameKey] ? 
      translations[lang][card.nameKey] : card.nameKey;
    
    div.innerHTML = `<img src='${card.img}' alt='${translatedName}'><div class='project-title'>${translatedName}</div>`;
    div.onclick = () => toggleProjectCard(card.id);
    strip.appendChild(div);
  });
}

// Animación de ruleta: recorre proyecto por proyecto mostrando solo 3
function spinMultiCarousel() {
  const spinBtn = document.getElementById('spinMultiCarouselBtn');
  const viewBtn = document.getElementById('viewProjectBtn');
  
  if (!spinBtn) return;
  
  // Desactivar el botón de girar
  spinBtn.disabled = true;
  spinBtn.style.opacity = '0.6';
  spinBtn.style.cursor = 'not-allowed';
  
  if (viewBtn) viewBtn.style.display = 'none';
  let total = projectCards.length;
  let spins = Math.floor(Math.random() * 2) + 3; // 3-4 vueltas (más corto)
  let finalIdx = Math.floor(Math.random() * total);
  let totalSteps = spins * total + finalIdx;
  let step = 0;
  let currentIdx = parseInt(document.getElementById('multiCarouselStrip')?.dataset.selected || '0');
  
  function animateStep() {
    currentIdx = (currentIdx + 1) % total;
    renderMultiCarousel(currentIdx);
    const strip = document.getElementById('multiCarouselStrip');
    if (strip) strip.dataset.selected = currentIdx;
    // Animación de rebote a la card central
    const cards = document.querySelectorAll('.project-card-carousel');
    if (cards[1]) {
      cards[1].classList.add('animating');
      setTimeout(() => cards[1].classList.remove('animating'), 260);
    }
    step++;
    if (step <= totalSteps) {
      let t = step / totalSteps;
      // Velocidad inicial más lenta, pero menos pasos
      let delay = 90 + 260 * Math.pow(t, 2.5);
      setTimeout(animateStep, delay);
    } else {
      setTimeout(() => {
        if (viewBtn) viewBtn.style.display = 'inline-block';
        // Reactivar el botón de girar
        spinBtn.disabled = false;
        spinBtn.style.opacity = '1';
        spinBtn.style.cursor = 'pointer';
      }, 200);
    }
  }
  animateStep();
}

// Inicializar carrusel
function initCarousel() {
  const strip = document.getElementById('multiCarouselStrip');
  const spinBtn = document.getElementById('spinMultiCarouselBtn');
  const viewBtn = document.getElementById('viewProjectBtn');
  
  if (!strip) return;
  
  renderMultiCarousel(0);
  strip.dataset.selected = 0;
  
  if (spinBtn) {
    spinBtn.onclick = spinMultiCarousel;
  }
  
  if (viewBtn) {
    viewBtn.onclick = function () {
      const idx = parseInt(strip.dataset.selected || '0');
      toggleProjectCard(projectCards[idx].id);
    };
  }
  
  window.addEventListener('resize', function () {
    // Re-renderizar para mantener centrado y responsivo
    const idx = parseInt(strip.dataset.selected || '0');
    renderMultiCarousel(idx);
  });
}

// Exportar para uso global
window.renderMultiCarousel = renderMultiCarousel;
window.spinMultiCarousel = spinMultiCarousel;
window.initCarousel = initCarousel;
