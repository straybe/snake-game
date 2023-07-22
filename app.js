import Snake from "./Snake.js";

(function () {
    const canvas = document.getElementById('canvasSnake');
    const ctx = canvas.getContext('2d');
    let snake = new Snake(ctx);
  })();  