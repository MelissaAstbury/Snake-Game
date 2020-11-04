import { onSnake, expandSnake } from './snake.js';

let food = { x: 10, y: 1 };
/* Now we need to declare how much the snake grows once eaten food */
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = { x: 20, y: 20 };
  }
}

export function draw(canvas) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  canvas.appendChild(foodElement);
}
