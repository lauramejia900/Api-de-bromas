const express = require("express");
const app = express();

//inicializamos BD
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}))

//importar rutas

const Rutas = require("./routes/chiste.routes")
Rutas(app);


app.listen(8000, () =>{
    console.log("Servidor corriendo")})