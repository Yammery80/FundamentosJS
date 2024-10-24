const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = '24px serif';

// Puntaje y puntaje máximo (recupera del localStorage o inicializa a 0)
let score = 0;
let maxScore = localStorage.getItem('maxScore') ? parseInt(localStorage.getItem('maxScore')) : 0;


const snake = [{

    x:2,
    y:1,
    show: function(){
        ctx.fillText('👩🏻', this.x * 20, this.y * 20);
    }
},
{
    x:1,
    y:1,
    show: function(){
        ctx.fillText('🩴', this.x * 20, this.y * 20);
    }
},
{
    x:0,
    y:1,
    show: function(){
        ctx.fillText('🩴', this.x * 20, this.y * 20);
    }
}
]
//Comida
const food = {
x: 0,
y: 0,
show: function(){
    ctx.fillText('🩴', this.x * 20, this.y * 20);
},
fadeIn: function(){
    this.x = Math.floor(Math.random() * 27);
    this.y = Math.floor(Math.random() * 18) + 1;
    }
}


let x = 2;
let y = 1;
let direction = 1;

//Comer
function eat(){
    if(snake[0].x === food.x && snake[0].y ===food.y){
        food.fadeIn();
        snake.push({...snake[1]});
        score++;

        // Si el puntaje actual supera el máximo, actualizarlo
        if (score > maxScore) {
            maxScore = score;
            localStorage.setItem('maxScore', maxScore);  }// Guardar nuevo puntaje máximo en localStorage
        // Guardar el puntaje actual en localStorage
        localStorage.setItem('lastScore', score);
    }
}

// Verificar si la serpiente se come a sí misma
function checkCollision() {
    for (let i = 1; i < snake.length; i++) {
      if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
        // Mostrar ventana emergente de alerta
        alert('Te has comido a ti misma! El juego se reiniciará.');
  
        // Reiniciar juego pero mantener el puntaje
        resetGame();
      }
    }
  }

  // Función para reiniciar el juego
function resetGame() {
    // Reiniciar la serpiente a su posición inicial
    snake.splice(0, snake.length, 
      { x: 2, y: 1, show: function() { ctx.fillText('👩🏻', this.x * 20, this.y * 20); } },
      { x: 1, y: 1, show: function() { ctx.fillText('🩴', this.x * 20, this.y * 20); } },
      { x: 0, y: 1, show: function() { ctx.fillText('🩴', this.x * 20, this.y * 20); } }
    );
  
    // Reiniciar posición de la cabeza y dirección
    x = 2;
    y = 1;
    direction = 1;
  
    // Recolocar la comida
    food.fadeIn();
    // Reiniciar el puntaje actual (pero no el máximo)
    score = 0;
  }

//Funcion siguiente movimiento
function nextMove(x, y){
    for(let i = snake.length -1; i > 0; i--){
        snake[i].x = snake[i-1].x;
        snake[i].y = snake[i-1].y;
    }
    snake[0].x =x;
    snake[0].y =y;
}

food.fadeIn();
//Indicadores de direcciones
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
   nextMove(x, y);
   food.show();
   snake.forEach(s => s.show());
   eat();
   checkCollision();  // Verificar si la serpiente se come a sí misma
   //Mostrar puntaje
    ctx.font = '20px serif';
    ctx.fillText(`Puntaje: ${score}`, 10, 30);
    // Mostrar puntaje máximo
    ctx.fillText(`Puntaje Máximo: ${maxScore}`, 10, 60);

    if(direction === 1)x++;
    else if(direction ===2)y++;
    else if(direction ===3)x--;
    else y--;

    //Validaciones de limite
    if(x > 29) x =0;
    else if(x < 0) x = 29;
    if(y > 20) y =1;
    else if(y<1) y = 20;
}, 150);

document.querySelector('body')
    .addEventListener('keydown', e => {

    if(e.key === 'ArrowRight') direction = 1;
    else if(e.key === 'ArrowDown') direction=2;
    else if(e.key === 'ArrowLeft') direction=3;
    else if(e.key === 'ArrowUp') direction=4;
    else direction =4;

});

