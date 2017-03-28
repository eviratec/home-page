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

app.factory('CachedQuery', CachedQueryFactory);

CachedQueryFactory.$inject = ['EventEmitter', '$http'];
function CachedQueryFactory (  EventEmitter,   $http) {

  class CachedQuery extends EventEmitter {

    constructor (uri) {

      super();

      this.isDownloaded = false;
      this.uri = uri || 'https://localhost/query.json';
      this.data = {};

    }

    download (refresh = false) {
      return new Promise((resolve, reject) => {

        let isDownloaded = true === this.isDownloaded;
        if (false === refresh && isDownloaded) {
          return resolve(this);
        }

        this._fetch(resolve, reject);

      });
    }

    _fetch (resolve, reject) {
      $http({
        method: 'GET',
        url: this.uri,
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(res => {
        Object.assign(this.data, res.data || {});
        this.emit('downloaded', this.data, res);
        resolve(this);
      }, err => {
        this.emit('download_error', err);
        reject(err);
      });
    }

  }

  return CachedQuery;

}
