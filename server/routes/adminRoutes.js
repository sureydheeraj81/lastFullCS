const express = require("express");
const router = express.Router()
const controllers = require("../controllers/adminControllers")

router.post("/register", controllers.register)
router.post("/login", controllers.login)
router.get("/get-admin-info-by-id", controllers.adminInfo);
router.get("/get-all-admin-info", controllers.getAllAdminInfo);
router.post("/logout", controllers.logout);
router.put("/update-status", controllers.updateStatus);
router.put("/update-profile", controllers.updateProfile);
router.delete("/delete-admin-request", controllers.deleteAdminRequest)

module.exports = router; 