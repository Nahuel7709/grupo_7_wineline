const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body("usersName").notEmpty().withMessage("Escriba su nombre y apellido"),
    body("usersId").notEmpty().withMessage("Escriba su nombre de usuario").bail().isLength({min:6, max:15}).withMessage("El nombre de usuario debe tener entre 6 y 15 caracteres"),
    body("usersDirec").notEmpty().withMessage("Escriba su dirección de envío"),
    body("usersTel").notEmpty().withMessage("Escriba su numero de telefono").bail().isNumeric().withMessage("El numero de telefono no debe contener letras ni signos"),
    body("password").notEmpty().withMessage("Escriba su contraseña").bail().isLength({min:8, max:100}).withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
    body("email").notEmpty().withMessage("Escriba su email").bail().isEmail().withMessage("Debes escribir un email válido"),
    body("country").notEmpty().withMessage("Elija su país"),
    body("usersAvatar").custom((value, { req }) => {
          let file = req.file;
          let acceptedExtensions = ['.jpg', '.png', '.gif'];
  
          if (!file) {
              throw new Error('Tienes que subir una imagen');
          } else {
              let fileExtension = path.extname(file.originalname);
              if (!acceptedExtensions.includes(fileExtension)) {
                  throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
              }
          }
  
          return true;
      })
  ]