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

app.controller('ProductsStateController', ProductsStateController);

ProductsStateController.$inject = ['$queryCache', '$timeout', '$resizeListener', '$mdMedia', 'Price'];
function ProductsStateController (  $queryCache,   $timeout,   $resizeListener,   $mdMedia,   Price) {

  const HEADER_HEIGHT = 110;

  const PRODUCTS = $queryCache.entity('eviratec/products.json');

  PRODUCTS.download().then((query, res) => {
    console.log('eviratec/products.json fetched');
  });

  class ProductsStateController {

    constructor () {

      this.header = {
        headline: 'Products',
      };

      this.catalogue = PRODUCTS;

      this.heroStyle = {
        height: 'auto',
      };

      updateHeroHeight(this, $resizeListener.current.h);

      this.productCategories = [{
        id:"",
        slug:"data-studio",
        label:"Data Studio",
        tag_line:"github.com/data-studio",
        bgImgSrc:"https://s3-ap-southeast-2.amazonaws.com/data-studio/pub/assets/data-studio.png",
        websiteUrl:"https://webui,datastudio.eviratec.software/"
      },{
        id:"",
        slug:"endeavour-app",
        label:"Endeavour App",
        tag_line:"github.com/endeavour-app",
        bgImgSrc:"https://s3-ap-southeast-2.amazonaws.com/endeavour-app/pub/assets/endeavour-app.png",
        websiteUrl:"https://github.com/endeavour-app/"
      }];

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
      }]

      $resizeListener.on('resize', (h) => {
        $timeout(updateHeroHeight, 0, true, this, h);
      });

      function updateHeroHeight (ctrl, h) {

        if ($mdMedia('gt-sm') && h > 640) {
          ctrl.heroStyle.height = (h - HEADER_HEIGHT)+'px';
          return;
        }

        ctrl.heroStyle.height = 'auto';

      }

    }

    listPrice ($product) {
      return new Price($product.prices[0]);
    }

    isWpProductCategory ($category) {
      return 'wp-' === $category.slug.substr(0,3);
    }

  }

  return new ProductsStateController();

}
