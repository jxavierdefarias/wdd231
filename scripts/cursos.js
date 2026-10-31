const cursos = [
  {
    assunto: 'CSE',
    numero: 110,
    titulo: 'Introduction to Programming',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao: 'This course will introduce students to programming. It will introduce the building blocks of programming languages.',
    tecnologia: ['Python'],
    concluido: false
  },
  {
    assunto: 'WDD',
    numero: 130,
    titulo: 'Web Fundamentals',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao: 'This course introduces students to the World Wide Web and to careers in web site design and development.',
    tecnologia: ['HTML', 'CSS'],
    concluido: true
  },
  {
    assunto: 'CSE',
    numero: 111,
    titulo: 'Programming with Functions',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao: 'CSE 111 students become more organized, efficient, and powerful computer programmers.',
    tecnologia: ['Python'],
    concluido: false
  },
  {
    assunto: 'CSE',
    numero: 210,
    titulo: 'Programming with Classes',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao: 'This course will introduce the notion of classes and objects.',
    tecnologia: ['C#'],
    concluido: false
  },
  {
    assunto: 'WDD',
    numero: 131,
    titulo: 'Dynamic Web Fundamentals',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao: 'This course builds on prior experience in Web Fundamentals and programming.',
    tecnologia: ['HTML', 'CSS', 'JavaScript'],
    concluido: true
  },
  {
    assunto: 'WDD',
    numero: 231,
    titulo: 'Frontend Web Development I',
    creditos: 2,
    certificado: 'Web and Computer Programming',
    descricao: 'This course builds on prior experience with Dynamic Web Fundamentals.',
    tecnologia: ['HTML', 'CSS', 'JavaScript'],
    concluido: true
  }
];

const container = document.querySelector('#cursos');
const creditosTotal = document.querySelector('#creditos');

function exibir(lista) {
  container.innerHTML = '';
  lista.forEach(curso => {
    const div = document.createElement('div');
    div.textContent = `${curso.assunto} ${curso.numero}`;
    // marca se concluido
    div.classList.add(curso.concluido ? 'completo' : 'incompleto');
    container.appendChild(div);
  });
  const total = lista.reduce((s, c) => s + c.creditos, 0);
  creditosTotal.textContent = `O total de créditos para os cursos listados acima é ${total}`;
}

// Filtros - agora usando 'assunto'
document.querySelector('#todos').addEventListener('click', () => exibir(cursos));
document.querySelector('#cse').addEventListener('click', () => exibir(cursos.filter(c => c.assunto === 'CSE')));
document.querySelector('#wdd').addEventListener('click', () => exibir(cursos.filter(c => c.assunto === 'WDD')));

exibir(cursos);


