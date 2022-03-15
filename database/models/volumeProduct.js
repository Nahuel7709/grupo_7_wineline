module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const volumeProduct = sequelize.define('volumeProduct', {
		productId: DataTypes.INTEGER,
        volumeId: DataTypes.INTEGER,
			
	}, {});

	volumeProduct.associate = function (models) {
		// associations can be defined here
		
		};

	return volumeProduct;
};