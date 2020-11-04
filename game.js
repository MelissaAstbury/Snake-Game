import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
} from './snake.js';

//create a continous loop - this is needed as this will control the location of the snake on the page - the more times it is rendered the more smooth the transaction will be
let lastRenderTime = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  // Get the result of how fast the page rendered in seconds instead of milliseconds
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  // 1 / 2 = 0.5
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
}

function draw() {
  drawSnake();
}