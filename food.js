import { onSnake, growSnake } from './snake.js';
import { randomGridPosition } from './layout.js';

let food = foodPosition();
/* Now we need to declare how much the snake grows once eaten food */
const growthRate = 1;

export function update() {
  if (onSnake(food)) {
    growSnake(growthRate);
    food = foodPosition();
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
function foodPosition() {
  let newFoodPosition;
  /* This while loop will carry on looping until it is not on the snake */
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}
