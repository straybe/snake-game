import Square from "./Square.js";

class Snake {
    constructor (ctx) {
        this.ctx = ctx;
        this.head = new Square(100, 10, ctx); // Cuadrado de la cabeza
        this.draw();
        this.direction = 'right';
    }

    draw () {
        this.head.draw();
    }

    move () {
        if (this.direction === 'right') return this.head.right();
        if (this.direction === 'left') return this.head.left();
        if (this.direction === 'up') return this.head.up();
        if (this.direction === 'down') return this.head.down();
    }
}

export default Snake;