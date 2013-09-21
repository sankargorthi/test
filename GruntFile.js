'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        componentbuild: {
            build: {
                options: {
                    name: 'build',
                    dev: true,
                    sourceUrls: true
                },
                src: '.',
                dest: './build'
            },
            dist: {
                options: {
                    name: 'dist',
                    dev: false,
                    sourceUrls: false,
                    noRequire: true,
                    standalone: true
                },
                src: '.',
                dest: './build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-component-build');

    grunt.registerTask('default', [ 'componentbuild:build' ]);
    grunt.registerTask('dist', [ 'componentbuild:dist' ]);
};

