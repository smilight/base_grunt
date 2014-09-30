module.exports = {

    options: {
        basePath: './app',
        baseUrl: '',
        templates: {
            html: {

                js: '<script src="{filePath}"></script>',
                css: '<link rel="stylesheet" type="text/css" href="{filePath}" />',
            },
            haml: {
                js: '%script{src: "{filePath}"}/',
                css: '%link{href: "{filePath}", rel: "stylesheet"}/'
            },
            jade: {
                js: 'script(src="{filePath}", type="text/javascript")',
                css: 'link(href="{filePath}", rel="stylesheet", type="text/css")'
            },
            scss: {
                scss: '@import "{filePath}";',
                css: '@import "{filePath}";',
            },
            less: {
                less: '@import "{filePath}";',
                css: '@import "{filePath}";',
            }
        }
    },
    myTarget: {
        files: {
            'app/index.html': 'app/index.html'
        }
    }
};