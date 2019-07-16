const fs = require('fs');

/*
EJEMPLO SINCRONO
=====================================
const currentDate = new Date();
console.log(1);
fs.readFileSync('./20190201_Cumple_Estandar.txt');
console.log('Estandar: ' + (new Date() - currentDate) + 'ms');
console.log(2);
fs.readFileSync('./20190201_Cumple_Premium.txt');
console.log('Premium: ' + (new Date() - currentDate) + 'ms');
console.log(3);
fs.readFileSync('./20190201_Cumple_VIP.txt');
console.log('VIP: ' + (new Date() - currentDate) + 'ms');
*/

let currentDate;

currentDate = new Date();
fs.readFile('./20190201_Cumple_Premium.txt', (err, contenido) => {
    if (err) {
        console.error(err);
        return;
    }
//    console.log(contenido.toString());
    console.log('Premium: ' + (new Date() - currentDate) + 'ms');
});

currentDate = new Date();
fs.readFile('./20190201_Cumple_VIP.txt', (err, contenido) => {
    if (err) {
        console.error(err);
        return;
    }
//    console.log(contenido.toString());
    console.log('VIP: ' + (new Date() - currentDate) + 'ms');
});

currentDate = new Date();
fs.readFile('./20190201_Cumple_Estandar.txt', (err, contenido) => {
    if (err) {
        console.error(err);
        return;
    }
//    console.log(contenido.toString());
    console.log('Estandar: ' + (new Date() - currentDate) + 'ms');
});

