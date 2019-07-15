class Serie {

//private nombre: string;
//episodios;
//temporadas;
//episodiosVistos;

    constructor(nombre, episodios, temporadas, episodiosVistos) {
        this.nombre = nombre;
        this.episodios = episodios;
        this.temporadas = temporadas;
        this.episodiosVistos = episodiosVistos;
    }
    episodiosPorVer() {
        return this.episodios - this.episodiosVistos;
    }
}

let vikings = new Serie('Vikings', 69, 5, 45);
console.log(vikings.episodiosPorVer());
console.log(vikings.finalizada());