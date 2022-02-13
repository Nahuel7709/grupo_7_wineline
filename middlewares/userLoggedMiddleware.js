function userLoggedMiddleware (req, res, next) {
	res.locals.isAnUserLogged = false;

	if (req.session.userLogged !== undefined) {
		res.locals.isAnUserLogged = true;
		res.locals.userData = {
			name: req.session.userLogged.usersName,
			avatar: req.session.userLogged.usersAvatar,
            nick: req.session.userLogged.usersId,
            direc: req.session.userLogged.usersDirec,
            tel: req.session.userLogged.usersTel,
            email: req.session.userLogged.email,
            country: req.session.userLogged.country,

		}
	}
    
	next();
}

module.exports = userLoggedMiddleware;