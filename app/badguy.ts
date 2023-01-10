import {ctx, canvas} from './canvas';
// help from hinkle

export let triangle = {
  x : 100,
  y : 100,
  draw () {
    ctx.beginPath();
    ctx.moveTo(this.x-50,this.y-50);
    ctx.lineTo(this.x,this.y);
    ctx.lineTo(this.x+50,this.y);
    ctx.lineTo(this.x-50,this.y);
    ctx.fillStyle = 'red';
    ctx.fill();
  },
  update (ts) {
    this.x += 50 * ts/1000;
    this.y += 50 * ts/1000;    
  }
}