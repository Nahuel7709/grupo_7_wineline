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
router.post("/", uploadFile.single("usersAvatar"), validations, controller.add);

//Formulario de login
router.get("/login", controller.login);

//Menú de usuario
router.get("/profile", controller.account);

module.exports = router;
