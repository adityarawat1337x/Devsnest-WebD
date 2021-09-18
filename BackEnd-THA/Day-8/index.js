const app = require("express")();

//app.use(checkAdmin)
// app.use() applies middleware to every route
// it should be declared before every route
//app.use(body-parser)
// to parse body data into readable format
// its deprecated so we use express instead of BodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
