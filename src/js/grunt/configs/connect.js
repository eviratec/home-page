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

const util = require('util');
const modRewrite = require('connect-modrewrite');

module.exports = initBabelConfig;

function initBabelConfig ($config) {

  $config['connect'] = {
    options: {
      port: '<%= pkg.config.localDev.port %>',
      hostname: '<%= pkg.config.localDev.hostname %>',
    },
    livereload: {
      options: {
        open: true,
        base: 'build',
        middleware: function (connect, options, middlewares) {
          
          let noRewriteExts = ['html','jpg','js','svg','css','png','eot','ttf','woff','woff2','ico','txt'];
          let noRewriteRegExp = util.format('!\\.%s$', noRewriteExts.join('|\\.'));

          middlewares.unshift(modRewrite([
            util.format('%s /index.html [L]', noRewriteRegExp),
          ]));

          return middlewares;
          
        },
      },
    },
  };

}
