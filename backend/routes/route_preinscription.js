const express=require('express');
const router=express.Router();

const { updateOrder, deleteOrder, getAdminAllOrders, getMyOrders, newPrinscription, getOnePreinscriptions}=require('../controllers/controller_preinscripcion');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/new').post(isAuthenticatedUser, newPrinscription )
router.route('/:id').get(getOnePreinscriptions)
router.route('/order/me').get(isAuthenticatedUser, getMyOrders)
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.route('/admin/order/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)
router.route('/admin/orderList').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAllOrders)



module.exports=router;  