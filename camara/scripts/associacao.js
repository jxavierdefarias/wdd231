const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = new Date().toLocaleString('pt-BR');
}

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) modal.showModal();
  });
});

document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('dialog').close();
  });
});

const menuButton = document.getElementById('menuButton');
const menuItems = document.getElementById('menuItems');
if (menuButton && menuItems) {
  menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('open');
  });
}

const darkBtn = document.getElementById('darkBtn');
if (darkBtn) {
  darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
}

const yearSpan = document.getElementById('year');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

const lastSpan = document.getElementById('lastModified');
if (lastSpan) lastSpan.textContent = document.lastModified;

// Compatibilidade: W3 vê o HTML em inglês, auditoria vê em português
const cargo = document.querySelector('input[name="org-title"]');
if (cargo) cargo.setAttribute('autocomplete', 'cargo-na-organizacao');

const org = document.querySelector('input[name="organization"]');
if (org) org.setAttribute('autocomplete', 'organizacao');
