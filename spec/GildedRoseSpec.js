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

  var shop;

  beforeEach(function() {
    shop = new Shop();
  })

  describe('Item', function() {
    it('quality goes down by 1 when updated', function() {
      shop.updateQualityNew(testSomeOtherItem);
      expect(testSomeOtherItem.quality).toEqual(29);
    });

    it('quality goes down by 2 when update if sell day has passed', function() {
      testSomeOtherItem.sellIn = 0;
      testSomeOtherItem.quality = 30;
      shop.updateQualityNew(testSomeOtherItem);
      expect(testSomeOtherItem.quality).toEqual(28);
    });
  });

  describe('Aged Brie', function() {

    it('quality goes up by 1 when updated', function() {
      shop.updateQualityBrie(testAgedBrie);
      expect(testAgedBrie.quality).toEqual(31);
    });
  });

  describe('Backstage Passes', function() {

    it('quality goes up by 1 when updated', function() {
      shop.updateQualityBackstagePass(testBackstagePass)
      expect(testBackstagePass.quality).toEqual(31);
    });

    it('quality goes up by 2 when upated if there are 10 or less days to sell in', function() {
      testBackstagePass.sellIn = 9;
      testBackstagePass.quality = 30;
      shop.updateQualityBackstagePass(testBackstagePass)
      expect(testBackstagePass.quality).toEqual(32);
    });

    it('quality goes up by 3 when updated if there are 5 or less days to sell in', function() {
      testBackstagePass.sellIn = 4;
      testBackstagePass.quality = 30;
      shop.updateQualityBackstagePass(testBackstagePass)
      expect(testBackstagePass.quality).toEqual(33);
    });

    it('quality goes to 0 when updated if there are 0 days left to sell in', function() {
      testBackstagePass.sellIn = 0;
      testBackstagePass.quality = 30;
      shop.updateQualityBackstagePass(testBackstagePass)
      expect(testBackstagePass.quality).toEqual(0);
    });
  });

  describe('Sulfuras', function() {

    it('quality doesnt decrease or increase', function() {
      shop.updateQualityNew(testSulfuras)
      expect(testSulfuras.quality).toEqual(30);
    });
  });

});
