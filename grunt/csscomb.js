module.exports = {

    scss: {
        expand: true,
        cwd: '<%= config.sass %>',
        src: ['**/*.scss'],
        dest: '<%= config.sass %>',
        ext: '.scss'
    },
    css: {
        expand: true,
        cwd: '<%= config.css %>',
        src: ['**/*.css', '!.min.css'],
        dest: '<%= config.css %>',
        ext: '.css'
    }
};