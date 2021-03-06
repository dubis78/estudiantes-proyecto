const express = require("express");
const morgan = require("morgan");
const app = express();
const actores = require("./routes/actores");
require('dotenv').config();

//Middlewares
app.use(morgan("dev")); //Monitorear las peticiones
app.use(express.json()); //Peticiones en formato json

app.get("/", (req,res) => {
  res.send('<h1>Holis</h1>');
});

app.use("/api", actores);

// app.get("/estudiantes", (req,res) => {
//   let estudiantes=[];
//   estudiantes.push({nombre:'juan',apelliso:'perez'});
//   res.json(estudiantes);
// });

app.set('port', process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get('port')}!`);
});
