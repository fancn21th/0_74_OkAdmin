const Handlebars = require("handlebars");

const register = () => {
  Handlebars.registerHelper("json", context => JSON.stringify(context));
};

module.exports = register;
