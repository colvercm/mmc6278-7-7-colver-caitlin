function checkAuth(req, res, next) {
	// Check req.session.loggedIn to see if the user is logged in
	// If the user is logged in, call next()
	if (req.session && req.session.loggedIn) {
		return next()
	} else {

	// If the user is not logged in, redirect to /login
		res.redirect('/login').send('User not logged in')
	}
}
module.exports = checkAuth
