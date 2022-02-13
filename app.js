const express = require("express");
const path = require("path");
const methodOverride =  require('method-override'); 
const session = require('express-session');
const cookie = require('cookie-parser');

const app = express();

app.use(session({ 
	secret: 'wineline group',
	resave: false,
	saveUninitialized: true,
}));

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// md cookie
app.use(cookie());

//setup del req.body
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//para poder usar put y delete
app.use(methodOverride('_method'));


// md auto login
const autoLogin = require("./middlewares/autoLoginMiddleware");
app.use(autoLogin);

// md userlogged
const userLoggedMD = require("./middlewares/userLoggedMiddleware");
app.use(userLoggedMD);

const home = require("./routes/mainRoutes");
app.use("/", home);

const productCart = require("./routes/mainRoutes");
app.use("/productCart", productCart);

const productsRoutes = require("./routes/products");
app.use("/products", productsRoutes);

const usersRoutes = require("./routes/users");
app.use("/users", usersRoutes);

