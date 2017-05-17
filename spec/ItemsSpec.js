'use strict';

describe('Items', function() {

  var testItem = {
    name: 'Test Item',
    sellIn: 10,
    quality: 30
  }

  var items;

  beforeEach(function() {
    items = new Items;
  })

  describe('Add new item', function() {
    it('adds a new item to all array', function() {
      items.add(testItem);
      expect(items.itemsArray).toEqual([{
                                  name: 'Test Item',
                                  sellIn: 10,
                                  quality: 30
                                }])
    })
  })
})
