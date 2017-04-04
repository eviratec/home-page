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

app.run(initStyleSheets);

initStyleSheets.$inject = ['$assetUri'];
function initStyleSheets (  $assetUri) {

  let styleSheets = [
    $assetUri('ewa.min.css'),
    'https://file.myfontastic.com/n6vo44Re5QaWo8oCKShBs7/icons.css',
    'https://fonts.googleapis.com/css?family=Signika+Negative:300,400,600|Ubuntu',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
  ];

  let linkEls = [];
  let linkElsByHref = {};

  loadStyleSheets();

  function loadStyleSheets () {

    styleSheets.forEach(href => {
      let linkEl = newLinkEl(href);
      linkEls.push(linkEl);
      linkElsByHref[href] = linkEl;
      document.body.appendChild(linkEl);
    });

  }
  
  function newLinkEl (href, rel, type) {
    
    let linkEl = document.createElement('link');

    rel = rel || 'stylesheet';
    type = type || 'text/css';

    linkEl.setAttribute('href', href);
    
    if (undefined !== rel) {
      linkEl.setAttribute('rel', rel);
    }
    
    if (undefined !== type) {
      linkEl.setAttribute('type', type);
    }

    return linkEl;

  }

};
