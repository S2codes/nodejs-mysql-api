const express  = require("express");
const router = express.Router();

const controller = require("../controller/employee")


router.post("/newemployee", controller.newEmployee);
router.post("/updateemployee", controller.updateEmployee);
router.post("/deleteemployee", controller.deleteEmployee);
router.get("/getallemployee", controller.getAllEmployees);
router.get("/getemployee", controller.getEmployee);


module.exports = router
