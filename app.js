

const createGrid = function() {
  let n = 10;
  let res = n * n;
  const container = document.querySelector('.container');
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

createGrid();


