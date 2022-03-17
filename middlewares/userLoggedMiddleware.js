function userLoggedMiddleware (req, res, next) {
	res.locals.isAnUserLogged = false;

	if (req.session.userLogged !== undefined) {
		res.locals.isAnUserLogged = true;
		res.locals.userData = {
			name: req.session.userLogged.name,
			avatar: req.session.userLogged.avatar,
            userName: req.session.userLogged.userName,
            adress: req.session.userLogged.adress,
            cellphone: req.session.userLogged.cellphone,
            email: req.session.userLogged.email,
            country: req.session.userLogged.country,

		}
	}
    
	next();
}

module.exports = userLoggedMiddleware;