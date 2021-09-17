const app = require("express")();
const path = require("path");

console.log(__dirname);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.get("/", (req, res) => {
  // res.render("index", { title: "express" });
  res
    .status(201)
    .cookie("token", "test", {
      expire: new Date(Date.now() + 8 * 3600000),
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});

app.get("/file/download", (req, res) => {
  res.download(path.join(__dirname, "public/file.txt"), "downloaded.txt");
});

app.get("/file/view", (req, res) => {
  res.sendFile(path.join(__dirname, "public/file.txt"));
});

app.get("/photo/download", (req, res) => {
  res.download(path.join(__dirname, "public/img.jpg"), "img.jpg");
});

app.listen(5000, () => {
  console.log("server running at ", 5000);
});
