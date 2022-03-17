module.exports = (sequelize, DataTypes) => {
	// 1. Definir la estructura de la tabla
	const User = sequelize.define('User', {
		name: DataTypes.STRING,
        userName: DataTypes.STRING,
		email: DataTypes.STRING,
        password: DataTypes.STRING,
        country: DataTypes.STRING,
        adress: DataTypes.STRING,
		cellphone: DataTypes.STRING,
        avatar: DataTypes.STRING,
		admin: DataTypes.BOOLEAN,
        
		
	}, {});

	User.associate = function (models) {
		// associations can be defined here
		
		};

	return User;
};