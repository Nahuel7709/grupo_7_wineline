module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Cart = sequelize.define('Cart', {
		name: DataTypes.STRING,
        userId: DataTypes.STRING
		
	}, {});

	Cart.associate = function (models) {
		// associations can be defined here
		
		};

	return Cart;
};