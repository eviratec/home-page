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

module.exports = class VendorLib {

  static cssGlobsForAll (vendorLibs) {

    let x = [];
    
    vendorLibs.forEach((v, i, a) => {
      x[i] = [];
      x[i].push(...v.cssGlobs);
    });
    
    return x;

  }

  static jsGlobsForAll (vendorLibs) {
    
    let x = [];
    
    vendorLibs.forEach((v, i, a) => {
      x[i] = [];
      x[i].push(...v.jsGlobs);
    });
    
    return x;
    
  }
  
  constructor (name, useMinifiedSources) {

    this.name = name;
    this.useMinifiedSources = useMinifiedSources;

    this.filterFns = {
      cssExt: [],
      cssSourceFilename: [],
      cssGlobs: [],
      jsExt: [],
      jsSourceFilename: [],
      jsGlobs: [],
    };

  }

  getFilterFnsByFilterName (filterName) {
    return this.filterFns[filterName];
  }

  applyFilters (filterName, value) {
    
    let filterFns = this.getFilterFnsByFilterName(filterName);
    
    filterFns.forEach(filterFn => {
      value = filterFn(value);
    });
    
    return value;
    
  }

  addFilterFn (filterName, fn) {
    
    let filterFns = this.getFilterFnsByFilterName(filterName);
    
    filterFns.push(fn);

    return this;

  }

  get cssExt () {
    return this.applyFilters('cssExt', extFor(this, 'css'));
  }

  get cssSourceFilename () {
    return this.applyFilters('cssSourceFilename', `${this.name}${this.cssExt}`);
  }
  
  get cssGlobs () {
    return this.applyFilters('cssGlobs', [`node_modules/${this.name}/**/${this.cssSourceFilename}`]);
  }

  get jsExt () {
    return this.applyFilters('jsExt', extFor(this, 'js'));
  }

  get jsSourceFilename () {
    return this.applyFilters('jsSourceFilename', `${this.name}${this.jsExt}`);
  }
  
  get jsGlobs () {
    return this.applyFilters('jsGlobs', [`node_modules/${this.name}/**/${this.jsSourceFilename}`]);
  }

};

function extFor (vendorLib, ext) {
  return true === vendorLib.useMinifiedSources && `.min.${ext}` || `.${ext}`;
}
