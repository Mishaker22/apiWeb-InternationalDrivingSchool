const mongoose= require("mongoose");
const validator = require("validator")

const preinscripcionSchema= mongoose.Schema({
    nombre:{
        type: String,
        required:[true, "Por favor ingrese su nombre completo"], 
        maxlength:[50, "El nombre no puede exceder de 120 caracteres"]
    }, 
    numeroId:{
        type:Number ,
        required:[true, "por favor ingrese el numero de identificacion"],
        unique: true,
    }, 
    email:{
        type:String ,
        required:[true, "por favor ingrese el correo electronico"],
        unique: true,
        validate:[validator.isEmail, "Por favor ingrese  un email valido"]
    }, 
    telefono:{
        type:String,
        required:true,
    },
    service:[{
        nombre:{
            type:String,
            required:true
        }, 
        precio:{
            type:Number,
            required: true
        },
        producto:{
            type:mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"model_service"
        }
    }], 
    estado:{
        type:String,
        required:true,
        default: "Sin reserva"
    }

})
module.exports=mongoose.model("preinscripcion",preinscripcionSchema)