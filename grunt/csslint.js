module.exports = {
    csslint: {
        options:{
            formatters: [
                {id: 'junit-xml', dest: '<%= config.reportDir %>/csslint_junit.xml'},
                {id: 'csslint-xml', dest: '<%= config.reportDir %>/csslint.xml'}
            ]
        },
        files: {
            src: ['<%= config.cssDir %>/*.css']
        }
    }
};