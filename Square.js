class Square {
    constructor (x, y, ctx) {
        this.x = x;
        this.y = y;
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
}

export default Square;