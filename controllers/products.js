const {Product, Volume, Category, Variety} = require("../database/models");

const fs = require("fs");
const path = require("path");


const controller = {
	
	browse: async (req, res) => {
		try{
			const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
			const volumes = await Volume.findAll({});
			return res.render("products/browse", { products, volumes });
		}catch (e) {
			console.error(e);
		  }
	},

	
	
	create:  async (req, res) => {
		try {
			const categories = await Category.findAll({});
			const volumes = await Volume.findAll({});
			const varieties = await Variety.findAll({});
			return res.render("products/productCreate", {
				categories, volumes, varieties
			});
		} catch (error) {
			console.log(error);
		}
	},


	add: async  (req, res) => {
		const productStored = await Product.create(req.body)
		
		return res.redirect("/products");
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