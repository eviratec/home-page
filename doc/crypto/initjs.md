# Crypto: Eviratec Web App Loader Init JS

## Steps

### Step 1.

### Step 2.

### Step 3.

### Step 4.



### Step 5.

```html
  <script id="ewaLoaderJs">

    /**
     * Eviratec Web Application
     * Copyright © 2016 Eviratec.com
     */

    (function (E,v,i,r,a,t,e,c) {'use strict';

      /** decrypt **/

      i = [
        '19*s7Xzqs1x252z24282X2M27+%"*SM?SX4z7X")-#-#??584?@zs!q@)-#??584?!q7*&MsX)-#??584?@M3_QQ)-#-#',
        '??@zs!q@?/?x)-#??!q7*&MsX?/?@zs!q@=!q7*&MsX)-#-#??@M3_QQ?/?sM@?gM3_QQ1}x5z48XM7gM3_QQ}2?!q7*&',
        'MsX=3q!(+)-#-#??9*s7Xzqs?gM3_QQ?1s8&M2?38SMxZ+?%-#-#????584?8QQ,74zQXxZ)-#????584?@M3_QQ<qqXx',
        'Z)-#-#????zszX1+)-#-#????9*s7Xzqs?zszX?1+?%-#????-#??????38SMxZ=SMX_XX4z3*XM1}sjv8QQ}2?s8&M+)',
        '-#-#??????8QQ,74zQXxZ?/?74M8XM_QQkS,74zQXxZ1+)-#??????8QQ,74zQXxZ=>MZ=8!!x5MsXtzSXMsM41}Zq8!}',
        '2?9*s7Xzqs?1+?%-#????????@M3_QQ<qqXxZ?/?74M8XM_QQ<qqXxZ1+)-#????????38SMxZ=8QQMs!G{zZ!1@M3_QQ',
        '<qqXxZ=>MZ+)-#??????~+)-#??????38SMxZ=8QQMs!G{zZ!18QQ,74zQXxZ=>MZ+)-#-#??????-#????~-#-#????9',
        '*s7Xzqs?74M8XM_QQ<qqXxZ?1+?%-#??????4MX*4s?sM@?EM@xZM&1}@M3v8QQv4qqX}+)-#????~-#-#????9*s7Xzq',
        's?74M8XM_QQkS,74zQXxZ?1+?%-#??????4MX*4s?sM@?EM@xZM&1}S74zQX}2?%-#????????z!T?}8QQkS}2-#?????',
        '???S47T?}M@8=&zs=RS}2-#??????~+)-#????~-#-#??~-#-#??9*s7Xzqs?EM@xZM&?1X(QM2?8XX4S+?%-#????-#?',
        '???584?8XX4uM(S)-#????584?{8S_XX4S)-#????584?sM@xZM&)-#-#????sM@xZM&?/?X{zS)-#????X(QM?/?X(QM',
        '?..?}!z5})-#-#????X{zS=X(QM?/?X(QM)-#????X{zS=>MZ?/?!q7*&MsX=74M8XMxZM&MsX1X(QM+)-#-#????8XX4',
        'S?/?8XX4S?..?%~)-#-#????8XX4uM(S?/?f3RM7X=UM(S18XX4S+)-#????{8S_XX4S?/?8XX4uM(S=ZMsjX{?F?w)-#',
        '-#????z9?1{8S_XX4S+?%-#??????8XX4uM(S=9q4x87{1SMX*QxZM&_XX4+-#????~-#-#????9*s7Xzqs?SMX*QxZM&',
        '_XX4?1UM(+?%-#??????584?58Z*M)-#??????58Z*M?/?8XX4SWUM(H)-#??????sM@xZM&=>MZ=SMX_XX4z3*XM1UM(',
        '2?58Z*M+)-#????~-#-#??~-#-#~+1@zs!q@+)-#',
        ].join('');

      r = {
        '1': [ 40], '2': [ 44], '3': [ 98], '4': [114], '5': [118], '7': [ 99], '8': [ 97], '9': [102],
        '#': [ 10], '-': [ 13], '?': [ 32], '"': [ 34], '>': [ 36], '}': [ 39], '+': [ 41], 'v': [ 45],
        '=': [ 46], 'w': [ 48], 'T': [ 58], ')': [ 59], '/': [ 61], 'F': [ 62], '_': [ 65], 'G': [ 67],
        'x': [ 69], 'k': [ 74], 'u': [ 75], 't': [ 76], 'E': [ 78], 'f': [ 79], '<': [ 82], ',': [ 83],
        'g': [ 87], 'W': [ 91], 'H': [ 93], '!': [100], 'M': [101], 'j': [103], '{': [104], 'z': [105],
        'R': [106], 'U': [107], 'Z': [108], '&': [109], 's': [110], 'q': [111], 'Q': [112], 'S': [115],
        'X': [116], '*': [117], '@': [119], '(': [121], '%': [123], '.': [124], '~': [125],
      };

      init();

      function init () {
        a = decrypt(i,r);
        t = v.createElement('script');
        t.innerHTML = a;
        v.body.append(t);
      }

      function decrypt (message, map) {

        var c;
        var d;

        c = [];
        d = String.fromCharCode;

        message.split('').forEach(function (k) {
          
          var newChar;
          var key;
          
          key = map[k];
          newChar = d(key[0]);

          c.push(newChar);

        });

        return c.join('');

      }

    })(window, document);

  </script>
```

