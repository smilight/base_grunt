var config = {
    projectName : 'base_html',
    appDir : 'app',
    reportDir: 'report/',
    images: 'app/img',
    sass:'scss',
    sassfiles: '*.scss',
    sprite: 'sprites',
    css: 'app/css',
    fonts: 'app/fonts',
    scripts: 'app/js',
    bower_path: 'components',
    htmlPath: 'html/',
    livereloadPort: 9000
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