var express = require("express");
var router = express.Router();
var path = require("path");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/file/:name", function (req, res, next) {
  console.log(path.join(__dirname + "/public/images/" + req.params.name));
  res.sendFile(path.join(__dirname + "/../public/images/" + req.params.name));
});

module.exports = router;
