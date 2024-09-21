// Doctor models to access data from mongodb
const Doctors = require("../models/Doctors");
const bcrypt = require('bcryptjs');
// FUNCTION to convert scheme to object
const { multipleMongooseToObject } = require("../../util/mongoose");
const { mongooseToObject } = require("../../util/mongoose");

class LoginController {
  index(req, res, next) {
    Doctors.find({})
      .then((profiles) => {
        res.render("login", {
          profiles: multipleMongooseToObject(profiles),
        });
      })
      .catch(next);
  }

  // [GET] /:slug
  show(req, res) {
    res.render("results");
  }

  // [POST] /login
  async login(req, res, next) {
    const usr = req.body.codebn,
      pass = req.body.passbn;
    const user = await Doctors.exists({ username: usr, password: pass });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }
      req.session.isLoggedIn = true;
      req.session.username = usr;

      res.redirect("/profile/" + usr);
    }
  }

  async logout(req, res, next) {
    await req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("home");
      }
    });
  }
}

module.exports = new LoginController();
