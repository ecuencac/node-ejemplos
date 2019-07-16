const fs = require('fs');

fs.readFile('./datos.json', (err, datos) => {
    if (err) {
        console.log(err);
        return;
    }

    datos = JSON.parse(datos);
    const series = datos.series;
    const peliculas = datos.peliculas
    
    /*
    let peliculasVistas = "";
    for (const element of peliculas) {
        if (element.vista == true) {
            console.log(element);
            if (peliculasVistas == "") {
                peliculasVistas = `{ titulo: '${element.titulo}', vista: ${element.vista} }`;
            } else {
                peliculasVistas += `, { titulo: '${element.titulo}', vista: ${element.vista} }`;
            }
        }
    }
    console.log(peliculasVistas);
    */

    saveData('./series.json', {series: series});
    saveData('./peliculas.json', {peliculas: peliculas});
    saveData('./peliculasVistas.json', {peliculasVistas: processData(peliculasVistas)});
    saveData('./peliculasVistas_1.json', {peliculasVistas: peliculas.filter(item => {return item.vista === true})});

    
//    var obj = JSON.parse(contenido);

    //console.log(obj);

    //console.log(contenido.toString());
});


function processData(dataArray) {
    let resultArray = [];
    for (const element of dataArray) {
        if (element.vista === true) {
            resultArray.push(element)
            //resultArray = [...resultArray, element]
        }
    }
    return resultArray;
}




function saveData(filePath, datos) {
    fs.writeFile(filePath, JSON.stringify(datos), err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Guardado: '+ filePath)
    })
}