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

const _require = require.main.require;

module.exports = 
  class EwaContinuousGrunt {

    /**
     * Loads Grunt task configurations
     *
     * @return     {Object}  Grunt config by task name
     */
    static loadTaskConfigs (grunt) {
      
      let tasksConfig;
      
      _require('./src/js/grunt/configs')(tasksConfig = {}, grunt);
      
      return tasksConfig;

    }

    /**
     * Constructs the object.
     *
     * @param      {Object}  grunt   A Grunt instance
     */
    constructor (grunt) {
      
      this.tasksConfig = EwaContinuousGrunt.loadTaskConfigs(grunt);

      init(this, grunt);

    }

    /**
     * Loads Grunt tasks
     *
     * @param      {Object}  grunt   The Grunt instance
     * @return     {EwaContinuousGrunt}  ewaContinuousGrunt
     */
    loadGruntTasks (grunt) {
      require('load-grunt-tasks')(grunt);
      return this;
    }

    /**
     * Configures Grunt
     *
     * @param      {Object}  grunt   The Grunt instance to configure
     * @return     {EwaContinuousGrunt}  ewaContinuousGrunt
     */
    configureGrunt (grunt) {

      let pkg = grunt.file.readJSON('package.json');
      let tasksConfig = this.tasksConfig;

      Object.assign(tasksConfig, {
        
        pkg: pkg,
        pkgName: '<%= pkg.name %>',

        buildTag: '-dev-' + grunt.template.today('yyyy-mm-dd'),
        buildDir: 'build',

        testSpecDir: 'test',
        distDir: 'dist',
        srcDir: 'src',
        staticDir: '<%= srcDir %>/static',
        tmpDir: '.tmp',

        tmpBuildDir: '<%= tmpDir %>/build',

        outDir: '<%= buildDir %>',

      });

      grunt.initConfig(tasksConfig);

      return this;

    }

    /**
     * Bind Grunt tasks
     *
     * @param      {Object}  grunt   The Grunt instance to bind the tasks to
     * @return     {EwaContinuousGrunt}  ewaContinuousGrunt
     */
    bindGruntTasks (grunt) {
      _require('./src/js/grunt/tasks')(grunt);
      return this;
    }

  };

function init (ewaContinuousGrunt, grunt) {
  ewaContinuousGrunt
    .loadGruntTasks(grunt)
    .configureGrunt(grunt)
    .bindGruntTasks(grunt);
}
