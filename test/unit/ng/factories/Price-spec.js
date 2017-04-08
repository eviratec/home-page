'use strict';

describe('A Price', function () {

  var Price;
  var price;

  beforeEach(function () {

    module('EviratecWebApp');

    inject(function (Price) {

      price = new Price();

    });

  });

  describe('price.amount', function () {

    it('value should be zero (0) by default', function () {
      expect(price.amount).toEqual(0);
    });

    it('currency should be null (NULL) by default', function () {
      expect(price.currency).toBe(null);
    });

  });

});
