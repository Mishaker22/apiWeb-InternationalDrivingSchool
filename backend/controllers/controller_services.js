const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const servicio = require('../models/model_service');
const ErrorHandler = require('../utils/error_handler');
//const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver la lista de productos
exports.getServices = catchAsyncErrors(async (req, res, next) => {
    const services = await servicio.find();
    if (!services) {
        return next(new ErrorHandler("Servicio No encontrado", 404))
    }
    res.status(200).json({
        succes: true,
        cantidad: services.length,
        services
    })
})
//Buscar un servicio por id
exports.getServiceById = catchAsyncErrors(async (req, res, next) => {
    const service = await servicio.findById(req.params.id)
    if (!service) {
        return next(new ErrorHandler("Servicio No encontrado", 404))

    } res.status(200).json({
        succes: true,
        message: "A continuacion puede ver la informacion de tu servicio",
        service
    })
})
// buscar por producto por id
exports.getProductById = catchAsyncErrors(async (req, res, next) => {
    const serviceCategorie = await servicio.findById(req.query.idServicio)

    //compara con el id que llega por query
    const producto = serviceCategorie.producto.filter(p =>
        p._id.toString() === req.query.idProduct.toString()
    );

    res.status(200).json({
        succes: true,
        message: "Detalles del producto",
        producto
    })
})
//Agregar servicio nuevo
exports.newService = catchAsyncErrors(async (req, res, next) => {
    req.body.user = req.user.id;
    const service = await servicio.create(req.body);
    res.status(201).json({
        succes: true,
        service
    })
})
//Crear o un producto dentro de la categoria servicios
exports.createProductCategories = catchAsyncErrors(async (req, res, next) => {
    const { public_id, descripcion_producto, precio, idServicio } = req.body;

    const producto = {
        public_id,
        descripcion_producto,
        precio,
    }
    const serviceCategorie = await servicio.findById(idServicio)

    serviceCategorie.producto.push(producto)
    await serviceCategorie.save({ validateBeforeSave: false })

    res.status(200).json({
        succes: true,
        message: "Se ha guardado un producto como subcategoria de servicios"
    })

})
//ver los productos creados de una categoria de servicio
exports.getProductCategories = catchAsyncErrors(async (req, res, next) => {
    const serviceCategorie = await servicio.findById(req.query.idServicio)

    res.status(200).json({
        success: true,
        producto: serviceCategorie.producto
    })

})
//Eliminar un producto de una categoria
exports.deleteProductoCategories = catchAsyncErrors(async (req, res, next) => {
    const serviceCategorie = await servicio.findById(req.query.idServicio)

    //todas los productos se listan menos el que quiero borrar
    const producto = serviceCategorie.producto.filter(p =>
        p._id.toString() !== req.query.idProduct.toString()
    );
    const numProductos = producto.length;

    await servicio.findByIdAndUpdate(req.query.idServicio, {
        producto,
        numProductos
    }, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })


    console.log(producto)

    res.status(200).json({
        success: true,
        message: "producto eliminado correctamente"
    })

})
//Actualizar un servicio
exports.updateService = catchAsyncErrors(async (req, res, next) => {
    let service = await servicio.findById(req.params.id)
    if (!service) {
        return next(new ErrorHandler("Servicio No encontrado", 404))
    }
    service = await servicio.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        succes: true,
        message: "Servicio actualizado correctamente",
        service
    })
})
//Eliminar servicio
exports.deleteService = catchAsyncErrors(async (req, res) => {
    const service = await servicio.findById(req.params.id)
    if (!service) {
        return next(new ErrorHandler("Servicio No encontrado", 404))
    }
    await service.remove();
    res.status(200).json({
        succes: true,
        message: "servicio eliminado correctamente"
    })
})
//FETCH
//Ver todos los productos
/*
function verProductos() {
    fetch('http://localhost:2205/api/services/listar')
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}
verProductos();*/

// LLamamos al metodo creado para probar la consulta
//Ver por id
/*
function verProductoPorID(id) {
    fetch('http://localhost:2205/api/services/get' + id)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err))
}
verProductoPorID('63456a8d9163cb9dbbcaa235');*/

    // Probamos el metodo con un id