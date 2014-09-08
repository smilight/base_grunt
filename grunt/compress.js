module.exports = {
    main: {
            options: {
                archive: '<%= config.projectName %>.zip',
                mode: 'zip'
            },
            files: [
                { expand: true, src : "**/*", cwd : "<%= config.appDir %>/" }
            ]
    }
};