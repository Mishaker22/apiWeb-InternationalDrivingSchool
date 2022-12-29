const express= require("express");
const app= express();
const errorMiddleware=require("./middleware/error")
const cookieParser=require("cookie-parser")

//uso de constantes importadas
app.use(express.json());
app.use(cookieParser());

//importo las rutas
const rutas=require('./routes/routers');
app.use('/api', rutas)

//Middleware para manejar errores
app.use(errorMiddleware)

module.exports=app

