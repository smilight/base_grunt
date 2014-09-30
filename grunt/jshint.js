module.exports = {
    jshint: {
        options: {
            curly: true,
            eqeqeq: true,
            eqnull: true,
            browser: true,
            globals: {
                jQuery: true
            },
            force: true,
            reporter: require('jshint-stylish'),
            reporterOutput: '<%= config.reportDir %>/jshint.html'
        },
        files: {
            src: ['<%= config.scriptsDir %>/*.js']
        }
    }
};