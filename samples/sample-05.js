function getNumeroLoteria(...nums) {
return nums.join(', ');
}
let num = getNumeroLoteria(1, 5, 12, 22, 35, 37);
console.log(num);