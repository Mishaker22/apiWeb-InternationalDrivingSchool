const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const usuarioShema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingrese el nombre"],
        maxlength: [50, "El nombre no puede exceder de 120 caracteres"]
    },
    apellido: {
        type: String,
        required: [true, "Por favor ingrese el apellido"],
        maxlength: [50, "El apellido no puede exceder de 120 caracteres"]
    },
    email: {
        type: String,
        required: [true, "por favor ingrese el correo electronico"],
        unique: true,
        validate: [validator.isEmail, "Por favor ingrese  un email valido"]
    },
    password: {
        type: String,
        required: [true, "Por favor registre una contraseña"],
        minlength: [8, "Tu contraseña debe tener minimo 8 caracteres"],
        select: false
    },
    genero: {
        type: String,
        required: [true, "Por favor favor seleccione su genero"]
    },
    avatar: {
        public_id: 
        {
            type: String,
            require: true
        },
        url: 
        {
            type: String,
            require: true
        }
    },
    role: {
        type: String,
        default: 'user'
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    },

    resetPasswordToken: String,
    resetPasswordExpire: Date
})

//Encriptamos contraseña  antes de guardarla
usuarioShema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next()
    }
    this.password = await bcrypt.hash(this.password, 10)
})

//Decofidicamos contraseña y comparamos 
usuarioShema.methods.comparePass = async function (passDada) {
    return await bcrypt.compare(passDada, this.password)
}

// Retornar un jwt  token
usuarioShema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIEMPO_EXPIRACION
    })
}

//Generar un token para reset de contraseña
usuarioShema.methods.genResetPassToken = function () {
    const resetToken = crypto.randomBytes(20).toString('hex')

    //Hashear y setear  resetToken 
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest('hex')
    //Setear fecha de expiracion de token
    this.resetPasswordExpire = Date.now() + 30 * 60 * 1000 //dura 30 minutos
    return resetToken
}

module.exports = mongoose.model("auth", usuarioShema)