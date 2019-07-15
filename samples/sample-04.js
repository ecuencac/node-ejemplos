let misPeliculas = [
    { titulo: 'Scary movie', genero: 'comedia' },
    { titulo: 'La jungla de cristal', genero: 'accion' },
    { titulo: 'Los mercenarios', genero: 'accion' },
    { titulo: 'Salvar al soldado Ryan', genero: 'belica' }
];

let peliculasComedia = misPeliculas.filter(function (pelicula) {
    return pelicula.genero === 'comedia';
});

let peliculasAccion = misPeliculas.filter(pelicula => pelicula.genero === 'accion');