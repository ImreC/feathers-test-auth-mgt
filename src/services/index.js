const users = require('./users/users.service.js');
const mailer = require('./mailer/mailer.service.js');
const authManagement = require('./authmanagement/authmanagement.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(mailer);
  app.configure(authManagement);
};
