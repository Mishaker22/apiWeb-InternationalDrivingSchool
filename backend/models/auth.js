const  mongoose =require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")

const usuarioShema=new mongoose.Schema({
    nombre:{
        type: String,
        required:[true, "Por favor ingrese el nombre"], 
        maxlength:[50, "El nombre no puede exceder de 120 caracteres"]
    }, 
    apellido:{
        type: String,
        required:[true, "Por favor ingrese el apellido"], 
        maxlength:[50, "El apellido no puede exceder de 120 caracteres"]
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
    genero:{
        type:String,
        required:[true, "Por favor favor seleccione su genero"]
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
usuarioShema.pre("save", async function(next){
    if(!this.isModified("password"))
    {
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

module.exports=mongoose.model("auth", usuarioShema)