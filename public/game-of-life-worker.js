let rows;
let cols;
let grid = createGrid();
let intervalId = null;

function createGrid() {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => false)
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

        // Rule 1: Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
        if (aliveNeighbors < 2) {
          nextGrid[row][col] = false;
          continue;
        }

        // Rule 2: Any live cell with two or three live neighbours lives on to the next generation.
        if (aliveNeighbors === 2 || aliveNeighbors === 3) {
          nextGrid[row][col] = true;
          continue;
        }

        // Rule 3: Any live cell with more than three live neighbours dies, as if by overpopulation.
        if (aliveNeighbors > 3) {
          nextGrid[row][col] = false;
          continue;
        }

        // Rule 4: Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        if (aliveNeighbors === 3) {
          nextGrid[row][col] = true;
          continue;
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
    const { grid: initialGrid, rows: totalRows, cols: totalCols } = event.data;
    grid = initialGrid;
    rows = totalRows;
    cols = totalCols;
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
  } else if (event.data.type === 'update') {
    grid = event.data.grid; // Update grid with data from main thread
  }
};
