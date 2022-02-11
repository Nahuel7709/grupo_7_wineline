const fs = require("fs");
const path = require("path");

//ubicacion del archivo json
const filePath = path.resolve(__dirname, "../data/users.json");
//lectura del archivo json y parseado a array
const usersArray = JSON.parse(fs.readFileSync(filePath, "utf8"));

const controller = {
  create: (req, res) => {
    res.render("users/register");
  },

  add: (req, res) => {
    //generamos el id
    const generateID = () => {
      const lastUser = usersArray[usersArray.length - 1];
      const lastID = lastUser.id;
      return lastID + 1;
    };

    //se guarda el usuario
    usersArray.push({
      id: generateID(),
      usersName: req.body.usersName,
      usersId: req.body.usersId,
      usersPassword: req.body.usersPassword,
      usersEmail: req.body.usersEmail,
      country: req.body.country,
      usersAvatar: req.file.filename,
    });
    fs.writeFileSync(filePath, JSON.stringify(usersArray, null, " "));
    //la redireccion
    res.redirect("/users/login");
  },

  login: (req, res) => {
    return res.render("users/login");
  },

  account: (req, res) => {
    return res.render("users/profile");
  },
};

module.exports = controller;
