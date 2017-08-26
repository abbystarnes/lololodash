// include the Lo-Dash library
var _ = require("lodash");

var worker = function(arg) {
  // do work; return stuff
  return _.filter(arg, {
    'active': true
  });
};


// export the worker function as a nodejs module
module.exports = worker;
