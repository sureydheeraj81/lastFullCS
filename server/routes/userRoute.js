const { registerUser,getalluser,login,logout,updateUser, getSingleData,deleteUser,} = require("../controllers/userController")
const express=require("express")
const router=express.Router()

router.route("/register").post(registerUser)
router.route("/login").post(login)
router.route("/update/:id").put(updateUser)
router.route("/getall").get(getalluser)
router.route("/getsingle/:id").get(getSingleData)
router.route("/deleteUser/:id").delete(deleteUser)
router.route("/logout").get(logout)


module.exports=router







