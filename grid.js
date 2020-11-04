const GRID_SIZE = 21;
export function randomGridPosition() {
  return {
    /* Without adding 1 to the end it will count '0' as a number */
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

/* Define where the walls start for the game to be over */
export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
