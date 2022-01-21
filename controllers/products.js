const path = require("path");
const fs = require ("fs")

const filePath = path.resolve(__dirname, '../data/products.json');

// Lectura del archivo JSON y parseado a array - IMPORTANTE - DB
const productsArray = JSON.parse(fs.readFileSync(filePath, 'utf8'));





const controller = {
    browse: (req,res) => {
        return res.render ("products/browse", {
            productsList : productsArray
        })

    },

    read: (req,res) => {
        const productId = req.params.id
        res.send ("detalle de un producto ID: " + productId)
    },

    create: (req,res) => {
        res.render ("products/productCreate")
    }, 

    add: (req,res) => {
        	// Inserto el nuevo producto al array de productos existen
		productsArray.push({
			marca: req.body.marca,
			variedad: req.body.variedad,
            presentacion : req.body.presentacion,
            precio: req.body.price,
            textarea: req.body.textarea,
            categoria: req.body.categorias,
        });

		// Sobreescribo todo el archivo JSON con el nuevo producto
		fs.writeFileSync(filePath, JSON.stringify(productsArray, null, ' '));

		// Y luego la redirección
		res.redirect('/products');
        

        res.send ("agregar un producto")
    },

    edit: (req,res) => {
        const productId = req.params.id
        res.send ("Editar el producto" + productId)
    },

    update: (req,res) => {
        res.send ("Actualizar producto editado")
    },

    delete: (req,res) => {
        res.send ("Borraste un producto")
    },




}


module.exports = controller;