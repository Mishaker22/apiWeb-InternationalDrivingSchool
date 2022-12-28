const  mongoose =require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const usuarioShema=new mongoose.Schema({
    nombre:{
        type: String,
        required:[true, "Por favor ingrese el nombre"], 
        maxlength:[120, "El nombre no puede exceder de 120 caracteres"]
    }, 
    email:{
        type:String ,
        required:[true, "por favor ingrese el correo electronico"],
        unique: true,
        validate:[validator.isEmail, "Por favor ingrese  un email valido"]
    }, 
    password:{
        type:String,
        required:[true, "Por favor registre una contraseña"],
        minlength:[8, "Tu contraseña debe tener minimo 8 caracteres"], 
        select:false
    },
    role:{
        type :String,
        default: 'user'
    },
    fechaRegistro:{
        type: Date,
        default: Date.now
    } ,

    resetPasswordToken:String,
    resetPasswordExpire:Date
})

module.exports=mongoose.model("auth", usuarioShema)