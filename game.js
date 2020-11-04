const canvas = document.getElementById('canvas');
import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from './snake.js';

import { update as updateFood, draw as drawFood } from './food.js';

import { outsideGrid } from './grid.js';

/* 
Create a continous loop - this is needed as this will control the location of the snake
on the page - the more times it is rendered the more smooth the transaction will be
*/

let lastRenderTime = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    return alert('Game Over!');
  }
  window.requestAnimationFrame(main);
  /* Get the result of how fast the page rendered in seconds instead of milliseconds */
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  /* 1 / 2 = 0.5 */
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  /* 
  For the game to forget the previous position once all segments are passed 
  we need to set the HTML to nothing
  */
  canvas.innerHTML = '';
  drawSnake(canvas);
  drawFood(canvas);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
