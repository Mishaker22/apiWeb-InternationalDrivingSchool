const  User=require("../models/auth")
const ErrorHandler =require("../utils/error_handler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");


//Registrar un nuevo usuario /api/user/register

exports.registroUsuario=catchAsyncErrors(async(req,res,next)=>{
    const {nombre, apellido, email, password, genero}=req.body;

    const user =await User.create({
        nombre, 
        apellido,
        email,
        password,
        genero
    })
    const token=user.getJwtToken();

    tokenEnviado(user,201,res)
    
})
//Iniciar sesion -login
exports.loginUser= catchAsyncErrors(async(req,res,next)=>{
    const {email, password}= req.body;

    //revisar si los campos estan completos
    if (!email || !password) {
        return next(new ErrorHandler("please enter email and password",400))
    }
    //Buscar el usuario  en nuestra base de datos
    const user=await User.findOne({email}).select("+password")

    if (!user) {
        return next(new ErrorHandler("invalid email or password",401))
    }
    //Comparar contraseña, verificar  si esta bien
    const contraseniaOk=await user.comparePass(password)

    if (!contraseniaOk) {
        return next(new ErrorHandler("Invalid password ", 401))
    }
    //generar un token
    const token=user.getJwtToken();
    
    tokenEnviado(user,201,res)
})
