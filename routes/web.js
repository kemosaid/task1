const express=require("express"),
router=express.Router(),
controlerfunc=require("../controller/functions")
router.get("/",controlerfunc.index)
module.exports=router;