module.exports = function(grunt) {
    
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    },
                files: {
                    './scss/all.css': './scss/all.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
    
};
