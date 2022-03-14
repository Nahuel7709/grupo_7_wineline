module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const CartProduct = sequelize.define('CartProduct', {
		cartId: DataTypes.STRING,
		productPrice: DataTypes.DECIMAL(6,2),
        productId: DataTypes.STRING,
        quantily: DataTypes.DECIMAL(3,2),
    
	}, {});

	CartProduct.associate = function (models) {
		// associations can be defined here
		
		};

	return CartProduct;
};