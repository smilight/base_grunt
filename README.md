base_grunt template for front end
==========

## Instalation 

+   Unpack archive master.zip. Open unpacked folder in your IntelliJ editor;

+   Install node.js and make allowed thru terminal.  Node.js [download link](http://nodejs.org/download/). Test if node.js installed properly: type in terminal ```node -v``` or ```npm -v```;

+ Install Ruby and make allowed thru terminal. Ruby Windows [download link](http://rubyinstaller.org/downloads/) (x86 and x64). Test it: type in terminal ```gem -v```;

+ Open terminal in your IntelliJ editor ```Alt + F12```;
Install grunt globally.  Type in terminal ```npm install -g grunt-cli```. Test it: type in terminal ```grunt -V```. [More info about GrungJs](http://gruntjs.com/) ;

+ Install Compass and Sass. Type in terminal ```gem install compass --pre``` (pre release for work with BEM and source maps). Test it ```compass -v```. Default sass and compass config file for using compass without Grunt “config.rb”. [More info about Compass](http://compass-style.org/). [More info about SASS](http://sass-lang.com/);

+ Install Bower globally (package manager). Type in terminal ```npm install –g bower```. To install default project packages (packages list in file “bower.json”) type in terminal ```bower install```.To install new package type in terminal e.g. ```bower install jquery```. It will be installed to ```your_project_path/components``` . You can change default packages folder by editing file “.bowerrc”. [More info about Bower](http://bower.io/);

+ Install all node and grunt plugins (plugins list in file “package.json”). Type in terminal ```npm install```.  If error occurs rerun ```npm install```.   All plugins will be installed to ```your_project_path/node_modules```. GruntJs plugins page ;
Default grunt configuration “gruntfile.js”. For more settings or to add plugin go to ```your_project_path/grunt```;

### Available tasks

##### default:
- 'watch' (*watching changes for html,sass and config files*)

##### build:
   - 'clean' (*cleaning all css and html files from ```addDir```*)
   - 'includes:html' (*compile html files from ```htmlDir``` to ```appDir```*)
   - 'imagemin:sprites' (*minify images for sprites*)
   - 'compass:out' (*compile sass files from ```sassDir``` to ```cssDir```*)
   - 'imagemin:images' (*minify all image files from ```imagesDir```*)
   - 'csscomb:css' (*sorting css properties in *.css files from ``cssDir````*)
   - 'cmq' (*collecting css @media queries and place it to one block*)
   - 'csso:compress' (*compressing css file*)
   - 'compress:main' (*place compiled project to zip file with ```projectName``` name*)

##### validate:
   - 'validation' (*html validation*)
   - 'jshint' (*js validation*)
   - 'csslint' (*css validation*)

   *all validation report at ```reportDir```*

##### postcss:
   - 'compass:out' (*compile sass files from ```sassDir``` to ```cssDir```*)
   - 'csscomb:css' (*sorting css properties in *.css files from ``cssDir````*)
   - 'csso:compress' (*compressing css file*)
   - 'cmq' (*place compiled project to zip file with ```projectName``` name*)

##### tozip:
   - 'compress:main' (*place compiled project to zip file with ```projectName``` name*)



### Packages

- [grunt-bower-task](https://github.com/stephenplusplus/grunt-wiredep)
- [grunt-combine-media-queries](https://github.com/johncashmore/grunt-combine-media-queries)
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
- [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
- [grunt-contrib-compress](https://github.com/gruntjs/grunt-contrib-compress)
- [grunt-contrib-csslint](https://github.com/gruntjs/grunt-contrib-csslint)
- [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
- [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
- [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
- [grunt-csscomb](https://github.com/csscomb/grunt-csscomb)
- [grunt-csso](https://github.com/t32k/grunt-csso)
- [grunt-html-validation](https://github.com/praveenvijayan/grunt-html-validation)
- [grunt-includes](https://github.com/vanetix/grunt-includes)
- [grunt-version-copy-bower-components]
- [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)
- [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
- [load-grunt-config](https://github.com/firstandthird/load-grunt-config)
- [time-grunt](https://github.com/sindresorhus/time-grunt)


### Directory Structure


-  app (*compiled html, styles, sprites*)
-  grunt (*all grunt plugins setings*)
-  html (*all parts of html to compile*) *to include html file to another type ```include "path_to_your_file/file_without_extension```*
-  scss (*sass files*)
-  reports (*js,css,html validation reports*)
-  sprite (*sprite files*)

### Configuration

All template options in ```gruntfile.js``` file.

Available options:

####    projectName
####    appDir
your aplication directory where will be all compiled files

####   reportDir
js,css,html validation reports directory

####   imagesDir
images dir. where to place generated sprites

#### sassfiles
sass or scss file extension (**.scss*)

#### sassDir
sass files directory

#### spritesDir
directory with sprite files

#### cssDir
generated css files directory

#### fontsDir
fonts directory

#### scriptsDir
scripts directory

#### bowerDir
bower components directory

#### htmlDir
non-compiled html files directory

#### livereloadPort
port number for livereload server