const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
const parche = lienzo.getContext('2d');

/*
 * fillrect(x, y, width, height)
 * strokeRect(x, y, width, height)
 * arc(x, y, radio, ini, fin, sentidohorario)
 */


let posX = -600;  // Posición inicial fuera de la pantalla a la izquierda
let scale = 1;    // Escala inicial
let direction = 1;  // Dirección inicial (1 para mover a la derecha)

function dibujarCalabaza() {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);  // Limpiar el lienzo antes de cada frame

    ctx.save();  // Guardar el estado del lienzo
    ctx.translate(posX, 0);  // Mover la calabaza horizontalmente
    ctx.scale(scale, scale);  // Aplicar el zoom
    ctx.translate(-300, 0); // Ajustar posición de la calabaza

   //Código de la calabaza

//Declaración de borde y sombra para los óvalos

ctx.strokeStyle = 'black'; //Aqui se da el color al borde de los óvalos
ctx.lineWidth = 4; //Aqui declaró el grosor del borde
ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; //Aqui le doy color a la sombra
ctx.shadowBlur = 9; //Aqui declaró el nivel de desenfoque de la sombra

//Sangre
//Degradado
let sangregrd = ctx.createRadialGradient(205, 200, 0, 290, 180, 400); 
sangregrd.addColorStop(0, 'red');
sangregrd.addColorStop(1, 'black');

ctx.fillStyle = sangregrd;
ctx.beginPath();
ctx.ellipse(305, 400, 400, 100, 0, 0, Math.PI * 2, true);
ctx.fill();


