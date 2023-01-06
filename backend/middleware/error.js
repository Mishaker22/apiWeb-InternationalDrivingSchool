const ErrorHandler=require ('../utils/error_handler')

module.exports=(err, req,  res,  next)=>
{
    err.statusCode=err.statusCode || 500;
    err.message =err.message || "Internal server"

    res.status(err.statusCode).json({
        succes:false,
        message: err.stack
    })

    //Error de clave duplicado
    if (err.code === 11000) {
        const message= `Clave duplicada ${Object.keys(err.keyValue)}`
        error=new ErrorHandler(message,400 )
    }
    //Error en JWT
    if (err.name==="JsonWebTokenError") {
        const message="Token de Json Web es invalido, intentelo de nuevo"
        error=new ErrorHandler(message,400 )

    }
    //JWT TOKEN EXPIRADO
    if (err.name==="TokenExpiredError") {
        const message= "El token de JWT esta vencido, ya expiro, Intentelo de nuevo"
        error=new ErrorHandler(message,400 )
    }

}