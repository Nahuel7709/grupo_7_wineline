module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Product = sequelize.define('Product', {
		image: DataTypes.STRING,
		price: DataTypes.DECIMAL(6,2),
        volume: DataTypes.DECIMAL(4,2),
        description: DataTypes.STRING,
        discount: DataTypes.DECIMAL(3,2),
        new: DataTypes.BOOLEAN,
		brandId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER,
        varietyId: DataTypes.INTEGER,
	}, {
		paranoid: true
	});

	Product.associate = function (models) {
		// associations can be defined here
		Product.belongTo(models.Brand, {
			as: "brand",
			foreignKey: "brandId"
		})
		};

	return Product;
};