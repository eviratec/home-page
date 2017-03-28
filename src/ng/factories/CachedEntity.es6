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

app.factory('CachedEntity', CachedEntityFactory);

CachedEntityFactory.$inject = ['EventEmitter', '$http'];
function CachedEntityFactory (  EventEmitter,   $http) {

  class CachedEntity extends EventEmitter {

    constructor (uri) {

      super();

      this.isDownloaded = false;
      this.uri = uri || 'https://localhost/index.json';
      this.data = {};

    }

    download (refresh = false) {
      return new Promise((resolve, reject) => {

        let isDownloaded = true === this.isDownloaded;
        if (false === refresh && isDownloaded) {
          return resolve(this);
        }

        this._httpGet(resolve, reject);

      });
    }

    _httpGet (resolve, reject) {
      $http.get(this.uri).then((res) => {
        Object.assign(this.data, res.data || {});
        resolve(this);
      }, (err) => {
        reject(err);
      });
    }


  }

  return CachedEntity;

}
