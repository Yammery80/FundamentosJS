// High Order Functions
//Funciones de orden superior
//Funciones que reciben como parámetros otras funciones

const addition = (a, b) => a + b;
const substraction = (a, b) => a-b;

const calculator = (a, b, callback) => {
    const result = callback(a,b);
    console.log(result);
}

calculator (15, 9, addition );
calculator (15, 9, substraction );
calculator (15, 9, (a, b ) => a * b);
calculator (15, 9, (a, b ) => a / b);

const foods  = ['tamales', 'pizza', 'chilaquiles','pozole', 'taco', 'maruchan'];

foods.forEach(food => console.log(food));
foods.forEach(food => console.log(food.length));
foods.forEach(food => console.log(food.includes('a')));

const FOODS = foods.map(food => food.toUpperCase());
console.log(FOODS);

const foodsEmojis = foods.map(food => food + ' 👍');
console.log(foodsEmojis);

const sdoof = foods.map(food => {
    const separated = food.split('');
    const reversed = separated.reverse();
    const joined = reversed.join('');
    return joined;
    //otra forma mas simple de juntar todo
    // food => food.split('').reverse().join('')
})
console.log(sdoof);

//Ejercicio de clase

const nums = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

const cuarter = nums.map(num => num * num);
console.log(cuarter);
const cube = nums.map(num => num * num * num);
//const cube = nums.map(num => Math.pow(num, 3));
console.log(cube);
const half = nums.map(num => num / 2);
console.log(half);

// Arreglos 
function wrappedGifts(gifts){
    return gifts.map(gift =>{
        const tapa = '*'.repeat(gift.length);
        return `${ tapa }\n*${ gift }*\n${ tapa }`;
    })
}

const foodses  = ['tamales', 'pizza', 'chilaquiles','pozole', 'taco', 'maruchan'];
const wrappeds = wrappedGifts(foodses);
wrappeds.forEach(item => console.log(item));

//filter 

const containsZ = foods.filter(food => food.includes('z'));
console.log(foods);
console.log(containsZ);

const endsWithS = foods.filter(food => food.endsWith('s'));
console.log(endsWithS);

//exercise

const numbers = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

const pair = numbers.filter(num => num % 2 !== 0);
const unpair = numbers.filter(num => num % 2 !== 1);
const max = numbers.filter(num => num > 5);
const min = numbers.filter(num => num < 5);
console.log(numbers);
console.log(pair);
console.log(unpair);
console.log(max);
console.log(min);

//forEach, map, filter
const numeros = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];
//reduce
const sumatoria = numeros.reduce((a,b) => a+b);
const factorial = numeros.reduce((a,b) => a*b);
console.log(numeros);
console.log(sumatoria);
console.log(factorial);

//some(or), every(and)
const positivos = numeros.every(n => n > 0);
console.log(positivos);
const negativos = numeros.every(n => n < 0);
console.log(negativos);

const ages = [20, 21, 25, 17, 18];

const algunos_mayores = ages.some(n => n >= 18);
console.log(algunos_mayores);
const algunos_menores = ages.some(n => n < 18);
console.log(algunos_menores);

const fruits = ['🍏','🍐','🥭','🍑','🍒'];

const index_durazno = fruits.findIndex( f => f === '🍐');
console.log(fruits[index_durazno]);