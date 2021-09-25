var express = require("express");
var router = express.Router();
const Pool = require("pg").Pool;

const pool = new Pool({
  user: "napster",
  database: "devs",
  host: "localhost",
  password: "asdw",
  port: 5432,
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  pool.query('select * from "Users"', (err, resp) => {
    if (err) console.log(err);
    else res.status(200).json(resp);
  });
  // res.send("respond with a resource");
});

module.exports = router;
