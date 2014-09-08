module.exports = {
//    'css-validation': {
//        options: {
////            reset: grunt.option('reset') || false,
//            stoponerror: false,
//            relaxerror: [],
//            profile: 'css3', // possible profiles are: none, css1, css2, css21, css3, svg, svgbasic, svgtiny, mobile, atsc-tv, tv
//            medium: 'all', // possible media are: all, aural, braille, embossed, handheld, print, projection, screen, tty, tv, presentation
//            warnings: '2' // possible warnings are: 2 (all), 1 (normal), 0 (most important), no (no warnings)
//        },
//        files: {
//            src: ['app/css/*.css']
//        }
//    },
    'html-validation': {
        options: {
//            reset: grunt.option('reset') || false,
            stoponerror: false,
            path:'<%= config.reportDir %>/HTMLvalidatorStatus.json',
            reportpath: './<%= config.reportDir %>/HTMLvalidator.json',
            doctype: 'HTML5',
            force: true,
            charset:'utf-8',
//            remotePath: "http://decodize.com/",
//            remoteFiles: ["html/moving-from-wordpress-to-octopress/",
//                "css/site-preloading-methods/"], //or
//            remoteFiles: "validation-files.json", // JSON file contains array of page paths.
            relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
        },
        files: {
            src: ['<%= config.appDir %>/*.html']
        }
    }

};
