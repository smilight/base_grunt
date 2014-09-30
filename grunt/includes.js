module.exports = {
    html: {
        options: {
            includeRegexp: /^(\s*)include\s+"(\S+)"\s*$/,
            duplicates: false,
            debug: false,
            filenameSuffix: '.html',
            filenamePrefix: ''
        },
        files: [
            {
                cwd: '<%= config.htmlDir %>/',
                src: ['*.html'],
                dest: '<%= config.appDir %>'
            }
        ]
    }
};