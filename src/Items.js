'use strict';

var Items = function() {
  this.all = [];
}

Items.prototype.add = function (item) {
  this.all.push(item);
};
