const express=require('express')
const router = express.Router();

const rutaServicio=require('./route_service');
router.use("/services",rutaServicio);

module.exports=router;