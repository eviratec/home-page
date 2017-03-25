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

(function (E,v,i,r,a,t,e,c) {'use strict';
  DOCUMENT=E;
  BODY='body';
  SCRIPT='script';
  CREATE_ELEMENT='createElement';
  DBCE=DOCUMENT[BODY][CREATE_ELEMENT];
  APP_JS_SRC='app.js';


  c=[BODY,'script']
  function $d(tagName) {
    this.el = document.createElement(tagName);
    this.setAttr=function () { };
  }
  function X(_) {
    _=this;
    _.s=$newAppJsScript();

  }
  function $newAppJsScript(s) {
    return new $AppJsScript();
  }
  function $newEl(tagName) {
    return DBCE(tagName);
  }
  function $newScriptEl() {
    return $newEl(SCRIPT);
  }
  function $AppJsScript(_) {
    _=this;
    _.s=$newScriptEl();
    _.setSrc=function(x){_.s.src=x;};
    _.setSrc=function(x){_.s.src=x;};
    $setScriptSrc(_.s, APP_JS_SRC);
  }
})

// const fn = function () {

//   let bodyEl = E.body;

//   $append($newEl('web-app-root'));

//   // $setBodyAttr('ng-app', )

//   $require('app.js');

//   function $require (src, cb) {
    
//     let script = $newEl('script');
    
//     $setScriptSrc(script, src);
//     $setScriptType(script, 'application/javascript');
    
//     $bindLoadEventListener(script, cb);

//     $append(script);

//   }

//   function $setScriptSrc (script, src) {
//     script.src = src;
//   }

//   function $setScriptType (script, type) {
//     script.type = type;
//   }

//   function $bindLoadEventListener (script, cb) {
//     script.addEventListener('load', cb);
//   }

//   function $append (el) {
//     bodyEl.appendChild(el);
//   }

//   function $newEl (type) {
//     return E.createElement(type);
//   }

// };

class Document {
  constructor () {

  }
}

class Window {
  constructor () {

  }
}



class ScriptFunction {
  constructor () {
    
    this.name = 'newFunction';
    this.description = '';
    this.fn = function () {};

  }
}

class InitVar {
  constructor () {
    this.ref = '$undefined';
    this.bootstrapFn = function () { return undefined; };
  }
}

class Script {

  static get WINDOW () {
    return Window;
  }

  static get DOCUMENT () {
    return Document;
  }

  constructor () {

    this.definitions = {
      deps: {},
      vars: {},
      varsToInit: [],
      words: {},
      fns: {},
    };

  }

  run (fn, isRealRun) {
    fn(this);
  }

  fn (name) {
    console.log(`fn: ${name}`);
    return this.definitions.fns[name].fn.bind(undefined, this);
  }

  var (name) {
    console.log(`var: ${name}`);
    return this.definitions.vars[name];
  }

  word (name) {
    console.log(`word: ${name}`);
    return this.definitions.words[name];
  }

  dep (name) {
    console.log(`dep: ${name}`);
    return this.definitions.deps[name];
  }

  define (some, newThings) {
    newThings = newThings || {};
    Object.assign(this.definitions[some], newThings);
    return this;
  }

  defineDependencies (newDependencies) {
    return this.define('deps', newDependencies);
  }

  defineVars (newVars) {
    return this.define('vars', newVars);
  }

  defineWords (newWords) {
    return this.define('words', newWords);
  }

  initVar (ref, bootstrapFn) {
    
    let initVar = new InitVar();
    
    initVar.ref = ref;
    initVar.bootstrapFn = bootstrapFn;
    
    this.definitions.varsToInit.push(initVar);
    
    return this;

  }

  addFn (name, description, fn) {
    
    let newFn = new ScriptFunction();

    newFn.name = name;
    newFn.description = description;
    newFn.fn = fn;

    this.definitions.fns[name] = newFn;

    return this;

  }

}

class Var {
  constructor () {

  }
}

class Word {
  constructor () {

  }
}

var $ = new Script();

$.defineDependencies({
  $window: Script.WINDOW,
  $document: Script.DOCUMENT
});

$.defineVars({
  'aX': 'app.js',
  'aY': 'web-app-root',
  'xA': 'ng-app',
  'xB': 'EviratecWebApp',
})

$.defineWords({
  $b: 'body',
  $ac: 'appendChild',
  $ce: 'createElement',
  $sa: 'setAttribute',
});

$.initVar('$body', function ($) {
  return $.dep('$document')[$.word('$b')];
});

$.addFn('$setBodyAttr', 'Set body attr val', function $setBodyAttr ($, attr, val) {
  $.var('$body')[$.word('$sa')](attr, val);
});

$.addFn('$setScriptSrc', 'Set script el source', function $setScriptSrc ($, script, src) {
  script.src = src;
});

$.addFn('$setScriptType', 'Set script el type', function $setScriptType ($, script, type) {
  script.type = type;
});

$.addFn('$append', 'Creates a new dom element', function $append ($, el) {
  return $.var('$body')[$.word('$ae')](el);
});

$.addFn('$newEl', 'Creates a new dom element', function $newEl ($, type) {
  return $.dep('$document')[$.word('$ce')](type);
});

$.addFn('$require', 'Adds a script tag to the dom', function $require ($, src, cb) {
  
  let scriptEl = $.fn('$newEl')('script');
  
  $.fn('$setScriptSrc')(scriptEl, src);
  $.fn('$setScriptType')(scriptEl, 'application/javascript');
  
  $.fn('$bindLoadEventListener')(scriptEl, cb);

  $.fn('$append')(scriptEl);

});

$.run(function ($) {

  let $append = $.fn('$append');
  let $setBodyAttr = $.fn('$setBodyAttr');
  let $require = $.fn('$require');
  let $newEl = $.fn('$newEl');

  $append($newEl($.var('aY')));

  $setBodyAttr($.var('xA'), $.var('xB'))

  $require($.var('aZ'));

});


// var x = {
//   functions: {
//     a: {
//       name: '$require',
//       source: function $require (src, cb) {
        
//         let script = El('script');
        
//         script.src = src;
//         script.type = 'application/javascript';
        
//         script.addEventListener('load', cb);

//         $useFn('$append')(script);

//       }
//     }
//   }
// }

const WINDOW = '00-WINDOW';
const DOCUMENT = '00-DOCUMENT';

module.exports = {
  l: 'Eviratec'.split(''),
  d: {
    window: WINDOW,
    document: DOCUMENT,
  },
  k: [WINDOW, DOCUMENT, 'EviratecWebApp'],
  fn: fn,
};

// [
//   '(function(',
//   ,
//   '){"use strict";',
//   ,
//   '})(',
//   ');',
// ];

