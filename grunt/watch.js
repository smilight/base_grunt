module.exports = {
    options: {
        livereload: {
            port: '<%= config.livereloadPort %>'
        }
    },
    css: {
        files: ['<%= config.sassDir %>/**'],
        tasks: ['compass:dist'],
        options:{
            atBegin:true,
//            spawn: false,
            reload:true
        }

    },
    configFiles: {
        files: [ 'gruntfile.js', './grunt/*.js' ],
        options:{
//            spawn: false,
            reload: true
        }
    },
    bowerFiles:{
        files:['./bower/**'],
        tasks:['wiredep'],
        options:{
            atBegin:true,
//            spawn: false,
            reload: true
        }
    },
    htmlFiles: {
        files: [ '<%= config.htmlDir %>/**/*.html' ],
        tasks: ['includes:html'],
        options:{
            atBegin:true,
//            spawn: false,
            reload: true
        }
    }
};

