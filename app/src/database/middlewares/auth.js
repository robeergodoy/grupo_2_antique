const locals = (req, res, next) => {
    console.log('Pasamos por aca');
    
    res.locals.isAuthenticated = false
    
    if(req.session.user) {
        res.locals.isAuthenticated = true
        res.locals.user = req.session.user
    }
    
    next()
}

module.exports = locals