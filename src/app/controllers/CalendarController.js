const Results = require("../models/Results");
const { mongooseToObject } = require("../../util/mongoose");

class CalendarController {
    // Get calendar view
    async show(req, res, next) {
        try {
            const { isLoggedIn, username } = req.session;

            if (!isLoggedIn) {
                return res.status(401).send("Please log in");
            }

            const results = await Results.findOne({ username });
            res.render("calendar", { result: mongooseToObject(results) });
        } catch (err) {
            next(err);
        }
    }

    // Update and display calendar
    async index(req, res, next) {
        try {
            const { isLoggedIn, username } = req.session;

            if (!isLoggedIn) {
                return res.status(401).send("Please log in");
            }

            await Results.updateOne({ username }, req.body);
            const results = await Results.findOne({ username });

            res.render("calendar", { result: mongooseToObject(results) });
        } catch (err) {
            next(err);
        }
    }

    // Show calendar details
    async specific(req, res, next) {
        try {
            const { isLoggedIn, username } = req.session;

            if (!isLoggedIn) {
                return res.status(401).send("Please log in");
            }

            const results = await Results.findOne({ username });
            res.render("calendardetails", { result: mongooseToObject(results) });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CalendarController();