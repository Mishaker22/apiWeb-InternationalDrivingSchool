const express= require("express");
const app= express();
const errorMiddleware=require("./middleware/error")
const cookieParser=require("cookie-parser")
const bodyParser=require('body-parser')
const fileUpload=require('express-fileupload')

//uso de constantes importadas
//app.use(express.json());
app.use(express.json({limit : 52428800,extended : true}))
app.use(express.urlencoded({limit : 52428800,extended : true}))
app.use(bodyParser.urlencoded({extended:true, limit: 52428800}))
app.use(cookieParser());
app.use(fileUpload())

//importo las rutas
const rutas=require('./routes/routers');
app.use('/api', rutas)

//Middleware para manejar errores
app.use(errorMiddleware)

module.exports=app

