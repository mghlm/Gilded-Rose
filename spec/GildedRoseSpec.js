describe("Gilded Rose", function() {

  var testAgedBrie = {
    name: 'Aged Brie',
    sellIn: 10,
    quality: 30
  }

  var testBackstagePassSellIn10 = {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 9,
    quality: 30
  }

  var testBackstagePass = {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 11,
    quality: 30
  }

  var shop;

  beforeEach(function() {
    shop = new Shop();
  })

  describe('Aged Brie', function() {

    it('quality should go up when updated', function() {
      shop.updateQualityBrie(testAgedBrie);
      expect(testAgedBrie.quality).toEqual(31);
    });
  });

  describe('Backstage Passes', function() {
    it('quality goes up by 1 when updated', function() {
      shop.updateQualityBackstagePass(testBackstagePass)
      expect(testBackstagePass.quality).toEqual(31);
    });

    it('quality goes up by 2 if there are 10 or less days to sell in', function() {
      shop.updateQualityBackstagePass(testBackstagePassSellIn10)
      expect(testBackstagePassSellIn10.quality).toEqual(32);
    });
  });

});
