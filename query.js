const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  console.log(req.query.user);
  console.log(req.query.age);
  res.send("Este es el modulo de query");
});

console.log("Server on port 3004...");
app.listen(3004);
