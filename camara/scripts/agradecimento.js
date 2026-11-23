
const params = new URLSearchParams(window.location.search);
const results = document.getElementById('results');

function show(label, key) {
  return `<p><strong>${label}:</strong> ${params.get(key) || 'Não informado'}</p>`;
}

if (results) {
  results.innerHTML =
    show('Nome', 'first-name') +
    show('Sobrenome', 'last-name') +
    show('E-mail', 'email') +
    show('Celular', 'phone') +
    show('Empresa', 'organization') +
    show('Data/Hora', 'timestamp');
}
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;