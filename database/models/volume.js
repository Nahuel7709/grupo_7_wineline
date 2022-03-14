module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Volume = sequelize.define('Volume', {
		name: DataTypes.STRING,
		
	}, {});

	Volume.associate = function (models) {
		// associations can be defined here
		
		};

	return Volume;
};