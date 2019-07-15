let colores = ['Negro', 'Blanco'];
let [, blanco] = colores;
//console.log(negro);
// No devuelve nada porque no existe el valor
console.log(blanco);




let colores2 = ['Negro', 'Blanco', 'Gris'];
let [negro, ...otros] = colores2;
console.log(negro);
console.log(otros);