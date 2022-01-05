const express = require("express");
const path = require("path");

const app = express();

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const home = require("./routes/mainRoutes");
app.use("/", home);

const login = require("./routes/mainRoutes");
app.use("/login", login);

const productCart = require("./routes/mainRoutes");
app.use("/productCart", productCart);

const productDetail = require("./routes/mainRoutes");
app.use("/productDetail", productDetail);

const register = require("./routes/mainRoutes");
app.use("/register", register);

const create = require("./routes/mainRoutes");
app.use("/create", create);
