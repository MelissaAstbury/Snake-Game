import { getInputDirection } from './input.js';

export const SNAKE_SPEED = 3;
/* 
Now declare where the snake will start 
*/
const snakeBody = [{ x: 11, y: 11 }];
/*  
This function needs to move the snake around. However, we need to make sure that when 
the snake move to the left or right, that only the first one is moved and the rest 
follow the pattern
*/
export function update() {
  const inputDirection = getInputDirection();

  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

/* 
This function will draw the snake out on the 'segment' of the grid - to do this 
the div of the 'canvas' must be passed 
*/
export function draw(canvas) {
  snakeBody.forEach((segment) => {
    /* Create the snake itself */
    const snakeElement = document.createElement('div');
    /* The segment is each piece of the snake */
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    /* Now place the snake on the 'canvas' */
    canvas.appendChild(snakeElement);
  });
}
