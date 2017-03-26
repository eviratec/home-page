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

webAppRootViewController.$inject = ['$scope', '$timeout', '$mdSidenav', '$animate', '$appEnvironment', '$window', '$dbx'];
function webAppRootViewController (  $scope,   $timeout,   $mdSidenav,   $animate,   $appEnvironment,   $window,   $dbx) {

  class WebAppRootViewController {

    static get LEFT_SIDENAV () {
      return 'left';
    }

    constructor () {
      
      this.sidenav = buildToggler(WebAppRootViewController.LEFT_SIDENAV);

      this.isLoading = true;

      this.copyright = $appEnvironment.config.copyright;
      this.menuItems = $dbx.links.nav.global;

      function buildToggler (navID) {
        return function() {
          // Component lookup should always be available since we are not using `ng-if`
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              console.log("toggle left is done");
            });
        };
      }

    }

    toggleSidenav () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav(WebAppRootViewController.LEFT_SIDENAV)
        .toggle()
        .then(function () {
          console.log("toggle left is done");
        });
    }

    isOpenSidenav () {
      return $mdSidenav(WebAppRootViewController.LEFT_SIDENAV).isOpen();
    }

    goto (location) {
      $window.location.pathname = location;
    }

    // toggleSidenav ($event) {
    //   $timeout(() => {
    //     this.sidenav.toggle();
    //   });
    // }

  }

  return new WebAppRootViewController();

}
