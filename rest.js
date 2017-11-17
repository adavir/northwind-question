var http = require('http');

var rest = {
    get: function (url) {
        return new Promise(function (fulfil, reject) {
            let data = '';
            http.get(url, function (resp) {
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                resp.on('end', () => {
                    fulfil(JSON.parse(data));
                });
            });
        });
    }
};


module.exports = rest;