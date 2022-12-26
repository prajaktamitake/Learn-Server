const userRegController =require("../controller/regUserController")
// const image =require("../images")
const router =require('express').Router()

router.post("/userReg",userRegController.upload, userRegController.createUser);
router.get("/getAlluserReg", userRegController.getUser);
router.put("/userupdate/:id", userRegController.updateUser);
router.delete("/userdelete/:id", userRegController.userdelete);
module.exports = router;