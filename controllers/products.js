const {Product, Volume, Category, Variety} = require("../database/models");
const { Op } = require("sequelize");

const fs = require("fs");
const path = require("path");
const { body } = require("express-validator");


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
		const productStored = await Product.create({ ...req.body, image: req.file.filename })
		return res.redirect("/products");
	},
	
	delete:  (req, res) => {
		const productID = req.params.id;
		Product.destroy({ where: { id: productID }});
		return res.redirect("/products");
	},
	
	read: async  (req, res) => {
		const productID = req.params.id;
		const productFinded = await Product.findByPk(productID, { include: ["brand", "categories", "volumes", "varieties"] });
		return res.render("products/productDetail", { productFinded });
	},

	edit: async  (req, res) => {
		const productID = req.params.id;
		const productFinded = await Product.findByPk(productID, { include: ["brand", "categories", "volumes", "varieties"] });
		const categories = await Category.findAll({});
			const volumes = await Volume.findAll({});
			const varieties = await Variety.findAll({});
		return res.render("products/productEdit", { productFinded, categories, volumes, varieties });
	},

	update:  (req, res) => {
		const productID = req.params.id;
		Product.update(
			{ 
			  ...req.body,
			  image: req.file.filename 
			},
			{ where: { id: productID } }
		  )
		return res.redirect("/products");


		
	},

  cart: (req, res) => {
    return res.render("products/productCart");
  },

  wines: async (req, res) => {
	try{
		const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
		const winesCategory = await products.filter( oneProduct => oneProduct.categoryId === 1);
		return res.render("products/wines", { winesCategory });
	}catch (e) {
		console.error(e);
	  }
},

beer: async (req, res) => {
	try{
		const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
		const beerCategory = await products.filter( oneProduct => oneProduct.categoryId === 2);
		return res.render("products/beer", { beerCategory });
	}catch (e) {
		console.error(e);
	  }
},

sparkling: async (req, res) => {
	try{
		const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
		const sparklingCategory = await products.filter( oneProduct => oneProduct.categoryId === 3);
		return res.render("products/sparkling", { sparklingCategory });
	}catch (e) {
		console.error(e);
	  }
},

news: async (req, res) => {
	try{
		const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
		const newsCategory = await products.filter( oneProduct => oneProduct.new == true);
		return res.render("products/news", { newsCategory });
	}catch (e) {
		console.error(e);
	  }
},

discount: async (req, res) => {
	try{
		const products = await Product.findAll({ include: ["brand", "categories", "varieties", "volumes"] });
		const discountCategory = await products.filter( oneProduct => oneProduct.discount != 0);
		return res.render("products/discount", { discountCategory });
	}catch (e) {
		console.error(e);
	  }
},

search: (req, res) => {
    let search = req.query.searchbar;

    Product.findAll({
      where: {
        name: { [Op.like]: "%" + search + "%" },
      },
      include: ["brand", "categories", "varieties", "volumes"],
    }).then((productsSearch) => {
      res.render("products/search", { productsSearch });
    });
  },

 


}

module.exports = controller;