module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Volume = sequelize.define('Volume', {
		name: DataTypes.STRING,
		
	}, {});

	Volume.associate = function (models) {
		
		Volume.belongsToMany(models.Product, {
			as: "products",
			through: "volumeproduct",
			foreignKey: "volumeId",
			otherKey: "productId"
		});
		
		};

	return Volume;
};