import Food from "./Food.js";
import Snake from "./Snake.js";

function getRPos (init, end) {
  return Math.floor(Math.random() * end) + init;
}

(function () {
    const canvas = document.getElementById('canvasSnake');
    const ctx = canvas.getContext('2d');
    let snake = new Snake(ctx);
    const food = new Food(getRPos(0, 500), getRPos(0, 500), ctx);
    food.draw();
  })();  