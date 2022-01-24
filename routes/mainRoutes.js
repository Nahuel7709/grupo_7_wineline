const express = require("express");

const router = express.Router();

//requerimos el controller que esta en controllers/mainControllers.js

const controller = require("../controllers/mainControllers");

router.get("/", controller.home);

router.get("/productCart", controller.productCart);





module.exports = router;
