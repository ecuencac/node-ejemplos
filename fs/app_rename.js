const fs = require('fs');
fs.renameSync('./hola.txt','hola_1.txt');
fs.rename('./hola2.txt','hola_2.txt', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Archivo renombrado");
});