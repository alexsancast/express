const express = require("express");
const { send } = require("process");

const app = express();

app.listen(3000);

//Cargar imagen
app.get("/", (req, res) => {
  res.sendFile("./javascript.png", {
    root: __dirname,
  });
});

//Listar productos
app.get("/productos", (req, res) => {
  res.send("Lista de productos");
});

//Crear prodcutos
app.post("/productos", (req, res) => {
  res.send("Creando producto");
});

//Actualizar productos
app.patch("/productos", (req, res) => {
  res.send("Actualizando producto");
});

//Eliminar Productos
app.delete("/productos", (req, res) => {
  res.send("Eliminando prodcuto");
});

//Mandar un json

app.get("/user", (req, res) => {
  res.json({
    name: "Alexander",
    lastname: "Castillo",
    address: {
      city: "New York ",
      street: "Some street 23",
    },
  });
});

//Mandar status 

app.get("/isAlive", (req, res) => {
  res.sendStatus(200);
});

//Body request 


console.log("Server on port 3000...");
