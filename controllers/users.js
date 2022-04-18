const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } =require("express-validator")
const { User } = require("../database/models");

//ubicacion del archivo json
const filePath = path.resolve(__dirname, "../data/users.json");
//lectura del archivo json y parseado a array-db
const usersArray = JSON.parse(fs.readFileSync(filePath, "utf8"));

const controller = {
  create: (req, res) => {
    res.render("users/register");
  },

  add: (req, res) => {
    const resultValidation = validationResult(req);
    
    if (resultValidation.errors.length > 0){
      return res.render("users/register",{
        errors: resultValidation.mapped(),
        oldData :req.body
      });
    }

    User.findOne({ where: { email: req.body.email } })
    .then((userInDB) => {
        if (userInDB) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya esta registrado'
                    }
                },
                oldData: req.body
            });

        } else {
            let userToCreate = {
                ...req.body,
                avatar: req.file.filename,
                password: bcrypt.hashSync(req.body.password, 10),
                admin: 0
            }
            User.create(userToCreate)
                .then(() => {
                    return res.redirect("/users/login")
                })
        }
    })

    },

    


  login: (req, res) => {
    return res.render("users/login");
  },

  loginProcess: (req, res) => {

      User.findOne({ where: { email: req.body.email } }).then((userToLogin) => {

          if (userToLogin) {
             const isPasswordCorrect = bcrypt.compareSync(req.body.password, userToLogin.password);

              if (isPasswordCorrect) {
                  delete userToLogin.password
                  req.session.userLogged = userToLogin;
                  console.log(req.session)
              
              if(req.body.remember) {
                res.cookie("remember", userToLogin.email, { maxAge: (1000 * 60) * 10 });
              }
              return res.redirect("/users/profile");
          }
        }

          return res.render('users/login', {
              errors: {
                  email: {
                      msg: 'Las credenciales son inválidas'
                  }
              }
          })
      })
},

  account: (req, res) => {
    User.findByPk(req.session.userLogged.id).then((user) => {
            
      return res.render('users/profile',{
          user
      });
  })
	},

  profileEdit: (req, res) => {
    
    User.findByPk(req.session.userLogged.id).then((user) => {
        
        return res.render('users/edit', {
            user
        });
    })
},

profileUpdate: function (req, res) {
  const userID = req.params.id;
  User.update(
    { 
      ...req.body,
      avatar: req.file.filename,
      password: bcrypt.hashSync(req.body.password, 10),
      admin: 0
    },
    { where: { id: userID } }
    )
  return res.redirect("/users/profile");

},

  logout: (req, res) => {
    res.clearCookie("remember");
    req.session.destroy();
		return res.redirect("/");
	}
	

};

module.exports = controller;
