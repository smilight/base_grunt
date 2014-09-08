module.exports = {

    options: {
        cache: false,
//        optimizationLevel: 3
    },
    sprites:{
        files:[{
            expand: true,
            cwd: '<%= config.sprite %>',
            src: ["**/*.{png,jpg,gif}"],
            dest: '<%= config.sprite %>'
        }]
    },

    images: {
        files: [{
            expand: true,
            cwd: '<%= config.images %>',
            src: ["**/*.{png,jpg,gif}"],
            dest: '<%= config.images %>'
        }]
    },

};