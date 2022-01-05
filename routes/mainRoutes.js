const express = require("express");

const router = express.Router();

//requerimos el controller que esta en controllers/mainControllers.js

const controller = require("../controllers/mainControllers");

router.get("/", controller.home);

router.get("/login", controller.login);

router.get("/productCart", controller.productCart);

router.get("/productDetail", controller.productDetail);

router.get("/register", controller.register);

router.get("/productcreate", controller.productCreate);

module.exports = router;
