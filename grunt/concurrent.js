module.exports = {
    build: {
        tasks: ['clean', 'includes:html','imagemin:sprites','compass:out','imagemin:images','csscomb:css','cmq','csso:compress','compress:main'],
        options: {
            logConcurrentOutput: true
        }
    },
    default:{

    }
};
