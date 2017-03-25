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

module.exports = initWatchConfig;

function initWatchConfig ($config) {

  $config['watch'] = {
    dev: {
      files: [
        '<%= staticDir %>/**/*',
        '<%= srcDir %>/**/*',
      ],
      tasks: [
        'build',
      ],
      options: {
        spawn: true,
        livereload: {
          host: '<%= pkg.config.localDev.hostname %>',
          port: '<%= pkg.config.localDev.liveReloadPort %>',
        },
      },
    },
    livereload: {
      files: [
        '<%= buildDir %>/**/*.html',
        '<%= buildDir %>/**/*.css',
        '<%= buildDir %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
      ],
      options: {
        livereload: '<%= pkg.config.localDev.liveReloadPort %>',
      },
    },
  };

}
