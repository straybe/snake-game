class Square {
    constructor (x, y, ctx) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.width = 20;
        this.height = 20;
        this.back = null;// cuadrado trasero
    }

    draw () {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        // Indica llamada recursiva para dibujar cuadrados en caso de tener más por detras del cuadrado actual.
        if (this.hasBack()) {
            this.back.draw();
        }
    }
    /**
     * @returns Si existe un cuadrado detras del actual, retorna verdadero
     */
    hasBack () {
        return this.back !== null;
    }

    // Las siguientes funciones realizan los movimientos necesarios a los cuadros para representar el movimiento
    copy () {
        if (this.hasBack()) {
            this.back.copy();
            this.back.x = this.x;
            this.back.y = this.y;
        }
    }

    right () {
        this.copy();
        this.x += 20;
    }

    left () {
        this.copy();
        this.x -= 20;
    }

    up () {
        this.copy();
        this.y -= 20;
    }

    down () {
        this.copy();
        this.y += 20;
    }
}

export default Square;