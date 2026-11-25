// AXFstore - JS em Módulo ES
let produtos = [];
let carrinho = JSON.parse(localStorage.getItem('axf-carrinho')) || [];

const listaEl = document.querySelector('#lista-produtos');
const totalEl = document.querySelector('#totalProdutos');
const cartEl = document.querySelector('#cartCount strong');

function atualizarCarrinho() {
  if (cartEl) cartEl.textContent = carrinho.length;
  localStorage.setItem('axf-carrinho', JSON.stringify(carrinho));
}

function renderizar(lista) {
  if (!listaEl) return;
  // Template Literals + map + forEach (métodos de array)
  listaEl.innerHTML = lista.map(p => `
    <article class="card">
      <img src="${p.imagem}" alt="${p.nome}" loading="lazy" width="300" height="200">
      <h3>${p.nome}</h3>
      <p><strong>R$ ${p.preco.toFixed(2).replace('.', ',')}</strong></p>
      <p>Categoria: ${p.categoria}</p>
      <p>Material: ${p.material}</p>
      <button class="ver-detalhes" data-id="${p.id}">Ver Detalhes</button>
      <button class="add-carrinho" data-id="${p.id}">Adicionar</button>
    </article>
  `).join('');

  if (totalEl) totalEl.textContent = `${lista.length} produtos encontrados`;

  // Eventos nos botões
  document.querySelectorAll('.ver-detalhes').forEach(btn => {
    btn.addEventListener('click', () => abrirModal(Number(btn.dataset.id)));
  });
  document.querySelectorAll('.add-carrinho').forEach(btn => {
    btn.addEventListener('click', () => {
      const prod = produtos.find(x => x.id === Number(btn.dataset.id));
      carrinho.push(prod);
      atualizarCarrinho();
      alert(`${prod.nome} adicionado ao carrinho!`);
    });
  });
}

function abrirModal(id) {
  const p = produtos.find(x => x.id === id);
  const modal = document.querySelector('#modal-produto');
  const conteudo = document.querySelector('#modal-conteudo');
  if (!p || !modal) return;
  conteudo.innerHTML = `
    <h3>${p.nome}</h3>
    <img src="${p.imagem}" alt="${p.nome}" width="300" height="200">
    <p><strong>Preço:</strong> R$ ${p.preco.toFixed(2).replace('.', ',')}</p>
    <p><strong>Categoria:</strong> ${p.categoria}</p>
    <p><strong>Material:</strong> ${p.material}</p>
    <p>${p.descricao}</p>
    <p><a href="contato.html">Pedir orçamento em atacado</a></p>
  `;
  modal.showModal();
}

async function carregarProdutos() {
  try {
    const res = await fetch('dados/produtos.json');
    if (!res.ok) throw new Error('Erro ao carregar produtos');
    produtos = await res.json();
    renderizar(produtos);
  } catch (erro) {
    if (totalEl) totalEl.textContent = 'Não foi possível carregar os produtos. Tente novamente.';
    console.error(erro);
  }
}

// Menu hambúrguer
const menuButton = document.querySelector('#menuButton');
const menuItems = document.querySelector('#menuItems');
if (menuButton && menuItems) {
  menuButton.addEventListener('click', () => menuItems.classList.toggle('open'));
}

// Filtros - filter
document.querySelectorAll('.filtro').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.filtro;
    const filtrados = cat === 'Todos' ? produtos : produtos.filter(p => p.categoria === cat);
    renderizar(filtrados);
  });
});

// Fechar modal
document.querySelector('.close-modal')?.addEventListener('click', () => {
  document.querySelector('#modal-produto').close();
});

// Rodapé
const yearEl = document.querySelector('#year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
const lastEl = document.querySelector('#lastModified');
if (lastEl) lastEl.textContent = document.lastModified;

atualizarCarrinho();
carregarProdutos();