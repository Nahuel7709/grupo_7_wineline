const path = require ("path")

const controller = {

    home: (req,res) => {
            
    return res.render ("home");
    },

    
    login: (req,res) => {
            
    return res.render ("login");
    },

    
    productCart: (req,res) => {
            
    return res.render ("productCart");
    },

    
    productDetail: (req,res) => {
            
    return res.render ("productDetail");
    },

    
    register: (req,res) => {
            
    return res.render ("register");
    },

}


module.exports = controller;

