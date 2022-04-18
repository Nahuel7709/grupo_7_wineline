function adminMiddleware (req, res, next) {
    if (req.session.userLogged != undefined && req.session.userLogged.admin == true) {
        next()
    } else {
        res.redirect("/admin")
    }
}

module.exports = adminMiddleware