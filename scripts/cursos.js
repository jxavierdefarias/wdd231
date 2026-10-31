const menuBtn = document.querySelector('#menu');
const nav = document.querySelector('#nav');
menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.textContent = nav.classList.contains('open') ? '✕' : '☰';
});

const cursos = [
  { subject: 'WDD', number: 130, credits: 2, completed: true },
  { subject: 'WDD', number: 131, credits: 2, completed: true },
  { subject: 'WDD', number: 231, credits: 2, completed: true },
];

const container = document.querySelector('#cursos');
const creditosTotal = document.querySelector('#creditos');

function exibir(lista) {
  container.innerHTML = '';
  lista.forEach(curso => {
    const div = document.createElement('div');
    div.textContent = `${curso.subject} ${curso.number}`;
    container.appendChild(div);
  });
  const total = lista.reduce((s, c) => s + c.credits, 0);
  creditosTotal.textContent = `O total de créditos para os cursos listados acima é ${total}`;
}

document.querySelector('#todos').addEventListener('click', () => exibir(cursos));
document.querySelector('#cse').addEventListener('click', () => exibir(cursos.filter(c => c.subject === 'CSE')));
document.querySelector('#wdd').addEventListener('click', () => exibir(cursos.filter(c => c.subject === 'WDD')));

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Última Modificação: ${new Date(document.lastModified).toLocaleString('pt-BR')}`;

exibir(cursos);
