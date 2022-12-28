const express=require('express')
const router = express.Router();

const rutaServicio=require('./route_service');
router.use("/services",rutaServicio);

const rutaUsuario=require('./route_auth');
router.use("/user",rutaUsuario);

module.exports=router;