const express = require("express");
const router = express.Router();
const path = require("path");



const { body } = require("express-validator")

//middlewares
const uploadFile = require('../middlewares/multerMiddlewareUsers');



//requiero el controller
const controller = require("../controllers/users");
const validations = require('../middlewares/validateRegisterMiddleware');



//CUANDO CREO
//http://localhost:3000/products/create
router.get("/register", controller.create);
//http://localhost:3000/products
router.post("/register", uploadFile.single("usersAvatar"), validations, controller.add);

//Formulario de login
router.get("/login", controller.login);
// Procesar el login
router.post('/login', controller.loginProcess);


//Perfil usuario
router.get("/profile", controller.account);
// Logout
router.post('/logout', controller.logout);

module.exports = router;
