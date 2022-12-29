const express=require('express');
const router=express.Router();

const{registroUsuario, loginUser}=require('../controllers/controller_auth');

router.route('/register').post(registroUsuario)
router.route('/login').get(loginUser)

module.exports=router;  