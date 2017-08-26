var _ = require("lodash");

var worker = function(array) {
  // do work; return stuff
  return _.sortBy(array, [function(o) {
    return o.quantity;
  }]);
  //
  // users, [function(o) {
  //   return o.user;
  // }]
  // //  _.sortBy(array, function(num) {
  // //   return Math.sin(num);
  // // });
};

module.exports = worker;
