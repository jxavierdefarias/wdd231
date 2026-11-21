const timestampField = document.getElementById('timestamp');
if (timestampField) {
  timestampField.value = new Date().toLocaleString('pt-BR');
}

// Abre os modais
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.modal).showModal();
  });
});

// Fecha os modais
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('dialog').close();
  }); 
}); 
