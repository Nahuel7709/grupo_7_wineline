const path = require("path");

const controller = {
  home: (req, res) => {
    return res.render("./users/home");
  },

  productCart: (req, res) => {
    return res.render("./products/productCart");
  },


};

module.exports = controller;
