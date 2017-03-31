/** 
 * Copyright (c) 2017 Callan Peter Milne
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above 
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
 * REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
 * AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
 * INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
 * LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
 * OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
 * PERFORMANCE OF THIS SOFTWARE.
 */

app.factory('Price', PriceFactory);

PriceFactory.$inject = ['$filter'];
function PriceFactory (  $filter) {

  class Price {

    constructor (model) {

      model = model || {
        amount: 0,
        currency: null,
      };

      this.amount = model.amount;
      this.currency = model.currency;

    }

    get prefix () {
      return this.currency.prefix || '?';
    }

    toString () {
      
      if (null === this.currency) {
        return '';
      }

      return this.prefix + $filter('currency')(this.amount, '', 2);
      
    }

  }

  return Price;

}
