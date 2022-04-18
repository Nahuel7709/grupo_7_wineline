const express = require("express");
const path = require("path");
const router = express.Router();

//requiero el controller
const controller = require("../controllers/products");

//requiero multer y lo seteo
const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,path.resolve(__dirname, '../public/uploads/products/'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix +"_"+ file.fieldname + path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: multerDiskStorage });

const adminMiddleware = require('../middlewares/adminMiddleware');


  //TODOS LOS PRODUCTOS
//http://localhost:3000/products
router.get("/", controller.browse);


//CUANDO CREO
//http://localhost:3000/products/create
router.get("/create", adminMiddleware, controller.create);
//http://localhost:3000/products
router.post("/",upload.single("image"), controller.add);

//Cart
router.get("/cart", controller.cart);

//categorias
router.get("/wines", controller.wines);
router.get("/beer", controller.beer);
router.get("/sparkling", controller.sparkling);

router.get("/news", controller.news);
router.get("/discount", controller.discount);



//CUANDO EDITO
//http://localhost:3000/products/edit/:id
router.get("/edit/:id", adminMiddleware, controller.edit);
//http://localhost:3000/products/:id
router.put("/:id",upload.single("image"), controller.update);



//UN PRODUCTO
//http://localhost:3000/products/id
router.get("/read/:id", controller.read);

//http://localhost:3000/products/id
router.delete("/:id", adminMiddleware, controller.delete);




module.exports=router;