const express=require('express');
const router=express.Router();

const{registroUsuario}=require('../controllers/controller_auth');

router.route('/register').post(registroUsuario)

module.exports=router;  