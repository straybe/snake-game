class Food {
    constructor (x, y, ctx) {
        this.x = x;
        this.y = y;
        this.width = 20;
        this.height = 20;
        this.ctx = ctx;
    }

    draw () {
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

export default Food;