module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Product = sequelize.define('Product', {
		name: DataTypes.STRING,
		image: DataTypes.STRING,
		price: DataTypes.DECIMAL(6,2),
        description: DataTypes.STRING,
        discount: DataTypes.DECIMAL(3,2),
        new: DataTypes.BOOLEAN,
		brandId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
        varietyId: DataTypes.INTEGER,
		volumeId: DataTypes.INTEGER,
	}, {
		paranoid: true
	});

	Product.associate = function (models) {
		// associations can be defined here
		Product.belongsTo(models.Brand, {
			as: "brand",
			foreignKey: "brandId"
		});

		Product.belongsTo(models.Category, {
			as: "categories",
			foreignKey: "categoryId"
		});

		Product.belongsTo(models.Variety, {
			as: "varieties",
			foreignKey: "varietyId"
		});

		Product.belongsTo(models.Volume, {
			as: "volumes",
			foreignKey: "volumeId",	
		});

		Product.belongsToMany(models.Cart, {
			as: "carts",
			through: "cartproduct",
			foreignKey: "productId",
			otherKey: "cartId"
		});

		
		};

	return Product;
};