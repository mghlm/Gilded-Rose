class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

var Shop = function(items = 0) {
    this.items = items;
  }


  Shop.prototype.updateQualityBackstagePass = function (item) {
    if (_qualityWithinRange(item)) {
      if (_sellInMoreThanTen(item)) { //checks if sellIn is higher than 10
        item.quality += 1;
      } else if (_sellInTenOrLess(item)) { //checks if sellIn is within range 5..10
          item.quality += 2;
      } else if (_sellInFiveOrLess(item)) { //cehcks if sellIn is within range 0..10
          item.quality += 3;
      } else if (_sellInZero(item)) {
          item.quality = 0;
      }
    }
  };

  Shop.prototype.updateQualityBrie = function (item) {
    if ((item.sellIn > 0) && _qualityWithinRange(item)) {
      item.quality += 1;
    }
  };

  Shop.prototype.updateQualityNew = function (item) {
    if ((!_itemSulfuras(item)) && (!_sellInZero(item))) {
      item.quality -= 1;
    } else if ((!_itemSulfuras(item)) && (_sellInZero(item)))  {
      item.quality -= 2;
    }
  };


  //private functions:

  //functions for all quality updates:
  function _qualityWithinRange(item) {
    return item.quality > 0 && item.quality < 50;
  }

  //functions for backstage pass quality updates:
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
    return item.sellIn <= 0;
  }

  //functions for sulfuras:
  function _itemSulfuras(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  function _itemBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  function _itemAgedBrie(item) {
    return item.name === 'Aged Brie';
  }



  //OLD CODE:

  // Shop.prototype.updateQuality = function () {
  //
  //   for (var i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1
  //         }
  //       }
  //     }
  //   }
  //
  //   return this.items;
  // }