//Sombrero
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(305, 50, 250, 55, 0, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno

//Cara 1 parte trasera ovalo pequeño 1
ctx.fillStyle = 'rgb(255, 94, 0)';
ctx.beginPath();
ctx.ellipse(195, 190, 80, 145, 0, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno

//Cara 2 parte trasera ovalo pequeño 2
ctx.fillStyle = 'rgb(255, 94, 0)';
ctx.beginPath();
ctx.ellipse(405, 190, 80, 145, 0, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); // Sirve para para dibujar el contorno

//Cara 1 parte trasera ovalo pequeño 1 fondo
ctx.fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(195, 190, 76, 135, 0, 0, Math.PI * 2, true);
ctx.fill();


//Cara 2 parte trasera ovalo pequeño 2 fondo
ctx.fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(405, 190, 76, 135, 0, 0, Math.PI * 2, true);
ctx.fill();

//Cara 3 parte frontera ovalo grande 1 
ctx.fillStyle = 'rgb(255, 94, 0)';
ctx.beginPath();
ctx.ellipse(245, 190, 90, 175, 0, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno

//Cara 4 parte frontera ovalo grande 2
ctx.fillStyle = 'rgb(255, 94, 0)';
ctx.beginPath();
ctx.ellipse(355, 190, 90, 175, 0, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno

//Cara 5 parte frontera ovalo grande 2
ctx.fillStyle = 'rgb(255, 94, 0)';
ctx.beginPath();
ctx.ellipse(300, 190, 90, 175, 0, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno


//Aqui omiti declaraciones de sombra para que no apliquen al parche

parche.shadowBlur = 0; //Sirve para eliminar la sombra
parche.shadowColor = 'transparent'; //Sirve para elimine el color de la sombra

//Parche de calabaza
parche.fillStyle = 'rgb(255, 94, 0)';
parche.fillRect( 230, 25, 150, 330);

//Parche2 de calabaza
parche.fillStyle = 'rgb(255, 94, 0)';
parche.fillRect( 200, 45, 203, 290);


//Cara 5 parte frontera ovalo grande 2 fondo
ctx.fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(300, 190, 87, 168, 0, 0, Math.PI * 2, true);
ctx.fill();

//Cara 3 parte frontera ovalo grande 1 fondo
ctx.fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(245, 190, 87, 165, 0, 0, Math.PI * 2, true);
ctx.fill();


//Cara 4 parte frontera ovalo grande 2 fondo
ctx.fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(355, 190, 87, 165, 0, 0, Math.PI * 2, true);
ctx.fill();

//Lineas de calabaza izquierda
ctx.beginPath();
ctx.moveTo(276,22);
ctx.bezierCurveTo(190, 100, 200, 300, 273, 360);
ctx.stroke();

//Lineas de calabaza derecha
ctx.beginPath();
ctx.moveTo(328,22);
ctx.bezierCurveTo(430, 100, 400, 300, 330, 359);
ctx.stroke();

//Parche de lineas
parche.fillStyle = 'rgb(194, 74, 5)';
parche.fillRect( 190, 60, 210, 229);

//Ojo izquierdo
//constante de degradado
let gradientIzquierdo = ctx.createLinearGradient(0, 5, 0, 85); 
gradientIzquierdo.addColorStop(0, 'white');
gradientIzquierdo.addColorStop(1, 'black');

ctx.fillStyle = gradientIzquierdo;
ctx.beginPath();
ctx.ellipse(235, 110, 35, 45, 3.1, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno

//Ojo derecho
//constante de degradado
let gradientDerecho = ctx.createLinearGradient(0, 5, 0, 80); 
gradientDerecho.addColorStop(0, 'white');
gradientDerecho.addColorStop(1, 'black');

ctx.fillStyle = gradientDerecho;
ctx.beginPath();
ctx.ellipse(355, 110, 35, 45, 3.1, 0, Math.PI * 2, true);
ctx.fill();
ctx.stroke(); //Sirve para para dibujar el contorno

// Luz de ojo izquierdo de la calabaza 
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(240, 100); //1
ctx.lineTo(230, 115); //2
ctx.lineTo(240, 130); //3
ctx.lineTo(250, 115); //4
ctx.closePath();
ctx.fill();

//Lineas de los ojos
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
// Línea desde el punto superior hacia la izquierda
ctx.beginPath();
ctx.moveTo(340, 115); //Derecha horizontal
ctx.lineTo(380, 115); // Izquierda horizontal
ctx.stroke();

// Línea desde el punto superior hacia la derecha
ctx.beginPath();
ctx.moveTo(360, 89);
ctx.lineTo(360, 137); // Ajusta según sea necesario
ctx.stroke();


// Luz de ojo derecho de la calabaza 
ctx.fillStyle = 'white';
ctx.beginPath();
ctx.moveTo(360, 100); //1
ctx.lineTo(350, 115); //2
ctx.lineTo(360, 130); //3
ctx.lineTo(370, 115); //4
ctx.closePath();
ctx.fill();

// Línea desde el punto superior hacia la izquierda
ctx.beginPath();
ctx.moveTo(260, 115); //Derecha horizontal
ctx.lineTo(220, 115); // Izquierda horizontal
ctx.stroke();

// Línea desde el punto superior hacia la derecha
ctx.beginPath();
ctx.moveTo(240, 91);
ctx.lineTo(240, 137); // Ajusta según sea necesario
ctx.stroke();

//Sombra de ojo debajo izquierdo
ctx. fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.arc(215, 160, 32, 0, Math.PI * 2, true);
ctx.fill();

//Sombra de ojo arriba izquierdo
ctx. fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(275, 98, 35, 15, 3.5, 0, Math.PI * 2, true);
ctx.fill();

//Sombra de ojo debajo derecho
ctx. fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.arc(385, 160, 32, 0, Math.PI * 2, true);
ctx.fill();

//Sombra de ojo arriba derecho
ctx. fillStyle = 'rgb(194, 74, 5)';
ctx.beginPath();
ctx.ellipse(325, 98, 35, 15, 9.1, 0, Math.PI * 2, true);
ctx.fill();

//Nariz
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.moveTo(300, 140);
ctx.lineTo(270, 200);
ctx.lineTo(300, 185);
ctx.lineTo(330, 200);
ctx.closePath();
ctx.fill();

//Boca
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.lineTo(170, 200); // Línea hacia la izquierda
ctx.lineTo(180, 240);
ctx.lineTo(195, 230);
ctx.lineTo(210, 280);
ctx.lineTo(240, 280);
ctx.lineTo(300, 320);
ctx.lineTo(360, 280);
ctx.lineTo(390, 280);
ctx.lineTo(410, 230);
ctx.lineTo(420, 240);
ctx.lineTo(430, 200); // Línea hacia la derecha
ctx.lineTo(400, 190);
ctx.lineTo(380, 230);
ctx.lineTo(350, 210);
ctx.lineTo(300, 240);
ctx.lineTo(250, 210);
ctx.lineTo(200, 205);
ctx.lineTo(200, 195);
ctx.closePath();
ctx.fill();

//Diente izquierd0
//Cara 4 parte frontera ovalo grande 2
let dientegr = ctx.createLinearGradient(0, 210, 0, 220); 
dientegr.addColorStop(0, 'white');
dientegr.addColorStop(1, 'red');

ctx.fillStyle = dientegr;
ctx.beginPath();
ctx.lineTo(250, 245);
ctx.lineTo(250, 208);
ctx.lineTo(225, 207);
ctx.closePath();
ctx.fill();

//Diente derecho
let dientegrd = ctx.createLinearGradient(0, 210, 0, 240); 
dientegrd.addColorStop(0, 'white');
dientegrd.addColorStop(1, 'red');

ctx.fillStyle = dientegrd;
ctx.beginPath();
ctx.lineTo(345, 213);
ctx.lineTo(325, 225);
ctx.lineTo(330, 255);
ctx.closePath();
ctx.fill();

    ctx.restore();  // Restaurar el estado del lienzo
}

function animarCalabaza() {
    // Mover la calabaza de izquierda a derecha
    if (posX < lienzo.width / 2 && direction === 1) {
        posX += 5;  // Velocidad de entrada
        if (posX > lienzo.width / 4) {
            scale += 0.009;  // Hacer zoom cuando esté cerca del centro
        }
    } else if (posX >= lienzo.width / 2 && direction === 1) {
        direction = -1;  // Cambiar dirección una vez que alcance el centro
    } else if (posX > -600 && direction === -1) {
        posX += 5;  // Continuar el movimiento hacia la derecha
        scale -= 0.02;  // Disminuir el zoom al salir
    }

    dibujarCalabaza();

    if (posX <= lienzo.width + 600) {
        requestAnimationFrame(animarCalabaza);  // Volver a llamar a la animación hasta que la calabaza salga de la pantalla
    }
}

animarCalabaza();  // Iniciar la animación
