const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const ball = {
    x : 0,
    y : 0,
    show: function(){
        ctx.fillStyle = `hsl(${x}, 50%, 50%)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
        ctx.fill();
    }
}

let x = 10;
let y = 10;
let right = true;
let down = true;

setInterval(() => {

    ctx.clearRect(0, 0, 600, 400);
    ball.x = x;
    ball.y = y;
    ball.show();


    //Validar right para x
    if(right) x++;
    else x--;
    //Validar down para y
    if(down) y++;
    else y--;
    //Validar x para cambiar right
    right = x > 620?  !right: right;
    right = x < 1? !right: right;
    //Validar y para cambiar down
    down = y > 405?  !down: down;
    down = y < 1? !down: down;
}, 1);