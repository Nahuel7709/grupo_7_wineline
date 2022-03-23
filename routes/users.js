const express = require("express");
const router = express.Router();


//requiero el controller
const controller = require("../controllers/users");

//middlewares
const uploadFile = require('../middlewares/multerMiddlewareUsers');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');





//CUANDO CREO
//http://localhost:3000/users/create
router.get("/register", guestMiddleware, controller.create);
//http://localhost:3000/users procesar
router.post("/register", uploadFile.single("avatar"), validations, controller.add);

//Formulario de login
router.get("/login", guestMiddleware, controller.login);
// Procesar el login
router.post('/login', controller.loginProcess);


//Perfil usuario
router.get("/profile", authMiddleware, controller.account);

//Formulario editar usuario
router.get("/profileEdit/:id", authMiddleware, controller.profileEdit);
//Procesar el edit
router.put("/:id",uploadFile.single("avatar"), controller.profileUpdate);

// Logout
router.post('/logout', controller.logout);

module.exports = router;
