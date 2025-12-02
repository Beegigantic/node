const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "rielly" && password === "password") {
    res.redirect("/success");
  } else {
    res.redirect("/?error=1");
  }
});

app.get("/success", (req, res) => {
  res.send("<h1>access granted</h1>");
});

app.listen(3000);
