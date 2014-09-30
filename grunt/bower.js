module.exports = {
        install: {
            options: {
                install: true,

                bowerOptions: {
                    forceLatest: true,    // Force latest version on conflict
                    production: true     // Do not install project devDependencies
                },

                targetDir: 'bower1',
                layout: 'byType',
                copy:true,
                verbose: true
            }
        }
};