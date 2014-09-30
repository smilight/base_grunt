module.exports = {
    dist: {
        options: {
            sassDir: '<%= config.sassDir %>',
            cssDir: '<%= config.cssDir %>',
            generatedImagesDir: '<%= config.imagesDir %>',
            imagesDir: '<%= config.spriteDir %>',
            javascriptsDir: '<%= config.scriptsDir %>',
            fontsDir: '<%= config.fontsDir %>',
            http_images_path : '../img',
            httpGeneratedImagesPath: '../img',
            httpFontsPath: '<%= config.fontsDir %>',
            relativeAssets: false,
            assetCacheBuster: false,
            noLineComments: true,
            debugInfo: false,
            sourcemap: true,
            raw: "\
                        on_sprite_saved do |filename|\n\
                        if File.exists?(filename)\n\
                        FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\\.png$}, '.png')\n\
                        FileUtils.rm_rf(filename)\n\
                        end\n\
                        end\n\
                        on_stylesheet_saved do |filename|\n\
                        if File.exists?(filename)\n\
                        css = File.read filename\n\
                        File.open(filename, 'w+') do |f|\n\
                        f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\\.png)}, '.png?v=\\k<hash>')\n\
                        end\n\
                        end\n\
                        end\n\
                    ",
            outputStyle: 'compact'
        }
//        src: ['<%= config.sass %>/*<%= config.sassfiles %>'],
//        dest: '<%= config.css %>'
    },
    out: {
        options: {
            sassDir: '<%= config.sassDir %>',
            cssDir: '<%= config.cssDir %>',
            generatedImagesDir: '<%= config.imagesDir %>',
            imagesDir: '<%= config.spriteDir %>',
            javascriptsDir: '<%= config.scriptsDir %>',
            fontsDir: '<%= config.fontsDir %>',
            http_images_path : '../img',
            httpGeneratedImagesPath: '../img',
            httpFontsPath: '<%= config.fontsDir %>',
            relativeAssets: false,
            assetCacheBuster: false,
            noLineComments: true,
            debugInfo: false,
            sourcemap: false,
            raw: "\
                        on_sprite_saved do |filename|\n\
                        if File.exists?(filename)\n\
                        FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\\.png$}, '.png')\n\
                        FileUtils.rm_rf(filename)\n\
                        end\n\
                        end\n\
                        on_stylesheet_saved do |filename|\n\
                        if File.exists?(filename)\n\
                        css = File.read filename\n\
                        File.open(filename, 'w+') do |f|\n\
                        f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\\.png)}, '.png')\n\
                        end\n\
                        end\n\
                        end\n\
                    ",
            outputStyle: 'compact'
        },
//        src: ['<%= config.sass %>/*<%= config.sassfiles %>'],
//        dest: '<%= config.css %>'
    },
    watch: {
        options: {
            sassDir: '<%= config.sassDir %>',
            cssDir: '<%= config.cssDir %>',
            generatedImagesDir: '<%= config.imagesDir %>',
            imagesDir: '<%= config.spriteDir %>',
            javascriptsDir: '<%= config.scriptsDir %>',
            fontsDir: '<%= config.fontsDir %>',
            http_images_path : '../img',
            httpGeneratedImagesPath: '../img',
            httpFontsPath: '<%= config.fontsDir %>',
            relativeAssets: false,
            assetCacheBuster: false,
            raw: "\
                        on_sprite_saved do |filename|\n\
                        if File.exists?(filename)\n\
                        FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\\.png$}, '.png')\n\
                        FileUtils.rm_rf(filename)\n\
                        end\n\
                        end\n\
                        on_stylesheet_saved do |filename|\n\
                        if File.exists?(filename)\n\
                        css = File.read filename\n\
                        File.open(filename, 'w+') do |f|\n\
                        f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\\.png)}, '.png?v=\\k<hash>')\n\
                        end\n\
                        end\n\
                        end\n\
                    ",
            watch:true,
        },
        src: ['<%= config.sassDir %>/**'],
        dest: '<%= config.cssDir %>'
    },

    test:{
        options: {
            livereload: true
        },
        css: {
            files: ['<%= config.sassDir %>/*<%= config.sassfiles %>'],
            tasks: ['compass:dist']
        }
    }
};