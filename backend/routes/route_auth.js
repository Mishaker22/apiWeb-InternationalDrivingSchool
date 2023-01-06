const express=require('express');
const router=express.Router();

const{registroUsuario, loginUser, logOut, forgotPass, resetPassword, getUserProfile,
     updatePassword, updateProfile, getAllUsers, getUserDetails, updateUser}=require('../controllers/controller_auth');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router.route('/register').post(registroUsuario)
router.route('/login').get(loginUser)
router.route('/logout').get(isAuthenticatedUser, logOut)
router.route('/forgotPassword').post(forgotPass)
router.route('/resetPassword/:token').post(resetPassword)
router.route('/profile').get(isAuthenticatedUser, getUserProfile)
router.route('/profile/updatePassword').put(isAuthenticatedUser, updatePassword)
router.route('/profile/updateProfile').put(isAuthenticatedUser, updateProfile)

//rutas admin
router.route('/admon/allUsers').get(isAuthenticatedUser,authorizeRoles("admin"), getAllUsers)
router.route('/admon/user/:id').get(isAuthenticatedUser,authorizeRoles("admin"), getUserDetails)
router.route('/admon/updateUser/:id').get(isAuthenticatedUser,authorizeRoles("admin"), updateUser)
module.exports=router;  