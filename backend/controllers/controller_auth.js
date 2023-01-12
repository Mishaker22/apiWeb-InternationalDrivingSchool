const User = require("../models/auth")
const ErrorHandler = require("../utils/error_handler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const tokenEnviado = require("../utils/jwtToken");
const sendEmail = require("../utils/send_email");
const crypto = require("crypto")


//Registrar un nuevo usuario /api/user/register

exports.registroUsuario = catchAsyncErrors(async (req, res, next) => {
    const { nombre, apellido, email, password, genero } = req.body;

    const user = await User.create({
        nombre,
        apellido,
        email,
        password,
        genero
    })
    const token = user.getJwtToken();

    tokenEnviado(user, 201, res)

})
//Iniciar sesion -login
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    //revisar si los campos estan completos
    if (!email || !password) {
        return next(new ErrorHandler("please enter email and password", 400))
    }
    //Buscar el usuario  en nuestra base de datos
    const user = await User.findOne({ email }).select("+password")

    if (!user) {
        return next(new ErrorHandler("invalid email or password", 401))
    }
    //Comparar contraseña, verificar  si esta bien
    const contraseniaOk = await user.comparePass(password)

    if (!contraseniaOk) {
        return next(new ErrorHandler("Invalid password ", 401))
    }
    //generar un token
    const token = user.getJwtToken();

    tokenEnviado(user, 201, res)
})

//Cerrar Sesion
exports.logOut = catchAsyncErrors(async (req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })
    res.status(200).json({
        success: true,
        message: "Cerro Sesion"
    })
})

//Olvide mi contraseña, recuperar contraseña
exports.forgotPass = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {

        return next(new ErrorHandler("Usario no se encuentra registrado", 404))
    }
    const resetToken = user.genResetPassToken();
    await user.save({ validateBeforeSave: false })

    //Crear una url para resetear la contraseña
    const resetUrl = `${req.protocol}://${req.get("host")}/api/user/resetPassword/${resetToken}`

    const mensaje = `\n Hi!! ${user.nombre} \n\n we have received a request to change the password of International Driving Academy 
     \n\n Click here to change your password: \n ${resetUrl}
     \n\n If you did not request this link, contact support.
     \n\n By: International Driving Academy`

    try {

        await sendEmail({
            email: user.email,
            subject: "International Driving Academy Recover password",
            mensaje
        })
        res.status(200).json({
            success: true,
            message: `Correo enviado a ${user.email}`

        })
    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false })
        return next(new ErrorHandler(error.message, 500))
    }

})

//Resetear contraseña
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    //Hash el token  que llego a la url
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")
    //Buscar usuario a resetar password
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })
    //el usario si esta en la base de datos?
    if (!user) {
        return next(new ErrorHandler("Token es invalido o ya expiro", 400))
    }
    //diligenciamos bien los campos?
    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Contraseñas No coinciden", 400))
    }
    //setear la nueva contraseña
    user.password = req.body.password;
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save();
    tokenEnviado(user, 200, res)
})

// Ver perfiles de usuario (usuario que esta logueado)
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id)

    res.status(200).json({
        success: true,
        user
    })
})

//update controller (usuario logueado)
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.user.id).select("+password");

    //validamos contraseña antigua
    const sonIguales = await user.comparePass(req.body.oldPassword)

    if (!sonIguales) {
        return next(new ErrorHandler("Error. contraseña incorrecta"))
    }

    //comparamos contraseñnas nuevas
    if (req.body.newPassword !== req.body.confirmPassword) {
        return next(new ErrorHandler("Contraseñas No coinciden", 400))
    }

    user.password = req.body.newPassword;
    await user.save();

    tokenEnviado(user, 200, res)

})
//update perfil de usuario logueado
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
    const nuevaData = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        genero: req.body.email
    }

    const user = await User.findByIdAndUpdate(req.user.id, nuevaData,
        {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
    res.status(200).json({
        success: true,
        user
    })
})
//Servicios controladores sobre usuarios por parte de los ADMIN

//Ver todos los usuarios
exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
    const users = await User.find();

    if (!users) {
        return next(new ErrorHandler("No hay usuarios", 404))
    }
    res.status(200).json({
        success: true,
        users
    })
})
// ver detalles de 1 usuario
exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return next(new ErrorHandler(`No se ha encontrado ningun usuario con el id: ${req.params.id}`))
    }
    res.status(200).json({
        success: true,
        user
    })
})

// actualizar perfil de usuario como admin
exports.updateUser = catchAsyncErrors(async (req, res, next) => {
    const nuevaData = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        genero: req.body.email,
        role: req.body.role
    }
    const user = await User.findByIdAndUpdate(req.params.id, nuevaData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        user
    })
})

//Eliminar Usuario
exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(new ErrorHandler(`Usuario con id: ${req.params.id} No se encuentra en nuestra base de datos`))
    }
    await user.remove();

    res.status(200).json({
        success: true,
        message: "Usuario eliminado correctamente"
    })
})



