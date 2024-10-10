const tareadDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');

const addTarea = () => {
    const tarea = inputTarea.value;
    //Crear objetos insertarlo en div
    tareadDiv.appendChild(creaObjeto(tarea));
    inputTarea.value = ''
}

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    papa.remove();
}
const changeColor = e => {
    const myDiv = e.target;
    if(myDiv.classList.contains('red')){
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
    } else if(myDiv.classList.contains('yellow')){
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green');
    }
}
const creaObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = tarea;
    p.classList.add('task-text'); // Se añade una clase específica al texto para poder cambiar su tamaño de letra solamente
    const button = document.createElement('button');
    button.innerText = 'Eliminar';
    button.addEventListener('click', eliminaObjeto);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add('red');
    div.addEventListener('click', changeColor);
    return div;
}

myForm.addEventListener('submit', e =>{
    e.preventDefault();
    addTarea();
});
