const ErrorHandler=require ('../utils/error_handler')

module.exports=(err, req,  res,  next)=>
{
    err.statusCode=err.statusCode || 500;
    err.message =err.message || "Internal server"

    res.status(err.statusCode).json({
        succes:false,
        message: err.stack
    })

}