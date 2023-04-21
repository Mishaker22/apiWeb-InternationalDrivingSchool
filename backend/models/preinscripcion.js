const mongoose= require("mongoose");
const validator = require("validator")

const preinscripcionSchema= mongoose.Schema({
    numeroId:{
        type:Number ,
        required:[true, "por favor ingrese el numero de identificacion"],
        unique: true,
    }, 
    direccion:{
        type:String ,
        required:[true, "por favor ingrese su direccion"],
    }, 
    telefono:{
        type:String,
        required:[true, "Por favor ingrese su telefono"],
    },
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "auth"
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"model_service"
    }, 
    producto:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"model_service"
    },
    estado:{
        type:String,
        required:true,
        default: "Sin reservar fecha"
    },
    fechaRegistro:{
        type: Date,
        default: Date.now
    }

})
module.exports=mongoose.model("preinscripcion",preinscripcionSchema)