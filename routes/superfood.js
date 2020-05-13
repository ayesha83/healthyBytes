var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
    res.render("superfood", {
        page_name: "superfood"    });
});

module.exports = router;