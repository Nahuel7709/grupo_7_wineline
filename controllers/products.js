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

  read: (req, res) => {
    
    const id = Number(req.params.id); 
    
    const product = productsArray.find(oneProduct => oneProduct.id === id);
    return res.render('products/productDetail', {
        theProduct: product 
    });
},

  create: (req,res)=>{
    res.render("products/productCreate");
    },

  add: (req,res)=>{
    
    //generamos el id
    const generateID = () => {
        const lastProduct =  productsArray[productsArray.length - 1];
        const lastID = lastProduct.id;
        return lastID + 1;
    }


    
     productsArray.push({
         id: generateID(),
         pdtMarca: req.body.pdtMarca,
         pdtVariedad: req.body.pdtVariedad,
         pdtPresentacion: req.body.pdtPresentacion,
         pdtDescripcion: req.body.pdtDescripcion,
         pdtPrice: req.body.pdtPrice,
         pdtCategorias: req.body.pdtCategorias,
         pdtImage: req.file.filename,
     });
    fs.writeFileSync(filePath, JSON.stringify(productsArray,null," "));
    
    res.redirect("/products");
    },

  edit: (req, res) => {
    
    const id = Number(req.params.id); 
    const product = productsArray.find(oneProduct => oneProduct.id === id);
    return res.render('products/productEdit', { 
        theProduct: product 
    });
},

  update: (req, res) => {
    
    const id = Number(req.params.id);
    
    
    const productsArrayEdited = productsArray.map(oneProduct => {
        if (oneProduct.id === id) { 
            return {
                ...oneProduct, 
         pdtMarca: req.body.pdtMarca,
         pdtVariedad: req.body.pdtVariedad,
         pdtPresentacion: req.body.pdtPresentacion,
         pdtDescripcion: req.body.pdtDescripcion,
         pdtPrice: req.body.pdtPrice,
         pdtCategorias: req.body.pdtCategorias,
            }
        }
        return oneProduct;
    });

    
    fs.writeFileSync(filePath, JSON.stringify(productsArrayEdited, null, ' '));
    
    
    return res.redirect('/products'); 
},

  delete: (req, res) => {
    
    const id = Number(req.params.id); 

    
    const productsArrayFiltered = productsArray.filter(oneProduct => oneProduct.id !== id);

    
    fs.writeFileSync(filePath, JSON.stringify(productsArrayFiltered, null, ' '));

    
    return res.redirect('/products'); 
},

};

module.exports= controller;