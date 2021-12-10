const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const {User, Basker} = require('../models/models');

class UserController {
    async registration (req, res) {
        const {email, password, role} = req.body;
        if (!email || !password) {
            return next(ApiError.badRequest("Wrong email or password"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await User.create({email, role, password});
    }

    async login (req, res) {

    }

    async check (req, res, next) {
        const {id} = req.query;
        if (!id) {
            return  next(ApiError.badRequest("No ID was defined"));
        }
        res.json(id);
    }
}

module.exports = new UserController();