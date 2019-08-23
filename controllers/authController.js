const passport = require('passport');

exports.login = passport.authenticate('local', {
  failureFlash: 'Failed login',
  successRedirect: '/',
  failureRedirect: '/login',
  successFlash: 'You are now logged in!',
});
