module.exports = {

    options: {
        cache: false,
//        optimizationLevel: 3
    },
    sprites:{
        files:[{
            expand: true,
            cwd: '<%= config.spriteDir %>',
            src: ["**/*.{png,jpg,gif}"],
            dest: '<%= config.spriteDir %>'
        }]
    },

    images: {
        files: [{
            expand: true,
            cwd: '<%= config.imagesDir %>',
            src: ["**/*.{png,jpg,gif}"],
            dest: '<%= config.imagesDir %>'
        }]
    },

};