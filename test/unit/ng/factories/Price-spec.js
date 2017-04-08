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

    it('value should be zero (0) initially', function () {
      expect(price.amount).toEqual(0);
    });

  });

});
