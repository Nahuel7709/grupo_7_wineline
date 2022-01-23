const fs = require("fs");
const path = require("path");

//ubicacion del archivo json
const filePath = path.resolve(__dirname,"../data/products.json");
//lectura del archivo json y parseado a array
const productsArray = JSON.parse(fs.readFileSync(filePath,"utf8"));



const controller = {
  browse: (req,res)=>{
   res.render("products/browse",{
       productsList: productsArray
   });
   },

  read: (req,res)=>{
    const productId = req.params.id
    res.send("detalle de un producto ID:" + productId);
    },

  create: (req,res)=>{
    res.render("products/productCreate");
    },

  edit: (req,res)=>{
    const productId = req.params.id
    res.send("formulario edicion de un producto ID:" + productId);
    },

  add: (req,res)=>{
    //se guarda el producto
     productsArray.push({
         pdtMarca: req.body.pdtMarca,
         pdtVariedad: req.body.pdtVariedad,
         pdtPresentacion: req.body.pdtPresentacion,
         pdtDescripcion: req.body.pdtDescripcion,
         pdtPrice: req.body.pdtPrice,
         pdtCategorias: req.body.pdtCategorias,
         pdtImage: req.file.filename,
     });
    fs.writeFileSync(filePath, JSON.stringify(productsArray,null," "));
    //la redireccion
    res.redirect("/products");
    },

  update: (req,res)=>{
    const productId = req.params.id
    res.send("vamos a actualizar el producto con ID: " + productId);
    },

  delete: (req,res)=>{
    const productId = req.params.id
    res.send("vamos a borrar el producto con ID: " + productId);
    },
}

module.exports= controller;