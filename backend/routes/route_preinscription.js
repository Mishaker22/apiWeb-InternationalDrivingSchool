const express=require('express');
const router=express.Router();

const {newReservation, getOneReservation, getAllOrders, updateOrder, deleteOrder}=require('../controllers/controller_preinscripcion');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/new').post(newReservation)
router.route('/:id').get(getOneReservation)
router.route('/admin/orders').get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders)
router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
router.route('/admin/order/:id').delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder)


module.exports=router;  