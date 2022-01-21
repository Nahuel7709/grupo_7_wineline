const express = require("express");

const router = express.Router();

//requerimos el controller que esta en controllers/mainControllers.js

const controller = require("../controllers/main");

router.get("/", controller.home);



module.exports = router;
