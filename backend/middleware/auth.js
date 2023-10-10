const User = require("../models/auth")
const jwt = require("jsonwebtoken")
const ErrorHandler = require("../utils/error_handler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors")
const { CommentsController } = require("moongose/controller")

//verificamos  si estamos autenticados (existencia y veracidad  del token )
exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
    const { token } = req.cookies

    if (!token) {
        return next(new ErrorHandler("Debe iniciar sesion para acceder este recurso", 401))
    }
    const decodificada = jwt.decode(token, process.env.JWT_SECRET)
    req.user = await User.findById(decodificada.id);

    next()
})

//capturamos role
exports.authorizeRoles=(...roles)=>{
    return(req,res,next)=>{
        if (!roles.includes(req.user.role)) {
            return next(new ErrorHandler(`Role (${req.user.role}) No esta autorizado a entrar a esta area`,403))
        }
        next()
    }
}