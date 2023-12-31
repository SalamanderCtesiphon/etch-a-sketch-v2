const currentYear = document.querySelector('.year');
currentYear.textContent = new Date().getFullYear();

const submit = document.querySelector('.shadow__btn');
const form = document.getElementById('form');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  let resolution = document.getElementById('resolution').value;
  if(resolution > 100 || resolution < 2) {
    alert('please enter a number between 2 and 100');
    form.reset();
    return;
  } else {
    createGrid(resolution);
  }

  form.reset();

});

const createGrid = function(n) {
  let res = n * n;
  const container = document.querySelector('.container');
  container.innerHTML = '';

  for(let i = 0; i < res; i++) {
    const sqr = document.createElement('div');
    sqr.setAttribute('class', 'square');
    container.appendChild(sqr); 

  };

  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    let a = 0.1;
    square.addEventListener('mouseover', () => {
      /* const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255); */
      const r = 0;
      const g = 0;
      const b = 0;
      if(a < 1 ) {
        a += 0.1;
      } 
      const color = `rgb(${r}, ${g}, ${b}, ${a})`;
      
      square.style.backgroundColor = color;

    });

  });

};





