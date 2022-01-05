const path = require("path");

const controller = {
  home: (req, res) => {
    return res.render("./users/home");
  },

  login: (req, res) => {
    return res.render("./users/login");
  },

  productCart: (req, res) => {
    return res.render("./products/productCart");
  },

  productDetail: (req, res) => {
    return res.render("./products/productDetail");
  },

  register: (req, res) => {
    return res.render("./users/register");
  },

  productCreate: (req, res) => {
    return res.render("./products/productCreate");
  },
};

module.exports = controller;
