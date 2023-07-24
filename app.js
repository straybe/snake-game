import Food from "./Food.js";
import Snake from "./Snake.js";

function getRPos (init, end) {
  return Math.floor(Math.random() * end) + init;
}

function showGameOverModal () {
  const gameOverModal = document.getElementById('gameOverModal');
  gameOverModal.style.display = 'block';
  const aceptButton = document.getElementById('aceptButton');
  aceptButton.addEventListener('click', function () {
    location.reload();
  })
}

(function () {
    const canvas = document.getElementById('canvasSnake');
    const ctx = canvas.getContext('2d');
    let snake = new Snake(ctx);
    const food = new Food(getRPos(0, 500), getRPos(0, 500), ctx);
    const block_key = ['ArrowUp',
                       'ArrowDown',
                       'ArrowLeft',
                       'ArrowRight',
                       's',
                       'd',
                       'w',
                       'a'];

    window.addEventListener('keydown', function (event) {
      // Ignora los eventos del navegador
      if (block_key.includes(event.key)) {
        event.preventDefault();
      } 

      if (event.key === 'ArrowUp' || event.key === 'w') return snake.setDirection('up');
      if (event.key === 'ArrowDown' || event.key === 's') return snake.setDirection('down');
      if (event.key === 'ArrowRight' || event.key === 'd') return snake.setDirection('right');
      if (event.key === 'ArrowLeft' || event.key === 'a') return snake.setDirection('left');
    })

    // funcion para la actualizacion de la pantalla 
    const animation = setInterval(function(){
      snake.move();
      ctx.clearRect(0, 0, canvas.width, canvas.height); // borrado del canvas
      snake.draw();
      if (snake.dead()) {
        showGameOverModal();
        window.clearInterval(animation);
      }
    }, 1000/5);

    food.draw();
  })();  