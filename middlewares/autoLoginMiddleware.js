const fs = require("fs");
const path = require("path");

//traigo la db
const filePath = path.resolve(__dirname, "../data/users.json");
const usersArray = JSON.parse(fs.readFileSync(filePath, "utf8"));



function autoLoginMidddleware (req, res, next){
   const emailCookie = req.cookies.email
   if (emailCookie !== undefined){
   //preguntamos si la persona esta en la db
   const userToLogin = usersArray.find(oneUser => oneUser.email === emailCookie);
   delete userToLogin.password; 
   req.session.userLogged=userToLogin;
   }
   next();
};

module.exports = autoLoginMidddleware;