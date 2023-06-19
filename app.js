

const createGrid = function() {
  let n = 10;
  let res = n * n;
  const container = document.querySelector('.container');
  for(let i = 0; i < res; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
    
  };
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
};

createGrid();


