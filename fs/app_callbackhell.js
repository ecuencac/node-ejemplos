const fs = require('fs');

let date = new Date();

fs.readFile('./20190201_Cumple_VIP.txt', (err, contenido) => {
    if (err) {
        console.error(err);
        return;
    }
    fs.writeFile(`./hola2.txt`, contenido, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('Escritura finalizada!');
    });
});




