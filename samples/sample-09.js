let promise1 = new Promise(function(resolve, reject, final) {
    setTimeout(function() {
        resolve('foo');
    }, 3000);
    // 3000 = 3 segundos

});

/*
promise1.then(
    (result) => {
        console.log(result);
        console.log(promise1);
    },
    (error) => (console.error(error)), // reject
    () => {console.log('Final');} // final
);
*/

const url = 'https://sink.meydis.com/mail/click?Payload=CODE:FI00000001,EMAIL:manolito@prueba.com,CHEQUE:3,CARD:00000000000000001'
fetch(url).then((data)=>console.log(data));

console.log(promise1);
//expected output: [object Promise]