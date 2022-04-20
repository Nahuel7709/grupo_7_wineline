const { User } = require ("../../database/models")

module.exports = {
    all: async (req,res) => {
        const users = await User.findAll();
        return res.json ({
            total: users.length,
            users:users
        })
    },

    user: async (req, res) => {
		const userDetail = await User.findByPk(req.params.id);
		return res.status(200).json(userDetail);
	},

};