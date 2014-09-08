module.exports = {
    compress: {
        options: {
            restructure: true,
            banner: '/* <%= config.projectName %> project. <%= date %> */',
            report: 'gzip'
        },
        expand: true,
        cwd: '<%= config.css %>',
        src: ['*.css', '!*.min.css'],
        dest: '<%= config.css %>',
        ext: '.min.css'
    }
};