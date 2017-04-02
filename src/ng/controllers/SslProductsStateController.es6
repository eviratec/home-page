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

app.controller('SslProductsStateController', SslProductsStateController);

SslProductsStateController.$inject = ['$queryCache', '$timeout', 'Price'];
function SslProductsStateController (  $queryCache,   $timeout,   Price) {

  const PRODUCTS = $queryCache.entity('eviratec/products.json');

  PRODUCTS.download().then((query, res) => {
    console.log('eviratec/products.json fetched');
  });

  class SslProductsStateController {

    constructor () {

      this.header = {
        headline: 'Products',
      };

      this.catalogue = PRODUCTS;

      this.vendors = [{
        id: '356b4ec8-a556-4ea8-8b88-2801de4deba1',
        name: 'Symantec',
      }, {
        id: 'bb95f5c4-35e4-4fd1-8b92-424eda9f37d6',
        name: 'Thawte',
      }, {
        id: 'e58be64e-f4d7-407d-a61e-b1dea3dbb5a0',
        name: 'GeoTrust',
      }, {
        id: '565d9353-ef34-4b8a-9da0-cb8f60e9e1f5',
        name: 'Comodo',
      }, {
        id: '916bd31d-4b72-466d-a7b8-a5cc85f6808b',
        name: 'RapidSSL',
      }];

    }

    listPrice ($product) {
      return new Price($product.prices[0]);
    }

    isWpProductCategory ($category) {
      return 'wp-' === $category.slug.substr(0,3);
    }

  }

  return new SslProductsStateController();

}
