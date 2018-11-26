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
        this.paths.forEach(function (p){
            p.ctx.save();
            p.ctx.beginPath();
            p.ctx.translate(p.x,p.y);
            p.ctx.moveTo(0, 0);
            p.ctx.rotate(p.angle);
            p.ctx.lineTo(0, length);
            p.ctx.strokeStyle = 'yellow';
            p.ctx.stroke();
            p.ctx.restore();
        })
        
    }

    this.update = function () {
        var lastPath = this.paths[this.paths.length - 1];
        this.paths.push({
            x: lastPath.x + Math.cos(lastPath.angle)*(lastPath.length+1),
            y: lastPath.y - Math.sin(lastPath.angle)*(lastPath.length+1),
            length: lastPath.length + 1,
            angle: lastPath.angle + Math.PI/8,
            ctx: this.ctx
        })
        this.draw(this.length);
    }
}