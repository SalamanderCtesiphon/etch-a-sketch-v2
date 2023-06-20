const submit = document.querySelector('.shadow__btn');
const form = document.getElementById('form');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  let resolution = document.getElementById('resolution').value;
  createGrid(resolution);
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
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'blue';
    });
  });

};





