const express = require ("express");
const router = express.Router();

const productsApiController = require ("../../controllers/api/productsApi")
const usersApiController = require ("../../controllers/api/usersApi")


//http://localhost:3000/api/products
router.get ("/products", productsApiController.show)

//http://localhost:3000/api/products/:id
router.get ("/products/:id", productsApiController.detail)

//http://localhost:3000/api/users
router.get ("/users", usersApiController.all)

//http://localhost:3000/api/users/:id
router.get("/users/:id", usersApiController.user)





module.exports = router;