const express = require("express");
const router = express.Router();

//requiero el controller
const controller = require("../controllers/users");



//CUANDO CREO
//http://localhost:3000/products/create
router.get("/register", controller.create);
//http://localhost:3000/products
router.post("/", controller.add);



//Formulario de login
router.get ("/login", controller.login)






module.exports=router;