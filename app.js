

const createGrid = function() {
  let n = 10;
  let res = n * n;
  const container = document.querySelector('.container');
  for(let i = 0; i < res; i++) {
    const sqrs = document.createElement('div');
    sqrs.setAttribute('class', 'squares');
    container.appendChild(sqrs);
    
  };
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;

};

createGrid();


