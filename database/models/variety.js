module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const Variety = sequelize.define('Variety', {
		name: DataTypes.STRING,
		
	}, {});

	Variety.associate = function (models) {
		// associations can be defined here
		
		};

	return Variety;
};