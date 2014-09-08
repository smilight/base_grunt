var path = require('path');
module.exports = {
        install: {
            options: {
                targetDir: 'test',
                layout: 'byType',
                install: true,
                verbose: true,
                cleanTargetDir: false,
                cleanBowerDir: false,
                bowerOptions: {
                    forceLatest: true,    // Force latest version on conflict
                    production: true,     // Do not install project devDependencies
                }
            }
        }
};