module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const CartProduct = sequelize.define('CartProduct', {
		subtotal: DataTypes.DECIMAL(6,2),
		price: DataTypes.DECIMAL(6,2),
        discount: DataTypes.DECIMAL(2,1),
        quantity: DataTypes.INTEGER,
		order_date: DataTypes.DATE,
		order_ship: DataTypes.DATE,
		productId: DataTypes.INTEGER,
		cartId: DataTypes.INTEGER,
    
	}, {});

	CartProduct.associate = function (models) {
		// associations can be defined here
		CartProduct.belongsTo(models.Product, {
			as: "products",
			foreignKey: "productId"
		});

		CartProduct.belongsTo(models.Cart, {
			as: "carts",
			foreignKey: "cartId"
		});


		};

	return CartProduct;
};