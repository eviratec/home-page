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

app.controller('ServicesStateController', ServicesStateController);

ServicesStateController.$inject = ['$scope', '$animate', '$mdDialog', '$queryCache'];
function ServicesStateController (  $scope,   $animate,   $mdDialog,   $queryCache) {

  const SERVICES = $queryCache.entity('eviratec/services.json');

  SERVICES.download().then((query, res) => {
    console.log('eviratec/services.json fetched');
  });

  class ServicesStateController {

    constructor () {

      this.header = {
        headline: 'Services & Service Rates',
      };

      this.groups = SERVICES;

      this.cardStylesByGroupCode = {
        WP: "position:relative;background-color:#0087be;background:linear-gradient(to bottom right,#0087be 0,#01579B 100%);color:#fff;padding:8px 24px;",
        APP_DEV: "background-color:#43853d;background:linear-gradient(to bottom,#37474F 0,#263238 100%);color:#fff;padding:8px 24px;",
        AWS: "background-color:#eeba37;background:linear-gradient(to top right,#FF9100 0,#eeba37 100%);color:#fff;padding:8px 24px;"
      };

      this.iconsByServiceCode = {
        WP_PLUGIN_DEV: 'extension',
        WP_THEME_DEV: 'style',
        WP_DR: 'settings_backup_restore',
        WP_SETUP: 'settings_application',
        WP_MAINTENANCE: 'security',
        WEB_APP_DEV: 'web',
        MOBILE_APP_DEV: 'developer_mode',
        DESKTOP_APP_DEV: 'devices',
        API_SDK_DESIGN: 'storage',
        DATA_STACK_SECURITY: 'security',
      };

    }

    itmIcon (serviceCode) {
      return this.iconsByServiceCode[serviceCode] || '';
    }

    itmHref (serviceCode) {
      return '';
    }

    itmClass (serviceCode) {
      return '';
    }

    cardStyle (groupCode) {
      return this.cardStylesByGroupCode[groupCode] || '';
    }

  }

  return new ServicesStateController();

}
