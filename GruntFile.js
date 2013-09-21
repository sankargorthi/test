'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        componentbuild: {
            options: {
                dev: true,
                sourceUrls: true
            },
            components: {
                options: {
                    name: 'dev'
                },
                src: 'test',
                dest: 'test/build'
            }
        }
    });

    grunt.loadNpmTasks('grunt-component-build');

    grunt.registerTask('default', [ 'componentbuild' ]);
};

