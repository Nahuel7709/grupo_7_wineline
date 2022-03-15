const {Product} = require("../database/models");

console.log(Product)

const controller = {
	
  browse: function (req, res) {
		Product
		.findAll({})
		.then((products)=>{
			console.log(products)
		})
    .catch(error => console.log (error))
		return res.send("HOLA");
	},


	
	create:  (req, res) => {
	
	},

	add:  (req, res) => {
	
	},
	
	delete:  (req, res) => {
		
	},
	
	read:  (req, res) => {
	
	},

	edit:  (req, res) => {
	
	},

	update:  (req, res) => {
	
	},

  cart: (req, res) => {
    return res.render("products/productCart");
  },
}

module.exports = controller;