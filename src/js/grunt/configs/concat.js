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

const path = require('path');

const mainModuleDir = path.resolve('.');
const VendorLib = require([mainModuleDir, 'src', 'js', 'VendorLib'].join(path.sep));
const PKG = require([mainModuleDir, 'package.json'].join(path.sep));

const USE_MINIFED_VENDOR_LIB_SOURCES = PKG.config.minifyVendorLibs;
const FE_VENDOR_LIBS = PKG.config.vendorLibs;

const cssBanner = `/**
 * Eviratec Web App
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
 * 
 * <%= pkg.name %>@v<%= pkg.version %>
 * Built on <%= grunt.template.today("yyyy-mm-dd") %>
 */\n`;

const pkgBanner = `${cssBanner}"use strict";
(function(){"use strict";\n`;

module.exports = initConcatConfig;

function initConcatConfig ($config) {

  FE_VENDOR_LIBS.forEach((v, i, a) => {
    a[i] = new VendorLib(v, USE_MINIFED_VENDOR_LIB_SOURCES);
  });

  $config['concat'] = {};

  $config['concat']['options'] = {
    stripBanners: true,
  };

  /* concat:vendorCss */
  $config['concat']['vendorCss'] = {
    src: VendorLib.cssGlobsForAll(FE_VENDOR_LIBS),
    dest: '<%= tmpBuildDir %>/vendor.css',
  };

  /* concat:vendorJs */
  $config['concat']['vendorJs'] = {
    src: VendorLib.jsGlobsForAll(FE_VENDOR_LIBS),
    dest: '<%= tmpBuildDir %>/vendor.js',
    options: {

    },
  };

  /* concat:ngEs6Src */
  $config['concat']['ngEs6Src'] = {
    files: {
      '<%= tmpBuildDir %>/srcFiles.es6': [
        '<%= tmpBuildDir %>/srcFiles/ng/0/**/*.es6',
      ],
    },
  };

  /* concat:ngEs6 */
  $config['concat']['ngEs6'] = {
    files: {
      '<%= tmpBuildDir %>/ng.es6': [
        '<%= tmpBuildDir %>/srcFiles/ng/module.es6',
        '<%= tmpBuildDir %>/srcFiles.es6',
        '<%= tmpBuildDir %>/templates.es6',
      ],
    },
    options: {

    },
  };
  
  /* concat:appCss */
  $config['concat']['appCss'] = {
    src: [
      '<%= srcDir %>/css/**/*.css',
    ],
    dest: '<%= tmpBuildDir %>/app.css',
  };
  
  /* concat:eviratecCss */
  $config['concat']['eviratecCss'] = {
    options: {
      banner: cssBanner,
      footer: '\n',
    },
    src: [
      '<%= tmpBuildDir %>/vendor.css',
      '<%= tmpBuildDir %>/app.css',
    ],
    dest: '<%= tmpBuildDir %>/ewa.css',
  };
  
  /* concat:eviratecJs */
  $config['concat']['eviratecJs'] = {
    options: {
      banner: pkgBanner,
      footer: '})();\n\n\n',
    },
    src: [
      '<%= tmpBuildDir %>/vendor.js',
      '<%= tmpBuildDir %>/ng.js',
    ],
    dest: '<%= tmpBuildDir %>/ewa.js',
  };

}
