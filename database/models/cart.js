module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Cart = sequelize.define('Cart', {
		name: DataTypes.STRING,
        userId: DataTypes.INTEGER
		
	}, {});

	Cart.associate = function (models) {
		
		Cart.belongsTo(models.User, {
			as: "users",
			foreignKey: "userId"
		});

		Cart.belongsToMany(models.Product, {
			as: "products",
			through: "cartproduct",
			foreignKey: "cartId",
			otherKey: "productId"
		});

		
		};

	return Cart;
};