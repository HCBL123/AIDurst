const authMiddleware = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.status(401).send("Please log in");
    }
    next();
};

module.exports = authMiddleware;