module.exports = {

    scss: {
        expand: true,
        cwd: '<%= config.sassDir %>',
        src: ['**/<%= config.sassfiles %>'],
        dest: '<%= config.sassDir %>',
        ext: '.scss'
    },
    css: {
        expand: true,
        cwd: '<%= config.cssDir %>',
        src: ['**/*.css', '!.min.css'],
        dest: '<%= config.cssDir %>',
        ext: '.css'
    }
};