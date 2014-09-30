var config = {
    projectName : 'base_html',
    appDir : 'app',
    reportDir: 'report/',
    imagesDir: 'app/img',
    sassDir:'scss',
    sassfiles: '*.scss',
    spriteDir: 'sprites',
    cssDir: 'app/css',
    fontsDir: 'app/fonts',
    scriptsDir: 'app/js',
    bowerDir: 'app/components',
    htmlDir: 'html/',
    livereloadPort: 1234
};

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt,{
        config: {
            config: config,
            date: grunt.template.date('yyyy-mm-dd')
        }
    });
};