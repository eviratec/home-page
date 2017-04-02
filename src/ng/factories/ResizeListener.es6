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

app.factory('ResizeListener', ResizeListenerFactory);

ResizeListenerFactory.$inject = ['EventEmitter'];
function ResizeListenerFactory (  EventEmitter) {

  class ResizeListener extends EventEmitter {

    constructor () {

      super();

      this.current = {
        h: 0,
        w: 0,
      };

      this.next = {
        h: 0,
        w: 0,
      };

      this.on('resize', (h, w) => {
        console.log('resize ', h, w);
      });

    }

    notify (h, w) {

      this.next.h = h;
      this.next.w = w;

      this.once('resize', () => {
        this.current.h = h;
        this.current.w = w;
      });

      this.emit('resize', h, w);

      return this;

    }

  }

  return ResizeListener;

}
