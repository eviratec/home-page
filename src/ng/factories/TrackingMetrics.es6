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

app.factory('TrackingMetrics', TrackingMetricsFactory);

TrackingMetricsFactory.$inject = [];
function TrackingMetricsFactory () {

  class TrackingMetrics {

    constructor () {

      this._d = {};

    }

    setData (key, value) {
      this._d[key] = value;
      return this;
    }

    toJSON () {

      let obj = {};

      Object.keys(this._d).forEach(key => {
        let value = this._d[key];
        obj[key] = value;
      });

      return obj;

    }

  }

  return TrackingMetrics;

}
