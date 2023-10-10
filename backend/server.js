const app=require("./app")
const cloudinary= require("cloudinary")

//setear el archivo de configuracion
const  dotenv=require("dotenv");
const connectDatabase = require("./config/conexion");
dotenv.config({path: 'backend/config/config.env'})

//Conexion con la base de datos
connectDatabase();

//configurar cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})
//Inicializar el servidor 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor iniciado en el  puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
});


