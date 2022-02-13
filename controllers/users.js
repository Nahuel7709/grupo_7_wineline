const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } =require("express-validator")

//ubicacion del archivo json
const filePath = path.resolve(__dirname, "../data/users.json");
//lectura del archivo json y parseado a array-db
const usersArray = JSON.parse(fs.readFileSync(filePath, "utf8"));

const controller = {
  create: (req, res) => {
    res.render("users/register");
  },

  add: (req, res) => {
    const resultValidation = validationResult(req);
    
    if (resultValidation.errors.length > 0){
      return res.render("users/register",{
        errors: resultValidation.mapped(),
        oldData :req.body
      });
    }

    //generamos el id
    const generateID = () => {
    const lastUser = usersArray[usersArray.length - 1];
    const lastID = lastUser.id;
    return lastID + 1;
    };

    const bodyData = req.body;

   //se guarda el usuario
   usersArray.push({
   id: generateID(),
   ...bodyData,
   password: bcrypt.hashSync(bodyData.password, 10),
   usersAvatar: req.file.filename,
});
   fs.writeFileSync(filePath, JSON.stringify(usersArray, null, " "));
   //la redireccion
   res.redirect("/users/login");
},


  login: (req, res) => {
    return res.render("users/login");
  },

  loginProcess: (req, res) => {
   //preguntamos si la persona esta en la db
   const userToLogin = usersArray.find(oneUser => oneUser.email === req.body.email);
   
   if (userToLogin) {
  //comparo contraseñas
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password);
    
  if (isPasswordCorrect){
    delete userToLogin.password; 
    req.session.userLogged=userToLogin;

    if(req.body.user_remember) {
      res.cookie("userEmail", userToLogin.email, { maxAge: (1000 * 60) * 10 });
    }

    //redireccionamos a users/profile
    return res.redirect("/users/profile");

   }
  }
},

  account: (req, res) => {
		return res.render("users/profile", {
			user: req.session.userLogged
		});
	},

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
		return res.redirect("/");
	}

};

module.exports = controller;
