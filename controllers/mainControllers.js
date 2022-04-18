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
 },

 admin:(req, res) => {
  return res.render("./admin")
},

terms:(req, res) => {
  return res.render("./terms")
},

faq:(req, res) => {
  return res.render("./faq")
}


};

module.exports = controller;
