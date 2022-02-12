const path = require('path');
const multer = require('multer');

//seteo multer
const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../public/uploads/users"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(
        null,
        uniqueSuffix + "_" + file.fieldname + path.extname(file.originalname)
      );
    },
  });
  
  const uploadFile = multer({ storage: multerDiskStorage });


  module.exports = uploadFile;