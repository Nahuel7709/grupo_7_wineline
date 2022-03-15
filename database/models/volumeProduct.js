module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const VolumeProduct = sequelize.define('volumeProduct', {
		productId: DataTypes.INTEGER,
        volumeId: DataTypes.INTEGER,
			
	}, {});

	VolumeProduct.associate = function (models) {
		// associations can be defined here

		VolumeProduct.belongsTo(models.Product, {
			as: "products",
			foreignKey: "productId"
		});

		VolumeProduct.belongsTo(models.Volume, {
			as: "volumes",
			foreignKey: "volumeId"
		});
		
		};

	return VolumeProduct;
};