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

app.factory('ProgressTracker', ProgressTrackerFactory);

ProgressTrackerFactory.$inject = ['EventEmitter'];
function ProgressTrackerFactory (  EventEmitter) {

  return class ProgressTracker extends EventEmitter {

    static isTracker (obj) {
      return obj instanceof ProgressTracker;
    }

    constructor () {

      super();

      this.active = false;

    }

    activate () {

      if (true === this.active) {
        return this;
      }

      this.active = true;

      this.emit('start');

      return this;

    }

    deactivate () {

      if (false === this.active) {
        return this;
      }

      this.active = false;

      this.emit('stop');

      return this;

    }

  };

}
