const fs = require('fs');

fs.readFile('./datos.json', (err, datos) => {
    if (err) {
        console.log(err);
        return;
    }

    datos = JSON.parse(datos);
    const series = datos.series;
    const peliculas = datos.peliculas

    saveData('./series.json', {series: series});
    saveData('./peliculas.json', {peliculas: peliculas});
//    var obj = JSON.parse(contenido);

    //console.log(obj);

    //console.log(contenido.toString());
});


function saveData(filePath, datos) {
    fs.writeFile(filePath, JSON.stringify(datos), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Guardado: '+ filePath)
    })
}