### Step 6.

```html
  <script id="ewaLoaderInitJs">
    (function (E,v,i,r,a,t,e,c) {'use strict';i = [  /*  --  Eviratec Web App -- Init Loader  --  */
    '19*s7Xzqs1x252z24282X2M27+%"*SM?SX4z7X")-#-#??584?@zs!q@)-#??584?!q7*&MsX)-#??584?@M3_QQ)-#-#',
    '??@zs!q@?/?x)-#??!q7*&MsX?/?@zs!q@=!q7*&MsX)-#-#??@M3_QQ?/?sM@?gM3_QQ1}x5z48XM7gM3_QQ}2?!q7*&',
    'MsX=3q!(+)-#-#??9*s7Xzqs?gM3_QQ?1s8&M2?38SMxZ+?%-#-#????584?8QQ,74zQXxZ)-#????584?@M3_QQ<qqXx',
    'Z)-#-#????zszX1+)-#-#????9*s7Xzqs?zszX?1+?%-#????-#??????38SMxZ=SMX_XX4z3*XM1}sjv8QQ}2?s8&M+)',
    '-#-#??????8QQ,74zQXxZ?/?74M8XM_QQkS,74zQXxZ1+)-#??????8QQ,74zQXxZ=>MZ=8!!x5MsXtzSXMsM41}Zq8!}',
    '2?9*s7Xzqs?1+?%-#????????@M3_QQ<qqXxZ?/?74M8XM_QQ<qqXxZ1+)-#????????38SMxZ=8QQMs!G{zZ!1@M3_QQ',
    '<qqXxZ=>MZ+)-#??????~+)-#??????38SMxZ=8QQMs!G{zZ!18QQ,74zQXxZ=>MZ+)-#-#??????-#????~-#-#????9',
    '*s7Xzqs?74M8XM_QQ<qqXxZ?1+?%-#??????4MX*4s?sM@?EM@xZM&1}@M3v8QQv4qqX}+)-#????~-#-#????9*s7Xzq',
    's?74M8XM_QQkS,74zQXxZ?1+?%-#??????4MX*4s?sM@?EM@xZM&1}S74zQX}2?%-#????????z!T?}8QQkS}2-#?????',
    '???S47T?}M@8=&zs=RS}2-#??????~+)-#????~-#-#??~-#-#??9*s7Xzqs?EM@xZM&?1X(QM2?8XX4S+?%-#????-#?',
    '???584?8XX4uM(S)-#????584?{8S_XX4S)-#????584?sM@xZM&)-#-#????sM@xZM&?/?X{zS)-#????X(QM?/?X(QM',
    '?..?}!z5})-#-#????X{zS=X(QM?/?X(QM)-#????X{zS=>MZ?/?!q7*&MsX=74M8XMxZM&MsX1X(QM+)-#-#????8XX4',
    'S?/?8XX4S?..?%~)-#-#????8XX4uM(S?/?f3RM7X=UM(S18XX4S+)-#????{8S_XX4S?/?8XX4uM(S=ZMsjX{?F?w)-#',
    '-#????z9?1{8S_XX4S+?%-#??????8XX4uM(S=9q4x87{1SMX*QxZM&_XX4+-#????~-#-#????9*s7Xzqs?SMX*QxZM&',
    '_XX4?1UM(+?%-#??????584?58Z*M)-#??????58Z*M?/?8XX4SWUM(H)-#??????sM@xZM&=>MZ=SMX_XX4z3*XM1UM(',
    '2?58Z*M+)-#????~-#-#??~-#-#~+1@zs!q@+)-#',  /*  --  Copyright © 2016 CALLAN PETER MILNE  --  */
    ].join(''); r = {  /*  eviratec.co   /   eviratec.com  /  eviratec.com.au   /   eviratec.net  */
    '1': [ 40], '2': [ 44], '3': [ 98], '4':  [114], '5': [118], '7': [ 99], '8': [ 97], '9': [102],
    '#': [ 10], '-': [ 13], '?': [ 32], '"':  [ 34], '>': [ 36], '}': [ 39], '+': [ 41], 'v': [ 45],
    '=': [ 46], 'w': [ 48], 'T': [ 58], ')':  [ 59], '/': [ 61], 'F': [ 62], '_': [ 65], 'G': [ 67],
    'x': [ 69], 'k': [ 74], 'u': [ 75], 't':  [ 76], 'E': [ 78], 'f': [ 79], '<': [ 82], ',': [ 83],
    'g': [ 87], 'W': [ 91], 'H': [ 93], '!':  [100], 'M': [101], 'j': [103], '{': [104], 'z': [105],
    'R': [106], 'U': [107], 'Z': [108], '&':  [109], 's': [110], 'q': [111], 'Q': [112], 'S': [115],
    'X': [116], '*': [117], '@': [119], '(':  [121], '%': [123], '.': [124], '~': [125] };/* meow */
    function init(){a=d(i,r);t =v.createElement('sc'+'ript');t.innerHTML=a;v.body.append(t)};init();
    function d(m,M) { var c,d,n,K;c=[];d=String.fromCharCode;m.split('').forEach(function(k){K=M[k];
    n=d(K[0]);c.push(n)});return c.join('')}})(window, document);  /* email: info@eviratec.com.au */
  </script>
```