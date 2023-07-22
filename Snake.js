import Square from "./Square.js";

class Snake {
    constructor (ctx) {
        this.ctx = ctx;
        this.head = new Square(100, 10); // Cuadrado de la cabeza
        this.draw();
        this.direction = 'right';
    }

    draw () {
        this.ctx.fillRect(20, 20, 20, 20);
    }
}

export default Snake;