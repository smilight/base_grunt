module.exports = {
    'html-validation': {
        options: {
            stoponerror: false,
            path:'<%= config.reportDir %>/HTMLvalidatorStatus.json',
            reportpath: './<%= config.reportDir %>/HTMLvalidator.json',
            doctype: 'HTML5',
            force: true,
            charset:'utf-8',
            relaxerror: ["Bad value X-UA-Compatible for attribute http-equiv on element meta."] //ignores these errors
        },
        files: {
            src: ['<%= config.appDir %>/*.html']
        }
    }

};
