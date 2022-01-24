const express = require("express");
const path = require("path");
const router = express.Router();

//requiero el controller
const controller = require("../controllers/products");

//requiero multer y lo seteo
const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.resolve(__dirname, '../public/uploads/'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix +"_"+ file.fieldname + path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: multerDiskStorage });




  //TODOS LOS PRODUCTOS
//http://localhost:3000/products
router.get("/", controller.browse);


//CUANDO CREO
//http://localhost:3000/products/create
router.get("/create", controller.create);
//http://localhost:3000/products
router.post("/",upload.single("productImage"), controller.add);


//CUANDO EDITO
//http://localhost:3000/products/edit/:id
router.get("/edit/:id", controller.edit);
//http://localhost:3000/products/:id
router.put("/:id", controller.update);



//UN PRODUCTO
//http://localhost:3000/products/id
router.get("/read/:id", controller.read);

//http://localhost:3000/products/id
router.delete("/:id", controller.delete);




module.exports=router;