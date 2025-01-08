const rows = 20;
const cols = 20;
let grid = createGrid();
let intervalId = null;

function createGrid() {
  return Array
    .from({ length: rows })
    .fill(null)
    .map(() => Array
      .from({ length: cols })
      .fill(false)
    );
}

function countAliveNeighbors(row, col) {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const newRow = row + i;
      const newCol = col + j;
      if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
        count += grid[newRow][newCol] ? 1 : 0;
      }
    }
  }
  return count;
}

function* gameOfLifeGenerator() {
  while (true) {
    const nextGrid = createGrid();
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const aliveNeighbors = countAliveNeighbors(row, col);
        if (grid[row][col]) {
          nextGrid[row][col] = aliveNeighbors === 2 || aliveNeighbors === 3;
        } else {
          nextGrid[row][col] = aliveNeighbors === 3;
        }
      }
    }
    grid = nextGrid;
    yield grid;
  }
}

const gameGenerator = gameOfLifeGenerator();

self.onmessage = function(event) {
  if (event.data.type === 'start' && !intervalId) {
    console.log('start');
    grid = event.data.grid; // Initialize grid with data from main thread
    intervalId = setInterval(() => {
      const { value } = gameGenerator.next();
      self.postMessage(value);
    }, 250);
  } else if (event.data === 'stop') {
    clearInterval(intervalId);
    intervalId = null;
  } else if (event.data === 'reset') {
    grid = event.data.grid; // Reset grid with data from main thread
    self.postMessage(grid);
  }
};
