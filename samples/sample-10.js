var request = require('request');
    function getJSON(url) {
        return new Promise(function(resolve, reject) {
            request(url, function(error, response, body) {
            resolve(body);
            });
        });
    }
    async function main() {
        let data = await getJSON();
        console.log(data); // NOT undefined!
    }
main();