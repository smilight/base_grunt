module.exports = {
    csslint: {
        options:{
            formatters: [
                {id: 'junit-xml', dest: '<%= config.reportDir %>/csslint_junit.xml'},
                {id: 'csslint-xml', dest: '<%= config.reportDir %>/csslint.xml'}
            ]
        },
        files: {
            src: ['<%= config.css %>/*.css']
        }
    }

//    options: {
////        cache: false
//    },
//    dist: {
//        files: [{
//            expand: true,
//            cwd: '<%= config.css %>/',
//            src: ['<%= config.css %>/*.{css}']
//        }]
//    }
//    csslint: {
//        options: {
//            force: true,
//            import: false,
//            formaters: ['compact'],
//            absoluteFilePathsForFormatters: true
//
//        },
//files:{
//    src: ['<%= config.css %>/style.css']
//}
//    }
};





