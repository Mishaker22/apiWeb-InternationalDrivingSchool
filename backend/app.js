const express= require("express");
const app= express();
const errorMiddleware=require("./middleware/error")

app.use(express.json());

//importo las rutas
const rutas=require('./routes/routers');
app.use('/api', rutas)

//Middleware para manejar errores
app.use(errorMiddleware)

module.exports=app

