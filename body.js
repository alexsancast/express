const { urlencoded } = require("express");
const express = require("express");

const app = express();

//Recibir datos del ciente


//Procesar datos en text

app.use(express.text());
app.use(express.json());
app.use(urlencoded({extended : false}));


app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Usuario creado.")
});

app.listen(3002);
console.log("Server on port 3002");
