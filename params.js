const express = require("express");
const { send } = require("process");

const app = express();

//Parametros
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  res.send("Hola alex");
});

//Sumar dos numeros con los parametros
app.get("/add/:x/:y", (req, res) => {
  console.log(req.params.x);
  console.log(req.params.y);
  res.send("Datos enviados");
});

//Otras formas de pasar parametros
app.get("/users/:username/photo", (req, res) => {
  if (req.params.alexsancast === "js") {
    return res.sendFile("./javascript.png", {
      root: __dirname,
    });
  }

  res.send("No hay datos");
});

//Mandar con distintos parametros
app.get("/name/:nombre/age/:age", (req, res) => {
  res.send(`El usuario ${req.params.nombre} tiene ${req.params.age}`);
});
app.listen(3003);
console.log("Server on port 3003...");
