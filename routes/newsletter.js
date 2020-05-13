var express = require("express");
var router = express.Router();
var Newsletter = require("../models/newsletterModel");

router.get("/", function (req, res, next) {
  res.render("newsletter", {
    err: "",
    page_name: "newsletter"  });
});

router.post("/submit", function (req, res, next) {
  var newsletterInfo = req.body;
  if (!newsletterInfo.email) {
    res.render("newsletter", {
      err: "email address required",
      page_name: "newsletter"
    });
  } else {
    var newNewsletter = new Newsletter(req.body);
    Newsletter.create(newNewsletter, function (err, result) {
      if (err) {
        res.render("newsletter", {
          err: err
        });
      } else {
        res.render("thankyou", {
          page_name: "newsletter"        });
      }
    });
  }
});

module.exports = router;