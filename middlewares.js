const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("pase por aqui");

  next();
});

app.use((req, res, next) => {
    if(req.query.x === "alexsancastg@gmail.com"){
        next();
    }else {
        res.send("The user is not authenticated");
    }
  
    next();
  });

app.get("/dashboard", (req, res) => {
  res.send("Este es el dashboard");
});

console.log("Server on port 3005...");
app.listen(3005);
