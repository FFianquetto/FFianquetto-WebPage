// ===== GESTIÓN DE MODO OSCURO/CLARO =====

// Función para alternar entre modo oscuro y claro
function toggleDarkMode() {
  const lightModeCSS = document.getElementById('light-mode-css');
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  if (!lightModeCSS || !darkModeToggle) return;

  if (lightModeCSS.disabled) {
    lightModeCSS.disabled = false;
    darkModeToggle.textContent = '🌙';
    body.classList.add('light-mode');
    localStorage.setItem('darkMode', 'light');
  } else {
    lightModeCSS.disabled = true;
    darkModeToggle.textContent = '☀️';
    body.classList.remove('light-mode');
    localStorage.setItem('darkMode', 'dark');
  }

  // Asegurar que las cards estén ocultas en móvil después de cambiar el modo
  if (window.innerWidth <= 991.98) {
    document.querySelectorAll('.card-project, .card-contact, .card-habilidades, .card-acerca').forEach(card => {
      card.style.display = 'none';
    });
    const overlay = document.querySelector('.card-overlay');
    if (overlay) overlay.style.display = 'none';
  }
}

// Inicializar modo oscuro/claro
function initDarkMode() {
  const lightModeCSS = document.getElementById('light-mode-css');
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const body = document.body;

  if (!lightModeCSS || !darkModeToggle) return;

  // Verificar si hay una preferencia guardada
  const savedTheme = localStorage.getItem('darkMode');
  if (savedTheme) {
    if (savedTheme === 'light') {
      lightModeCSS.disabled = false;
      darkModeToggle.textContent = '🌙';
      body.classList.add('light-mode');
    } else {
      lightModeCSS.disabled = true;
      darkModeToggle.textContent = '☀️';
      body.classList.remove('light-mode');
    }
  } else {
    // Si no hay preferencia guardada, iniciar en modo oscuro
    lightModeCSS.disabled = true;
    darkModeToggle.textContent = '☀️';
    body.classList.remove('light-mode');
    localStorage.setItem('darkMode', 'dark');
  }
}

// Exportar funciones globales
window.toggleDarkMode = toggleDarkMode;
window.initDarkMode = initDarkMode;
