var express = require("express");
var register = require("../controllers/register");
var router = express.Router();
const {
  registerCheckslvl1,
  registerCheckslvl2,
  registerCheckslvl3,
} = require("../middlewares/registerCheck");
/* GET home page. */

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/register", registerCheckslvl1, register);

module.exports = router;
