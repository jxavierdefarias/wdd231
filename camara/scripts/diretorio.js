// 1. SANDUÍCHE
const menuButton = document.querySelector('#menuButton');
const menuItems = document.querySelector('#menuItems');

menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('open');
  menuButton.textContent = menuItems.classList.contains('open') ? '✕' : '☰';
});

// 2. ANO E MODIFICAÇÃO
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// 3. CARREGAR EMPRESAS - O CAMINHO CERTO
async function loadMembers() {
  const container = document.querySelector('#directory');
  try {
    // Como seu arquivo está em /camara/diretorio.html, o json tem que estar em /camara/dados/membros.json
    const response = await fetch('dados/membros.json');
    if (!response.ok) throw new Error('Arquivo não encontrado: ' + response.status);
    
    const data = await response.json();
    const members = data.members || data;

    container.innerHTML = members.map(m => `
      <div class="member-card">
        <img src="imagens/${m.image}" alt="${m.name}" loading="lazy">
        <h3>${m.name}</h3>
        <p>${m.tagline || ''}</p>
        <p>EMAIL: ${m.email}<br>
        TELEFONE: ${m.phone}<br>
        SITE: <a href="https://${m.website}" target="_blank">${m.website}</a></p>
        <p><strong>Nível: ${m.membership === 3 ? 'Gold 🥇' : m.membership === 2 ? 'Silver 🥈' : 'Membro'}</strong></p>
      </div>
    `).join('');

  } catch (error) {
    console.error(error);
    container.innerHTML = `<p style="color:red; text-align:center;">Erro ao carregar empresas: ${error.message}<br>Verifique se o arquivo data/members.json existe no GitHub.</p>`;
  }
}
loadMembers();

// 4. BOTÕES GRADE / LISTA
document.querySelector('#gridBtn').addEventListener('click', () => {
  document.querySelector('#directory').className = 'grid-view';
  document.querySelector('#gridBtn').classList.add('active');
  document.querySelector('#listBtn').classList.remove('active');
});
document.querySelector('#listBtn').addEventListener('click', () => {
  document.querySelector('#directory').className = 'list-view';
  document.querySelector('#listBtn').classList.add('active');
  document.querySelector('#gridBtn').classList.remove('active');
});

