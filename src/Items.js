'use strict';

var Items = function(itemsArray=[]) {
  this.itemsArray = itemsArray;
}

Items.prototype.add = function (item) {
  this.itemsArray.push(item);
};
