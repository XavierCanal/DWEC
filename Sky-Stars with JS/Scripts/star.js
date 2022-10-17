import {Stars} from './all_stars.js';


/**
 * https://ptsjs.org/guide/op-0400
 * https://codepen.io/2toria/pen/nddZKE
 * https://www.reddit.com/r/processing/comments/ovupzw/how_to_fill_in_canvas_with_circles_without/
 * https://stackoverflow.com/questions/8331243/circle-collision-in-javascript
 */
export class Star {
  constructor(canvas, ctx) {
    this.ctx = ctx;
    this.canvas = canvas;
    
    this.xPos = Math.round(random(2, canvas.width - 2));
    this.yPos = Math.round(random(2, canvas.height - 2));
    this.alpha = Math.round(random(0.5, 1));
    this.radi = Math.round(random(1, 4));
    

  }
}





function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}