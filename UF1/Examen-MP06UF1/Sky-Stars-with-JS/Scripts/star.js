export class Star {
  constructor(canvas, ctx,maxradi) {
    this.ctx = ctx;
    this.canvas = canvas;
    
    this.xPos = Math.round(random(2, canvas.width - 2));
    this.yPos = Math.round(random(2, canvas.height - 2));
    this.alpha = Math.round(random(0.5, 1));
    this.radi = Math.round(random(1, maxradi));
    let color = random_color()
    this.opacity = color + Math.random() + ")";
    
    

  }
}
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

function random_color() {
  var x = Math.floor(Math.random() * 256);
  var y = 100+ Math.floor(Math.random() * 256);
  var z = 50+ Math.floor(Math.random() * 256);
  var bgColor = "rgba(" + x + "," + y + "," + z + ",";
  return bgColor;
}