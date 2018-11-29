export default function Lightning(x, y, length, angle, ctx) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.angle = angle;
    this.ctx = ctx;
    this.paths = [{
        x: this.x,
        y: this.y,
        angle: this.angle,
        length: this.length,
        ctx: this.ctx
    }];

    console.log(this.x, this.y)
    this.draw = function (length) {
        this.ctx.lineTo(0, length);
        this.ctx.moveTo(0, length);
        if (length > 4){
            this.ctx.save();
            this.ctx.rotate(this.angle);
            draw(length*0.67);
            this.ctx.restore();
            this.ctx.save();
        }
        // this.ctx.save();
        // this.ctx.beginPath();
        // this.ctx.translate(this.x, this.y);
        // this.ctx.moveTo(0, 0);
        // this.ctx.rotate(this.angle);
        // this.ctx.lineTo(0, length);
        // this.ctx.strokeStyle = 'yellow';
        // this.ctx.stroke();
        // this.ctx.restore();
        
    }

    this.uthisdate = function () {
        this.draw(this.length);
    }
}