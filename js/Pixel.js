class Pixel {
    constructor(x, y, color, size, isEraser = false) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
        this.isEraser = isEraser; 
        this.allreadyColored = [];
    }

    draw() {
        if (this.isEraser) {
            ctx.clearRect(this.x, this.y, this.size, this.size);
        } else {
            ctx.fillStyle = this.color;
            if (this.allreadyColored.includes({ x: this.x, y: this.y, color: this.color })) {
                ctx.fillStyle = this.color;
            }
            ctx.fillRect(this.x, this.y, this.size, this.size);
            this.allreadyColored.push({ x: this.x, y: this.y, color: this.color });
        }
    }
}