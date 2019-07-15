let array = [3, 9, 91, 92, 93, 23, 45, 56, 1, 39];

array.sort(function(x, y) {
    return y - x;
})
console.log(array);

function enesimo(elements, number) {
    console.log(elements[number-1]);
}

enesimo(array, 2);