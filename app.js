

const createGrid = function() {
  let n = 10;
  let res = n * n;
  const container = document.querySelector('.container');
  for(let i = 0; i < res; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'divs');
    container.appendChild(div);
    
  };
  container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  const boxes = document.querySelectorAll('.divs')
  boxes.forEach((box) => {
    box.addEventListener('onmouseover', () => {
      box.style.backgroundColor = 'green';
    })
  })
};

createGrid();


