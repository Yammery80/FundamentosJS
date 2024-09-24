//apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {

    const phrase = Math.floor(Math.random() * 7)
    switch(phrase){
        case 0:
            message.innerText ="El éxito no es definitivo"
            break;
        case 1:
            message.innerText =" Si crees que puedes, ya estás a medio camino"
            break;
        case 2:
            message.innerText ="El mismo fracaso que derrota a los perdedores, inspira a los ganadores"
            break;
        case 3:
            message.innerText ="No fallé la prueba, solo descubrí 100 maneras de hacerlo mal"
            break;
        case 4:
            message.innerText ="Hay dos tipos de personas que te dirán que no puedes hacer algo"
            break;
        case 5:
            message.innerText ="La vida se trata de tener un impacto, no un ingreso"
            break;
        case 6:
            message.innerText ="Mucha gente tiene ideas"
            break;
        default:
            message.innerText ="Adiós"
    
    }

}

ball.addEventListener('click', eightBall);