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

  Shop.prototype.updateQualityBrie = function (item) {
    if ((item.sellIn > 0) && (item.quality >= 0) && (item.quality < 50)) {
      item.quality += 1;
    }
  };

  Shop.prototype.updateQualityBackstagePass = function (item) {
    if ((item.quality >= 0) && (item.quality < 50)) { //checks if quality is within range 0..50
      if (item.sellIn > 10) { //checks if sellIn is higher than 10
        item.quality += 1;
      } else if ((item.sellIn <= 10) && (item.sellIn > 5)) { //checks if sellIn is within range 5..10
          item.quality += 2;
      } else if ((item.sellIn <= 5) && (item.sellIn > 0)) { //cehcks if sellIn is within range 0..10
          item.quality += 3;
      } else if (item.sellIn === 0) {
          item.quality = 0;
      }
    }
  };




  Shop.prototype.updateQuality = function () {

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
