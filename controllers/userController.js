const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const User = require('../models/User');

exports.loginForm = async (req, res) => {
  res.render('login', { title: 'Login' });
};

exports.registerForm = async (req, res) => {
  res.render('register', { title: 'Register' });
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That Email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false,
  });
  req
    .checkBody('password', 'Password Cannot be Blank!')
    .notEmpty()
    .isLength({ min: 5 });
  req
    .checkBody(
      'password-confirm',
      'Confirmed Password cannot be blank, and need minimum 5 characters'
    )
    .notEmpty()
    .isLength({ min: 5 });
  req
    .checkBody('password-confirm', 'Oops! Your passwords do not match')
    .equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.render('register', {
      title: 'Register',
      body: req.body,
      flashes: req.flash(),
    });
    return; // stop the fn from running
  }
  next(); // there were no errors!
};

// regisirer Not log in!!!
// Middleware
exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  const register = promisify(User.register, User);
  await register(user, password);
  res.send('Created!');
  next();
};
