const  User=require("../models/auth")
const ErrorHandler =require("../utils/error_handler")
const catchAsyncErrors=require("../middleware/catchAsyncErrors");


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
    res.status(201).json({
        succes:true,
        user
    })
})
