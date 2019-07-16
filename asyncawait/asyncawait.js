var request = require('request');

function getJSON(url) {
 return new Promise(function(resolve, reject) {
   request(url, function(error, response, body) {
     resolve(body);
   });
 });
}
async function main() {

  try {
    let data = await getJSON('https://sink.meydis.com/mail/click?Payload=CODE:FI00000001,EMAIL:manolito@prueba.com,CHEQUE:3,CARD:00000000000000001');
    console.log(data); // NOT undefined!

  } catch (exp) {
    console.log(exp);
  }
}
main();