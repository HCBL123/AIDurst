// Doctor models to access data from mongodb
const Doctors = require("../models/Doctors");
const bcrypt = require('bcryptjs');
// FUNCTION to convert scheme to object
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class LoginController {
    async index(req, res, next) {
        try {
            const profiles = await Doctors.find({});
            res.render("login", {
                profiles: multipleMongooseToObject(profiles),
            });
        } catch (err) {
            next(err);
        }
    }

    // [GET] /:slug
    show(req, res) {
        res.render("results");
    }

    // [POST] /login
    async login(req, res, next) {
        try {
            const { codebn: username, passbn: password } = req.body;

            const user = await Doctors.findOne({ username });

            if (!user) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            // Uncomment when implementing password hashing
            // const isValidPassword = await bcrypt.compare(password, user.password);
            // if (!isValidPassword) {
            //   return res.status(401).json({ message: "Invalid credentials" });
            // }

            // Simple password check for now
            if (user.password !== password) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            req.session.isLoggedIn = true;
            req.session.username = username;

            res.redirect(`/profile/${username}`);
        } catch (err) {
            next(err);
        }
    }

    async logout(req, res, next) {
        try {
            await req.session.destroy();
            res.redirect("home");
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new LoginController();