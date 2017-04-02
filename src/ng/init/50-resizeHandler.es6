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

app.run(resizeHandlerInit);

resizeHandlerInit.$inject = ['$resizeListener', '$window'];
function resizeHandlerInit (  $resizeListener,   $window) {

  let unsupported = 'function' !== typeof $window.addEventListener;
  if (unsupported) {
    return;
  }

  bindResizeListener();
  notifyResizeListener($window.innerHeight, $window.innerWidth);

  function bindResizeListener () {
    $window.addEventListener('resize', resizeHandler);
  }

  function resizeHandler (ev) {

    let h;
    let w;

    let srcEl = ev.srcElement;

    h = srcEl.innerHeight;
    w = srcEl.innerWidth;

    notifyResizeListener(h, w);

  }

  function notifyResizeListener (h, w) {
    $resizeListener.notify(h, w);
  }

};
