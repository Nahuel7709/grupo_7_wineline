const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use (express.urlencoded({extended:false}));
app.use (express.json());

const home = require("./routes/main");
app.use("/", home);

const productsRoutes = require("./routes/products");
app.use("/products", productsRoutes);

