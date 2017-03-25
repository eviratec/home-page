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
 */'use strict';

(function(E,v,i,r,a,t,e,c){"use strict";

  var window;
  var document;
  var webApp;

  window = E;
  document = window.document;

  webApp = new WebApp('EviratecWebApp', document.body);

  function WebApp (name, baseEl) {

    var appScriptEl;
    var webAppRootEl;

    init();

    function init () {
    
      baseEl.setAttribute('ng-app', name);

      appScriptEl = createAppJsScriptEl();
      appScriptEl.$el.addEventListener('load', function () {
        webAppRootEl = createAppRootEl();
        baseEl.appendChild(webAppRootEl.$el);
      });
      baseEl.appendChild(appScriptEl.$el);

      
    }

    function createAppRootEl () {
      return new NewElem('web-app-root');
    }

    function createAppJsScriptEl () {
      return new NewElem('script', {
        id: 'appJs',
        src: 'ewa.min.js',
      });
    }

  }

  function NewElem (type, attrs) {
    
    var attrKeys;
    var hasAttrs;
    var newElem;

    newElem = this;
    type = type || 'div';

    this.type = type;
    this.$el = document.createElement(type);

    attrs = attrs || {};

    attrKeys = Object.keys(attrs);
    hasAttrs = attrKeys.length > 0;

    if (hasAttrs) {
      attrKeys.forEach(setupElemAttr)
    }

    function setupElemAttr (key) {
      var value;
      value = attrs[key];
      newElem.$el.setAttribute(key, value);
    }

  }

})(window);
