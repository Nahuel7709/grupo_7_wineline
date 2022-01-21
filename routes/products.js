const express = require("express");
const { append } = require("express/lib/response");

const router = express.Router();



const controller = require("../controllers/products");


//listado de todos los productos
router.get ("/", controller.browse);



//vista de formulario de creacion de producto
router.get ("/create", controller.create);
//agregar un producto al servidor
router.post ("/",controller.add);



//vista de edicion de un producto
router.get ("/edit/:id", controller.edit)
//enviar la edicion de un produto
router.put("/:id", controller.update)


//eliminar un producto
router.delete ("/:id", controller.delete)




//detalle de un producto 
router.get ("/:id", controller.read);





module.exports = router;