const fs = require("fs");
const path = require("path");

//ubicacion del archivo json
const filePath = path.resolve(__dirname,"../data/users.json");
//lectura del archivo json y parseado a array
const usersArray = JSON.parse(fs.readFileSync(filePath,"utf8"));



const controller = {

  create: (req,res)=>{
    res.render("users/register");
    },

  

  add: (req,res)=>{
    //se guarda el usuario
     usersArray.push({
         usersName: req.body.usersName,
         usersId: req.body.usersId,
         usersPassword: req.body.usersPassword,
         usersEmail: req.body.usersEmail,
     });
    fs.writeFileSync(filePath, JSON.stringify(usersArray,null," "));
    //la redireccion
    res.redirect("/login");
    },

    login: (req, res) => {
      return res.render("users/login");
    },

  
}

module.exports= controller;