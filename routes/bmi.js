var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('bmi', {
        bmi: "",
        err: "",
        page_name:"bmi"
    });
});

router.post("/", function (req, res, next) {
    var bmiReq = req.body;
    if (!bmiReq.weight || !bmiReq.height) {
        res.render('bmi', {
            bmi: "",
            err: "weight and height required",
            page_name:"bmi"
        });
    } else {
        var heightInInch = bmiReq.height * 12;

        var bmi = 703 * (bmiReq.weight / (heightInInch * heightInInch));
        res.render('bmi', {
            bmi: Number(bmi).toFixed(2),
            err: "",
            page_name:"bmi"
        });
    }
});

module.exports = router;