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

app.controller('PageHeaderDirectiveController', PageHeaderDirectiveController);

PageHeaderDirectiveController.$inject = ['$scope', '$sso'];
function PageHeaderDirectiveController (  $scope,   $sso) {

  class PageHeaderDirectiveController {

    constructor () {

      let header = $scope.ngModel || {};

      this.icon = header.icon || 'chevron_right';
      this.headline = header.headline || 'New page';

      this.sso = $sso;

    }

    login () {

      window.addEventListener('focus', eventListener);

      if (!$sso.login()) {
        offWindowFocus()
      }

      function eventListener () {

        $sso.refresh().then(() => {
          $scope.$apply();
        });

        offWindowFocus();

      }

      function offWindowFocus () {
        window.removeEventListener('focus', eventListener);
      }

    }

    logout () {
      $sso.logout().then(() => {
        $scope.$apply();
      });
    }

  }

  return new PageHeaderDirectiveController();

}
