import {ctx,canvas} from './canvas';
import {player} from './player'
import {triangle} from './badguy';
import {addAnimation, startAnimation} from './animation';

addAnimation(player);
addAnimation(triangle);
startAnimation();
//player.draw();
canvas.style.backgroundColor = '#12121288';