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

app.factory('$sso', ssoFactory);

ssoFactory.$inject = ['$appEnvironment', '$http', '$session'];
function ssoFactory (  $appEnvironment,   $http,   $session) {

  const SSO_HOST = $appEnvironment.config.ssoHost;
  const SSO_DIALOG_ID = 'eviratecSsoDialog';
  const DIALOG_OPTS = 'width=800,height=500,resizable=yes,scrollbars=yes,status=yes';

  class Sso {

    constructor (host) {

      this.remoteHost = host;

      this.d = {
        anonymous: true,
      };

      this.session = $session;

    }

    get isLoggedIn () {
      return false === this.d.anonymous;
    }

    get userFullName () {
      if (!this.isLoggedIn) {
        return '';
      }

      let profile;

      profile = this.d.login.owner;

      return `${profile.given_name} ${profile.family_name}`;

    }

    init () {
      fetchSsoId(this.remoteHost, this.session.id)
        .then((d) => {
          Object.assign(this.d, d);
        });
    }

    refresh () {
      return new Promise((resolve, reject) => {
        fetchSsoId(this.remoteHost, this.session.id)
          .then((d) => {
            Object.assign(this.d, d);
            resolve();
          });
      });
    }

    login () {
      
      if (this.isLoggedIn) {
        return false;
      }

      let dialogUrl = loginDialogUrl(this);

      return window.open(dialogUrl, SSO_DIALOG_ID, DIALOG_OPTS);

    }

    logout () {

      try {
        ssoLogout(this.remoteHost, this.session.id);
      }
      catch (err) {
        // supress error
      }
      
      this.session.reset();

      return this.refresh();

    }

  }

  return new Sso(SSO_HOST);

  function fetchSsoId (ssoHost, session_id) {
    return new Promise((resolve, reject) => {
      $http.get(`${ssoHost}/sso/id?a=${session_id}`).then((res) => {
        resolve(res.data);
      }, () => {
        reject();
      });
    });
  }

  function ssoLogout (ssoHost, session_id) {
    return new Promise((resolve, reject) => {
      $http.post(`${ssoHost}/sso/logout?a=${session_id}`).then((res) => {
        resolve(res.data);
      }, () => {
        reject();
      });
    });
  }

  function loginDialogUrl (sso) {
    return sso.d.loginUrl;
  }

}
