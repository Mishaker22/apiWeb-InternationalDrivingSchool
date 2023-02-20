const express=require('express');
const router=express.Router();

const {newReservation, getOneReservation, updateOrder, deleteOrder, getAdminAllOrders, getMyOrders}=require('../controllers/controller_preinscripcion');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/new').post(isAuthenticatedUser, newReservation)
router.route('/:id').get(getOneReservation)
router.route('/order/me').get(isAuthenticatedUser, getMyOrders)
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.route('/admin/order/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)
router.route('/admin/orderList').get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAllOrders)



module.exports=router;  