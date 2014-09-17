module.exports = {
    options: {
        data: {
            message: 'Hello world!'
        }
    },
    dist: {
        files:{
            expand: true,
            cwd: 'html/',
            src: ['*.html'],
            dest: 'app/',
            ext: '.html'
        }

//        files: {
//            'app/*.html': ['html/*.html']
//        }
    }
};