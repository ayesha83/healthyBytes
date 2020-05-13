var express = require('express');
var router = express.Router();
var https = require('https'); 


router.get('/', function (req, res, next) {
    getData(function (data) {
        res.render('daily', {
            data: data, page_name: "daily"

        });
    });
});

// Call web API to get recipe data 
function getData(cb) {
    var options = {
        host: "api.spoonacular.com",
        port: 443,
        path: '/recipes/random?number=1&tags=vegetarian&apiKey=efcd143e075c4930bc8f0c0d492408bc',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // gets chunks of data and return in a call back function
    var body = '';
    https.request(options, function (res) {
        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', () => {
            let obj = JSON.parse(body);
            cb(obj);
        });
    }).end();
}

module.exports = router;