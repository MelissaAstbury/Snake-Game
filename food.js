import { onSnake, expandSnake } from './snake.js';
import { randomGridPosition } from './grid.js';

let food = getRandomFoodPosition();
/* Now we need to declare how much the snake grows once eaten food */
const EXPANSION_RATE = 1;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
}

export function draw(canvas) {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  canvas.appendChild(foodElement);
}

/* Now we need to randomly generate the food position - this can not be on the snake */
function getRandomFoodPosition() {
  let newFoodPosition;
  /* This while loop will carry on looping until it is not on the snake */
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
