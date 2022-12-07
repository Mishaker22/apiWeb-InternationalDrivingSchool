const app=require("./app")

//setear el archivo de configuracion
const  dotenv=require("dotenv");
dotenv.config({path: 'backend/config/config.env'})
//Conexion con la base de datos

//Inicializar el servidor 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el  puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
});


