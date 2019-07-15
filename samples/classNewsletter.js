class Newsletter {

//Añadir
    constructor(subject='', body='', addressee=[]) {
        this.subject = subject;
        this.addressee = addressee;
        this.body = body;
        this.date = new Date();
    }

//Borrar
    remove(obj) {
        return this.obj === null;
        //return this.episodios - this.episodiosVistos;
    }

//Añadir Destinatarios
    addAddresses(newOne) {
        this.addressee = [...this.addressee, newOne];
        // this.addressee.push(newOne);
    }

    //Insertar Destinatario
    insertAddresses(index, addressee){
        if(typeof index === 'number') {

        } else {
            index = this.addressee.length - 1;
        }
        this.addressee.splice(index, 0, addressee);
    }

//Remover Destinatario
    removeAddresses(index = (this.addressee.lenght - 1)) {
        this.addressee.splice(index, 1);
//        if(typeof index === 'number') {

//        } else {
//            index = this.addressee.length - 1;
//        }

//        if(index !== undefined) {

//        } else {
//            index = this.addressee.length - 1;
//        }
    }

//Modificar Body
    editBody(newBody) {
        this.body = newBody;
    }

//Modificar Subject
    editSubject(newSubject) {
        this.subject = newSubject;
    }
}


class TestNewsletter extends Newsletter {
    constructor() {
        super('test subject', 'test body', ['test user 1', 'test user 2']);
    }

    runTest() {
        console.log(this);
    }


    static doSomething() {
        console.log('Do something');
    }
}

myNl = new TestNewsletter();
myNl.runTest();

TestNewsletter.doSomething(); // No se puede llamar por un objeto por es una función estatica.
// Solo puede ser llamada desde la misma clase.



let nl = new Newsletter('Hola a todos', 'Esto es un mensaje que se envía al body', ['pepito@gmail.com', 'pepazo@hotmail.com']);
console.log(nl);

nl.editSubject('Hola de nuevo premos');
console.log(nl);

nl.editBody('Mira que tipito ma boi');
console.log(nl);

nl.addAddresses('manolocabesa@gmail.com');
console.log(nl);

nl.insertAddresses(1, 'pepecabesa@gmail.com');
console.log(nl);

nl.removeAddresses(0);
console.log(nl);