// Timestamp
const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = new Date().toLocaleString('pt-BR');
}

// Abre os modais
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) modal.showModal();
  });
});

// Fecha os modais
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('dialog').close();
  });
});

// Menu mobile
const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');
if (menuButton && menuItems) {
  menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('open');
  });
}

// Modo escuro
const darkBtn = document.getElementById('darkBtn');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

// Ano e última modificação
const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastSpan = document.getElementById('lastModified');
if (lastSpan) lastSpan.textContent = document.lastModified;
