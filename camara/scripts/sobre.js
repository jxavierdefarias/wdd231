import { locais } from '../dados/locais.mjs';

// --- MENU ---
const menuButton = document.querySelector('#menuButton');
const menuItems = document.querySelector('#menuItems');
if (menuButton && menuItems) {
  menuButton.addEventListener('click', () => menuItems.classList.toggle('open'));
}

// --- RODAPÉ ---
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
const lastEl = document.querySelector('#lastModified');
if (lastEl) lastEl.textContent = document.lastModified;

// --- MENSAGEM DE VISITA COM localStorage ---
const msgEl = document.querySelector('#mensagem-visita');
const agora = Date.now();
const ultimaVisita = Number(localStorage.getItem('ultimaVisitaSobre'));

if (!ultimaVisita) {
  msgEl.textContent = 'Boas-vindas! Entre em contato conosco caso tenha alguma dúvida.';
} else {
  const diffMs = agora - ultimaVisita;
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffMs < 1000 * 60 * 60 * 24) {
    msgEl.textContent = 'Já voltou? Que legal!';
  } else if (dias === 1) {
    msgEl.textContent = 'Seu último acesso foi há 1 dia.';
  } else {
    msgEl.textContent = `Seu último acesso foi há ${dias} dias.`;
  }
}
localStorage.setItem('ultimaVisitaSobre', agora);

// --- CRIAR 8 CARDS ---
const galeria = document.querySelector('#galeria');
if (galeria) {
  galeria.innerHTML = locais.map((local, index) => `
    <article class="card card-${index + 1}">
      <h2>${local.nome}</h2>
      <figure>
        <img src="${local.imagem}" alt="${local.alt}" width="300" height="200" loading="lazy">
      </figure>
      <address>${local.endereco}</address>
      <p>${local.descricao}</p>
      <button class="saiba-mais" data-index="${index}">Saiba mais</button>
    </article>
  `).join('');

  // Botão Saiba mais -> Modal
  document.querySelectorAll('.saiba-mais').forEach(btn => {
    btn.addEventListener('click', () => {
      const local = locais[Number(btn.dataset.index)];
      const modal = document.querySelector('#modal-local');
      document.querySelector('#modal-conteudo').innerHTML = `
        <h2>${local.nome}</h2>
        <img src="${local.imagem}" alt="${local.alt}" width="300" height="200">
        <address>${local.endereco}</address>
        <p>${local.descricao}</p>
        <p><strong>Quer fazer negócios aqui?</strong> Fale com a Câmara e conheça empresas da região.</p>
        <a href="associacao.html">Associe-se agora</a>
      `;
      modal.showModal();
    });
  });
}

document.querySelector('.close-modal')?.addEventListener('click', () => {
  document.querySelector('#modal-local').close();
});