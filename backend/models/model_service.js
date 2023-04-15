const mongoose = require("mongoose");
const miEsquema = mongoose.Schema;

const esquemaServicio = new miEsquema({
    nombre: {
        type: String,
        required: [true, "Por favor registra el nombre del servicio"],
        trim: true,
        maxLength: [120, "El nombre del servicio no debe exceder de 120 caracteres"]
    },
    descripcion: {
        type: String,
        required: [true, "Por favor escriba la descripcion del servicio"],
    },
    producto: [
        {
            public_id: {
                type: Number,
                required: true
            },
            descripcion_producto: {
                type: String,
                required: true
            },
            precio: {
                type: Number,
                required: true,
                maxLength: 4,
                default: 0.0
            },
        }
    ],
    user:{
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});
const modeloCliente = mongoose.model('services', esquemaServicio);
module.exports = modeloCliente;