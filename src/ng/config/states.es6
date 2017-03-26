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

app.config(appStates);

appStates.$inject = ['$stateProvider'];
function appStates (  $stateProvider) {

  $stateProvider.state('index', {
    url: '/',
    template: '<index-state class="state-wrapper"></index-state>',
  });

  $stateProvider.state('services', {
    url: '/services',
    template: '<services-state class="state-wrapper"></list-state>',
  });

  $stateProvider.state('products', {
    url: '/products',
    template: '<products-state class="state-wrapper"></list-state>',
  });

  $stateProvider.state('products.ssl-certificates', {
    url: '/ssl-certificates',
    template: '<ssl-certificate-store-state id="products" class="state-wrapper"></list-state>',
  });

  $stateProvider.state('contact', {
    url: '/contact',
    template: '<contact-state class="state-wrapper"></contact-state>',
  });

}

