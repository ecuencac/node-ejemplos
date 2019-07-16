const fs = require('fs');

/*
SINCRONO

fs.writeFileSync('./hola.txt', 'Hola mundo!');
console.log('Escritura finalizada!');
*/

let date = new Date();

fs.writeFile(`./hola.txt`, date, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('Escritura finalizada!');
});


