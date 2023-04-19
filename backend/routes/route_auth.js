const express=require('express');
const router=express.Router();

const{registroUsuario, loginUser, logOut, forgotPass, resetPassword, getUserProfile,
     updatePassword, updateProfile, getAllUsers, getUserDetails, updateUser, deleteUser}=require('../controllers/controller_auth');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/register').post(registroUsuario)
router.route('/login').post(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut)
router.route('/forgotPassword').post(forgotPass)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/profile').get(isAuthenticatedUser, getUserProfile)
router.route('/profile/updatePassword').put(isAuthenticatedUser, updatePassword)
router.route('/profile/updateProfile').put(isAuthenticatedUser, updateProfile)

//rutas admin
router.route('/admon/allUsers').get(isAuthenticatedUser,authorizeRoles("admin"), getAllUsers)
router.route('/admon/user/:id').get(isAuthenticatedUser,authorizeRoles("admin"), getUserDetails)
router.route('/admon/updateUser/:id').put(isAuthenticatedUser,authorizeRoles("admin"), updateUser)
router.route('/admon/deleteUser/:id').delete(isAuthenticatedUser,authorizeRoles("admin"), deleteUser)
module.exports=router;  