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

ServicesStateController.$inject = ['$scope', '$animate', '$mdDialog'];
function ServicesStateController (  $scope,   $animate,   $mdDialog) {

  class ServicesStateController {

    constructor () {
     
      this.wordPress = [{
        icon: 'extension',
        label: 'Plugin development',
        href: '',
        class: '',
      }, {
        icon: 'style',
        label: 'Theme development',
        href: '',
        class: '',
      }, {
        icon: 'settings_backup_restore',
        label: 'Backups & restorations',
        href: '',
        class: '',
      }, {
        icon: 'settings_application',
        label: 'Installations & setups',
        href: '',
        class: '',
      // }, {
      //   icon: 'store',
      //   label: 'Store setup & management',
      //   href: '',
      //   class: '',
      }, {
        icon: 'security',
        label: 'Updates & security',
        href: '',
        class: '',
      }];
     
      this.appsApis = [{
        icon: 'web',
        label: 'Web apps',
        href: '',
        class: '',
      }, {
        icon: 'developer_mode',
        label: 'Mobile apps',
        href: '',
        class: '',
      }, {
        icon: 'devices',
        label: 'Desktop apps',
        href: '',
        class: '',
      }, {
        icon: 'storage',
        label: 'API & SDK design',
        href: '',
        class: '',
      }, {
        icon: 'security',
        label: 'Stack & data security',
        href: '',
        class: '',
      }];
     
      this.awsServices = [{
        icon: '',
        label: 'Lambda script dev',
        href: '',
        class: '',
      }, {
        icon: '',
        label: 'EC2 set-up & maintainence',
        href: '',
        class: '',
      }, {
        icon: '',
        label: 'VPC set-up & maintainence',
        href: '',
        class: '',
      }, {
        icon: '',
        label: 'Route53, domains, & DNS',
        href: '',
        class: '',
      }, {
        icon: '',
        label: 'IAM policy management',
        href: '',
        class: '',
      }];

    }

  }

  return new ServicesStateController();

}
