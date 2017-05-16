describe("Gilded Rose", function() {

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
    it('quality should go up when updated', function() {
      shop.updateQualityBackstagePass(testBackstagePass)
      expect(testBackstagePass.quality).toEqual(31);
    });
  });

});
