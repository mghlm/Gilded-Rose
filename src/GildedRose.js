const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

const SELL_DAY_PASSED = 0;

const SULFURAS = 'Sulfuras, Hand of Ragnaros';
const BACKSTAGE_PASS = 'Backstage passes to a TAFKAL80ETC concert';
const AGED_BRIE = 'Aged Brie';

// ITEM CLASS FOR EACH KIND


var Shop = function(items=[]) {
    this.items = items;
  }

  Shop.prototype.updateAll = function (itemsArray) {
    for (var i = 0; items.length; i++) {
      if (_itemBackstagePass(item[i])) {
        this.updateQualityBackstagePass(itemsArray[i]);
      } else if (_itemAgedBrie(item[i])) {
        this.updateQualityAgedBrie(itemsArray[i]);
      } else {
        this.updateQualityNormal(itemsArray[i]);
      }
    }
  };

  Shop.prototype.updateQualityBackstagePass = function (item) {
    if (_qualityWithinRange(item)) {
      if (_sellInMoreThanTen(item)) {
        _addToQuality(item, 1);
      } else if (_sellInTenOrLess(item)) {
          _addToQuality(item, 2);
      } else if (_sellInFiveOrLess(item)) {
          _addToQuality(item, 3);
      } else if (_sellInZero(item)) {
          item.quality = MIN_QUALITY;
      }
    }
  };

  Shop.prototype.updateQualityBrie = function (item) {
    if ((item.sellIn > SELL_DAY_PASSED) && _qualityWithinRange(item)) {
      _addToQuality(item, 1);
    }
  };

  Shop.prototype.updateQualityNormal = function (item) {
    if ((!_itemSulfuras(item)) && (!_sellInZero(item))) {
      _substractFromQuality(item, 1);
    } else if ((!_itemSulfuras(item)) && (_sellInZero(item)))  {
      _substractFromQuality(item, 2);
    }
  };

  //private functions:

  function _qualityWithinRange(item) {
    return item.quality > MIN_QUALITY && item.quality < MAX_QUALITY;
  }

  function _sellInMoreThanTen(item) {
    return item.sellIn > 10;
  }

  function _sellInTenOrLess(item) {
    return item.sellIn <= 10 && item.sellIn > 5;
  }

  function _sellInFiveOrLess(item) {
    return item.sellIn <= 5 && item.sellIn > 0;
  }

  function _sellInZero(item) {
    return item.sellIn <= SELL_DAY_PASSED;
  }

  function _itemSulfuras(item) {
    return item.name === SULFURAS;
  }

  function _itemBackstagePass(item) {
    return item.name === BACKSTAGE_PASS;
  }

  function _itemAgedBrie(item) {
    return item.name === AGED_BRIE;
  }

  function _addToQuality(item, increaseBy) {
    item.quality += increaseBy;
  }

  function _substractFromQuality(item, substractBy) {
    item.quality -= substractBy;
  }
