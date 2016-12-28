var escape = require("escape-html");

module.exports = function(source) {
  return escape(source).replace(/([{}])/g, "{{'$1'}}");
};
