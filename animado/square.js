const lienzo = document.querySelector('#lienzo');
const ctx = lienzo. getContext('2d');

let x= 40;
let y= 59;
let crece = true;

setInterval(() => {
ctx.clearRect(0,0,600,400);
ctx.fillStyle = `hsl(${y}, 50%, 50%)`;
ctx.fillRect(190, 80, x, y);
if (crece) x++ & y++;
else x-- & y--;
crece = x>300? !crece: crece;
crece = x<1? !crece: crece;
}, 5);