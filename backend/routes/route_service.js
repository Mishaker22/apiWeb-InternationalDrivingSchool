const express=require('express');
const router=express.Router();

const{getServices, newService, getServiceById, updateService, deleteService}=require('../controllers/controller_services');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

//probemos autenticacion
router.route('/listar').get(getServices)
router.route('/nuevo').post(isAuthenticatedUser,authorizeRoles("admin"), newService)
router.route('/get/:id').get(getServiceById)
router.route('/get/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateService)
router.route('/delete/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteService)
module.exports=router;  