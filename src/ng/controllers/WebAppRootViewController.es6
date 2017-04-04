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

app.controller('WebAppRootViewController', webAppRootViewController);

webAppRootViewController.$inject = ['$scope', '$timeout', '$assetUri', '$mdSidenav', '$animate', '$appEnvironment', '$window', '$dbx', '$analytics'];
function webAppRootViewController (  $scope,   $timeout,   $assetUri,   $mdSidenav,   $animate,   $appEnvironment,   $window,   $dbx,   $analytics) {

  class WebAppRootViewController {

    static get LEFT_SIDENAV () {
      return 'left';
    }

    constructor () {
      
      this.sidenav = buildToggler(WebAppRootViewController.LEFT_SIDENAV);

      this.isLoading = true;

      this.copyright = $appEnvironment.config.copyright;
      this.menuItems = $dbx.links.nav.global;

      this.logoAssetUri = $assetUri('images/logov7c-dist.png');

      function buildToggler (navID) {
        return function() {
          // Component lookup should always be available since we are not using `ng-if`
          $mdSidenav(navID)
            .toggle()
            .then(() => {
              // meow.
            });
        };
      }

      $scope.$on('$stateChangeSuccess', () => {
        scrollTop();
        $analytics.trackPageView();
      });

      function scrollTop () {

        try {

          let mdContentElem;
          let stateElem;

          mdContentElem = document.getElementsByClassName('state-section')[0];
          if (!mdContentElem) {
            return;
          }

          stateElem = mdContentElem.parentElement.parentElement.parentElement;
          if (!stateElem) {
            return;
          }

          stateElem.scrollTop = 0;

        }
        catch (err) {
          console.log('stateElem.scrollTop unsupported');
          console.log(err.stack);
        }

      }

    }

    toggleSidenav () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(WebAppRootViewController.LEFT_SIDENAV)
        .toggle()
        .then(() => {
          // meow.
        });
    }

    isOpenSidenav () {
      return $mdSidenav(WebAppRootViewController.LEFT_SIDENAV).isOpen();
    }

    goto (location) {
      $window.location.pathname = location;
    }

  }

  return new WebAppRootViewController();

}
