const servicio = require('../models/model_service');
//const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));

//Ver la lista de productos
exports.getServices = async(req, res, next) => {
    const services = await servicio.find();
    if (!services) {
        return res.status(404).json({
            succes:false,
            error:true
        })  
    }
    res.status(200).json({
        succes: true,
        cantidad: services.length,
        services
    })
}
//Buscar un servicio por id
exports.getServiceById = async (req, res, next) => {
    const service = await servicio.findById(req.params.id)
    if (!service) {
        return res.status(404).json({
            succes:false,
            message:"No encontramos ese servicio"
        })
    } res.status(200).json({
        succes: true,
        message: "A continuacion puede ver la informacion de tu servicio",
        service
    })
}
//Agregar servicio nuevo
exports.newService = async (req, res, next) => {
    const service = await servicio.create(req.body);

    res.status(201).json({
        succes: true,
        service
    })
}
//Actualizar un servicio
exports.updateService = async (req, res,next) => {
    let service = await servicio.findById(req.params.id)
    if (!service) {
        return res.status(404).json({
            succes:false,
            message:"No encontramos ese servicio"
        })
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
}
//Eliminar servicio
exports.deleteService = async (req, res) => {
    const service = await servicio.findById(req.params.id)
    if (!service) {
        return res.status(404).json({
            succes:false,
            message:"No encontramos ese servicio"
        })
    }
    await service.remove();
    res.status(200).json({
        succes: true,
        message: "servicio eliminado correctamente"
    })
}
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