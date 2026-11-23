const params = new URLSearchParams(window.location.search);
const dados = [
  ['Nome', params.get('first-name')],
  ['Sobrenome', params.get('last-name')],
  ['E-mail', params.get('email')],
  ['Telefone', params.get('phone')],
  ['Empresa / Organização', params.get('organization')],
  ['Nível escolhido', params.get('membership')],
  ['Data do envio', params.get('timestamp')],
];

const results = document.getElementById('results');
if (results) {
  results.innerHTML = dados.map(([label, valor]) =>
    `<p><strong>${label}:</strong> ${valor || 'Não informado'}</p>`
  ).join('');
}


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