
let cols, rows;
let w = 40;
let grid = [];
let current;
let stack = [];
let isOn = true
function setup() {
    createCanvas(600, 600);
    frameRate(60)
    cols = floor(width / w);
    rows = floor(height / w);

    for (let i = 0; i < rows; i++) {
        grid[i] = []
        for (let j = 0; j < cols; j++) {
            var cell = new Cell(i, j);
            grid[i][j] = cell;
        }
    }

    current = grid[0][0];
}

function draw() {
    // noLoop()
    background(50);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j].show()
        }
    }
    if (isOn) {
        current.visited = true;
        current.highlight();
        let next = current.checkNeighbors();
        if (next) {
            // next.visited = true;
            
            stack.push(current);
            removeWalls(current, next);

            current = next;
        } else if (stack.length > 0) {
            current = stack.pop();
        }
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}

function removeWalls(a, b) {
    let x = a.i - b.i;
    if (x === 1) {
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
    let y = a.j - b.j;
    if (y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}

function keyPressed() {
    isOn = !isOn
}