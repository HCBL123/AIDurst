const Doctors = require("../models/Doctors");
const { multipleMongooseToObject, mongooseToObject } = require("../../util/mongoose");

class BooksController {
    async index(req, res, next) {
        try {
            const profiles = await Doctors.find({});
            res.render("books", {
                profiles: multipleMongooseToObject(profiles),
            });
        } catch (err) {
            next(err);
        }
    }

    async show(req, res, next) {
        try {
            const profile = await Doctors.findById(req.params._id);

            if (!profile) {
                return res.status(404).send("Profile not found");
            }

            res.render("specbooks", {
                profiles: mongooseToObject(profile),
            });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new BooksController();