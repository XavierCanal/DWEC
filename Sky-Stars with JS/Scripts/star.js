
export class Star {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.xPos = random(2, canvas.width - 2);
    this.yPos = random(2, canvas.height - 2);
    this.alpha = random(0.5, 1);
    this.size = random(1, 2);

    //Add stars
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(this.xPos, this.yPos, this.size, this.size);
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);

    this._fill = 'red';
    this._stroke = 'black';
    this._strokeWidth = 4;
    this._speed = 3;
  }

  isOverlapping(bubblesArr) {
    while (true) {
      var hit = 0;
      for (var i = 0; i < bubblesArr.length; i++) {
        var circle = bubblesArr[i];
        var dx = this._x - circle._x;
        var dy = this._y - circle._y;
        var rr = this._radius + circle._radius;
        if (dx * dx + dy * dy < rr * rr) {
          hit++;
        }
      }
      if (hit == 0) {
        break; // didn't overlap
      }
      this._x = Math.round(Math.random() * this.stage.getWidth());
      this._y = Math.round(Math.random() * this.stage.getHeight());
    }

  }
}

function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}