
const jswt = require('jsonwebtoken');

const verifyAuth = (req, res, next) => {

    try {
        const access_token = req.cookies.access_token;
        console.log(access_token);
        if (!access_token) {
            res.status(403).send(" token is required for authorization");
            return;
        }
        try {
            const user = jswt.verify(access_token, process.env.JWT_SECRET_KEY);
            req.user = user;
            next();
        } catch (error) {
            return res.status(401).send("Invalid access token");
        }

    } catch (error) {
        next(error);
    }

}
module.exports = verifyAuth; 