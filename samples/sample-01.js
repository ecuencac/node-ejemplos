let snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        let snack = 'Friskies';
        return snack;
    }
    return snack;
}
getFood(false); // con var devuelve undefined

console.log('Resultado:');
console.log(getFood(false));