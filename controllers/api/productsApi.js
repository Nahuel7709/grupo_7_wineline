const { Product } = require ("../../database/models")

module.exports = {
    show: async (req,res) => {
        const products = await Product.findAll({
            include: ["categories"]
        });
        return res.json ({
            total: products.length,
            products:products
        })
    },

    detail: async (req, res) => {
		const productDetail = await Product.findByPk(req.params.id, {
            include: ["categories", "brand", "varieties", "volumes"]
        });
		return res.status(200).json(productDetail);
	},

};