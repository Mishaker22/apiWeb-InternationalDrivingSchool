const preinscripcion=require("../models/preinscripcion")
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/error_handler");
const APIFeatures = require("../utils/api_features");

//crear nueva preinscripcion
exports.newReservation= catchAsyncErrors(async(req,res,next)=>{
    const {
        numeroId,
        direccion,
        telefono,
        service,
    }=req.body;

    const order=await preinscripcion.create({
        numeroId,
        direccion,
        telefono,
        service,
        user: req.user._id
    })
    res.status(201).json({
        succes:true,
        order
    })
})
//ver una orden
exports.getOneReservation=catchAsyncErrors(async(req,res,next)=>{
    const order=await preinscripcion.findById(req.params.id)

    if(!order)
    {
        return next(new ErrorHandler("No escontramos una orden on ese Id",404))
    }
    res.status(200).json({
        succes:true,
        order
    })
})

//Ver todas las ordenes (usuario logueado)
exports.getMyOrders=catchAsyncErrors(async(req,res,next)=>{
    const orders=await preinscripcion.find({user:req.user._id})

    res.status(200).json({
        succes:true,
        orders
    })

})
//Preinscripciones Lista Admin
exports.getAdminAllOrders=catchAsyncErrors(async(req,res,next)=>{
  
    const preinscriptions=await preinscripcion.find()

    res.status(200).json({ 
        succes:true,
        preinscriptions,
    })

}) 
//Editar una preinscripcion (admin)
exports.updateOrder=catchAsyncErrors(async(req,res,next)=>{
    const order=await preinscripcion.findById(req.params.id)

    if (!order) {
        return next (new ErrorHandler("Orden no encontrada",404))
    }
    if (order.estado==="PAGADO") {
        return next (new ErrorHandler("Ya no se puede modificar esta orden"))
    }
    order.estado=req.body.estado;
    
    await order.save()

    res.status(200).json({
        succes:true,
        order
    })
})
//Eliminar Orden (admin)
exports.deleteOrder=catchAsyncErrors(async(req, res, next)=>{
    const order=await preinscripcion.findById(req.params.id)

    if (!order) {
        return next (new ErrorHandler("Esa orden no esta registrada",404))
    }
    await order.remove()

    res.status(200).json({
        succes:true,
        message:"Orden eliminda correctamente"
    })
})
