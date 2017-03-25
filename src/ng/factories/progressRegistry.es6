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

app.factory('$progressRegistry', progressRegistryFactory);

progressRegistryFactory.$inject = ['ProgressTracker'];
function progressRegistryFactory (  ProgressTracker) {

  class ProgressRegistry {

    constructor () {

      this.trackers = new Map();

    }

    tracker (id) {

      if (this.hasTrackerWithId(id)) {
        return this.getTrackerById(id);
      }

      let tracker = createProgressTracker();

      this.setTrackerById(id, tracker);

      return tracker;

    }

    setTrackerById (id, tracker) {

      let invalidTracker = !ProgressTracker.isTracker(tracker);
      if (invalidTracker) {
        return this;
      }

      this.trackers.set(id, tracker);

      return this;

    }

    hasTrackerWithId (id) {
      return this.trackers.has(id);
    }

    getTrackerById (id) {
      return this.trackers.get(id);
    }

  }

  return new ProgressRegistry();

  function createProgressTracker () {
    return new ProgressTracker();
  }

}
