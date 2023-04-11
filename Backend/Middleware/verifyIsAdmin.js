
const verifyIsAdmin = (req, res, next) => {

    try {
        const user = req.user;
        if (user && user.isAdmin) {
            next();
            return;
        }

        return res.status(401).send("Unauthorized. Admin required");

    } catch (error) {
        next(error);
    }
}

module.exports = verifyIsAdmin; 