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

module.exports = initKarmaConfig;

function initKarmaConfig ($config, grunt) {

  const karmaHeadless = [grunt.option('browser') || 'PhantomJS'];
  const karmaChrome = [grunt.option('browser') || 'Chrome'];

  $config['karma'] = {
    options: {
      configFile: false,
      singleRun: true,
      exclude: [],
      preprocessors: {
        'src/**/*.es6': ['babel'],
      },
      files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-material/angular-material.js',
        'node_modules/angular-aria/angular-aria.js',
        'node_modules/angular-animate/angular-animate.js',
        'node_modules/angular-messages/angular-messages.js',
        'node_modules/angular-cookies/angular-cookies.js',
        'node_modules/angular-ui-router/release/angular-ui-router.js',
        'node_modules/angular-environment-config/release/angular-environment-config.js',
        'src/ng/module.es6',
        'src/ng/*/**/*.es6',
        'test/unit/**/*-spec.js',
      ],
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      reporters: 'dots',
      port: 8080,
      colors: true,
      autoWatch: false,
      debug: true,
      autoWatchatchInterval: 0,
      browsers: karmaHeadless,
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015','polyfill'], // use the es2015 preset
        sourceMap: 'inline' // inline source maps inside compiled files
      },
    },
    unit: {
      singleRun: false,
      browsers: karmaChrome,
    },
    debug: {
      singleRun: false,
      background: false,
      browsers: karmaChrome,
    },
    background: {
      background: true,
      singleRun: false,
      browsers: karmaHeadless,
    },
    watch: {
      singleRun: false,
      autoWatch: true,
      autoWatchInterval: 1,
    },
  };

}
