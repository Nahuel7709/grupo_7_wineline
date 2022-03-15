const {Product} = require("../database/models");

console.log(Product)


const controller = {
	
	browse: async (req, res) => {
		try{
			const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
			return res.render("products/browse", { products });
		}catch (e) {
			console.error(e);
		}
		
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