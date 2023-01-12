const preinscripcion=require("../models/preinscripcion")
//const Servic =require("../models/model_service")
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/error_handler");

//crear nueva preinscripcion
exports.newReservation= catchAsyncErrors(async(req,res,next)=>{
    const {
        nombre,
        numeroId,
        email,
        telefono,
        service,
    }=req.body;

    const order=await preinscripcion.create({
        nombre,
        numeroId,
        email,
        telefono,
        service,
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
//Admin
//Ver todas las ordenes (usuario logueado)
exports.getAllOrders=catchAsyncErrors(async(req,res,next)=>{
    const orders=await preinscripcion.find();

    let cantTotal=orders.length;

    res.status(200).json({
        succes:true,
        cantTotal,
        orders
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
