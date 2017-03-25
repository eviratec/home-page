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

const parsePath = require('path').parse;

const concatPriorities = {
  constants:      concatPriority(10, 'constant'),
  config:         concatPriority(20, 'config'),
  filters:        concatPriority(25, 'filter'),
  init:           concatPriority(30, 'init'),
  providers:      concatPriority(40, 'provider'),
  factories:      concatPriority(50, 'factory'),
  services:       concatPriority(50, 'service'),
  directives:     concatPriority(60, 'directive'),
  components:     concatPriority(65, 'component'),
  controllers:    concatPriority(70, 'controller'),
};

module.exports = initCopyConfig;

function initCopyConfig ($config) {

  $config['copy'] = {

    buildFiles: {
      files: [{
        expand: true,
        cwd: '<%= tmpBuildDir %>',
        src: [
          'js/**/*.js',
        ],
        dest: '<%= outDir %>/',
      // }, {
      //   src: '<%= tmpBuildDir %>/ewa.js',
      //   dest: '<%= outDir %>/ewa.js',
      }, {
        src: '<%= tmpBuildDir %>/ewa.min.js',
        dest: '<%= outDir %>/ewa.min.js',
      // }, {
      //   src: '<%= tmpBuildDir %>/ewa.css',
      //   dest: '<%= outDir %>/ewa.css',
      }, {
        src: '<%= tmpBuildDir %>/ewa.min.css',
        dest: '<%= outDir %>/ewa.min.css',
      }, {
        expand: true,
        cwd: '<%= staticDir %>',
        src: '**/*',
        dest: '<%= outDir %>/',
      }]
    },

    srcToBuildTmp: {
      expand: true,
      cwd: '<%= srcDir %>/ng',
      src: [
        '**/*.es6',
      ],
      dest: '<%= tmpBuildDir %>/srcFiles/ng/0',
      rename: (dest, src) => {

        let x;
        let filename;
        let dirname;

        if ('module.es6' === src) {
          return [dest, '..', 'module.es6'].join('/');
        }

        x = src.split(/\//g);

        filename = x.pop();
        dirname = x.pop();

        if (!(dirname in concatPriorities)) {
          return undefined;
        }

        filename = concatPriorities[dirname].filename(filename);

        return [dest, filename].join('/');

      },
    },

    es6SrcToBuildTmp: {
      expand: true,
      cwd: '<%= srcDir %>/es6',
      src: [
        '**/*.es6',
      ],
      dest: '<%= tmpBuildDir %>/srcFiles/es6',
    },

    otherCss: {
      files: [{
        src: './bower_components/angular-material/angular-material.css',
        dest: '<%= tmpBuildDir %>/vendor.css'
      }],
    },
    
  };

}

function concatPriority (priority, prefix) {
  return {
    priority: priority,
    prefix: prefix,
    filename: src => {
      return [priority, prefix, parsePath(src).base].join('-');
    },
  };
}
