const express = require("express");
const router = express.Router();
const path = require("path");

//requiero el controller
const controller = require("../controllers/users");

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


//CUANDO CREO
//http://localhost:3000/products/create
router.get("/register", controller.create);
//http://localhost:3000/products
router.post("/", upload.single("usersAvatar"), controller.add);



//Formulario de login
router.get ("/login", controller.login)






module.exports=router;