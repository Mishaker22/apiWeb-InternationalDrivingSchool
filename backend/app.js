const express= require("express");
const app= express();

app.use(express.json());

//importo las rutas
const rutas=require('./routes/routers');
app.use('/api', rutas)

module.exports=app

