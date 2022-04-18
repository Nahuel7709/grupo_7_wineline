const express = require("express");

const router = express.Router();

//requerimos el controller que esta en controllers/mainControllers.js

const controller = require("../controllers/mainControllers");

router.get("/", controller.home);

router.get("/about", controller.about);

router.get("/help", controller.help);

router.get("/admin", controller.admin);







module.exports = router;
