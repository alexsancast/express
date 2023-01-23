const express = require("express");

const app = express();


//Dos formas para importar las rutas 
const UserRouter = require("./src/routes/users"); // Primera forma vieja para importar
const HomeRouter = require("./src/routes/home"); //Segunda forma nueva para importar 

app.use(HomeRouter); // Aqui importamos la seg forma

UserRouter(app);

app.listen(3000);
