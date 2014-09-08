module.exports = {
    options: {
        livereload: {
//            port: 9000,
//            tasks: ['notify:server']
        }

    },
    css: {
        files: ['scss/**'],
        tasks: ['compass:dist']

    },
    configFiles: {
        files: [ 'gruntfile.js', './grunt/*.js' ],
        options: {
            reload: true
        }
    },
    htmlFiles: {
        files: [ 'html/**/*.html' ],
        tasks: ['includes:html'],
        options: {
            reload: true
        }
    }
};

