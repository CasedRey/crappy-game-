import {addAnimation, startAnimation} from './animation';
import {dude} from './simpleSprite';
import {canvas} from './canvas';

export let player = {
    x : 200,
    y: 150,    
    frame : 2,
    counter : 0,
    frameRate : 1000/16,
    moving : false,
    update (elapsed : number) { 
      if (this.moving) {
        // how much time has gone by...
        this.counter += elapsed;
        if (this.counter > this.frameRate) {
          this.frame += 1;
          this.counter = 0;
        }
      } else {
        this.frame = 0;
      }
    },
    draw () {      
      dude.draw(this.x,this.y,this.frame );
    }    
  }
// Sample code -- change code below;
window.addEventListener(
  'keydown',
  function (e) {
    // Check for the key...
    if (e.key=='ArrowRight') {
      player.x += 5;
    }
    if (e.key=='ArrowLeft') {
      player.x -= 5;
    }
    if (e.key=='ArrowUp') {
      player.y -= 5;
    }
    if (e.key=='ArrowDown') {
      player.y += 5;
    }
    if (e.key=='j') {
      player.y -= 20;
    }
//    player.frame += 1;
    player.moving = true;
  }
)
window.addEventListener(
  'keyup',
  function () {
    player.moving = false;
  }
)


