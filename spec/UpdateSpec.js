'use strict';

describe('Update', function() {

  var testAgedBrie = {
    name: 'Aged Brie',
    sellIn: 10,
    quality: 30
  }

  var testBackstagePass = {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 11,
    quality: 30
  }

  var testSulfuras = {
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 15,
    quality: 30
  }

  var testSomeOtherItem = {
    name: "Test Item",
    sellIn: 10,
    quality: 30
  }

  var update;

  beforeEach(funtion () {
    items = new Items([testAgedBrie, testBackstagePass, testSulfuras, testSoeOtherItem])
    update = new Update(items);
  })

  describe('Update all method updates aged brie', function() {

  })



})
