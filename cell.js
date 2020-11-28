function Cell(j, i) {

    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.checkNeighbors = function () {
        let neighbors = [];
        let left, right, top, bottom;
        top = grid[this.j][this.i - 1];
        if (this.j !== rows-1) {
            right = grid[this.j+1][this.i];
        }
        bottom = grid[this.j][this.i + 1];
        if (this.j) {
            left = grid[this.j - 1][this.i];
        }
       

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    };
    this.highlight = function () {
        let x = this.i * w;
        let y = this.j * w;
        noStroke();
        // fill(255, 0, 0, 140);
        fill(10, 90,255, 150);
        rect(x, y, w, w);
    };

    this.show = function () {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }

        if (this.visited) {
            noStroke();
            // noFill()
            fill(10, 140, 255, 30);
            // fill(30);
            rect(x, y, w, w);
        }
    };
}