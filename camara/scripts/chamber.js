// Menu hambúrguer
const menuButton = document.querySelector('#menuButton');
const menuItems = document.querySelector('#menuItems');
menuButton.addEventListener('click', () => {
  menuItems.classList.toggle('open');
  menuButton.textContent = menuItems.classList.contains('open') ? '✕' : '☰';
});

// Modo escuro
document.querySelector('#darkBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Ano e última modificação
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;

// Empresas destaque - 2 ou 3 aleatórias Gold/Silver do members.json
async function loadSpotlights() {
  try {
    const res = await fetch('data/members.json');
    const data = await res.json();
    const filtered = data.members.filter(m => m.membership === 3 || m.membership === 2);
    const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.querySelector('#spotlights');
    container.innerHTML = shuffled.map(m => `
      <div class="spotlight">
        <img src="images/${m.image}" alt="${m.name}">
        <h4>${m.name}</h4>
        <p>${m.tagline}</p>
        <p>EMAIL: ${m.email}<br>TELEFONE: ${m.phone}<br>SITE: ${m.website}</p>
        <span class="level">${m.membership === 3 ? 'Gold' : 'Silver'}</span>
      </div>
    `).join('');
  } catch (e) { console.log(e); }
}
loadSpotlights();
