const path = require("path");

const controller = {
  home: (req, res) => {
    return res.render("./home");
  },

  about:(req, res) => {
    return res.render("./about")
  },

 help:(req, res) => {
   return res.render("./help")
 }


};

module.exports = controller;
