const fs = require("fs");
const path = require("path");

const {User} = require('../database/models/index.js');


function autoLoginMidddleware(req, res, next) {

   
   const emailCookie = req.cookies.email

   if (emailCookie != undefined) {
       User.findOne ({
           where: {
               email: emailCookie
           }
       })
       .then(UserFromCookie => {
           req.session.userLogged = UserFromCookie;
           res.locals.userData = req.session.userLogged;
           next();
       })


   } else {
       next();
   }
}

module.exports = autoLoginMidddleware;