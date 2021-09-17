const app = require("express")();
const bodyParser = require("body-parser");

//app.use(checkAdmin)
// app.use() applies middleware to every route
// it should be declared before every route
//app.use(body-parser)
// to parse body data into readable format
//deprecated
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//DEPRECATED

const checkAdmin = (req, res, next) => {
  res.status(200);
  if (req.query.admin == "true") next();
  res.status(500);
  res.send("Failed");
};

app.get("/", (req, res) => {
  res.json(req.query);
  // res.json({ middleware: "Success" });
});

app.get("/user/:id", checkAdmin, (req, res) => {
  res.status(401).send(req.params.id);
});

app.get("/feed?limit=20", (req, res) => {
  res.send(req.query.limit);
});

app.listen(3000, () => {
  console.log("server running at ", 3000);
});
