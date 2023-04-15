const express=require('express');
const router=express.Router();

const{getServices, newService, getServiceById, updateService, deleteService, createProductCategories,
    getProductCategories,
    deleteProductoCategories,
    getProductById}=require('../controllers/controller_services');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

//probemos autenticacion
router.route('/listar').get(getServices)
router.route('/nuevo').post(isAuthenticatedUser,authorizeRoles("admin"), newService)
router.route('/get/:id').get(getServiceById)
router.route('/get/:id').put(isAuthenticatedUser,authorizeRoles("admin"),updateService)
router.route('/delete/:id').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteService)
router.route('/newProduct').post(createProductCategories)
router.route('/getProducts').get(isAuthenticatedUser,authorizeRoles("admin"),getProductCategories)
router.route('/getProduct').get(isAuthenticatedUser, authorizeRoles("admin"), getProductById)
router.route('/deleteProduct').delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProductoCategories)

module.exports=router;  