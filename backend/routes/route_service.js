const express=require('express');
const router=express.Router();

const{getServices, newService, getServiceById, updateService, deleteService}=require('../controllers/controller_services');

router.route('/listar').get(getServices)
router.route('/nuevo').post(newService)
router.route('/get/:id').get(getServiceById)
router.route('/get/:id').put(updateService)
router.route('/delete/:id').delete(deleteService)
module.exports=router;  