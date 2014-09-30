base_grunt template for front end
==========

Grunt install manual
Unpack archive master.zip. Open unpacked folder in your IntelliJ editor;
Install node.js and make allowed thru terminal.  Node.js <a href="" title="download link">download link</a>. Test if node.js installed properly: type in terminal “node -v” or “npm -v”;
Install Ruby and make allowed thru terminal. Ruby Windows download link (x86 and x64). Test it: type in terminal “gem -v”;
Open terminal in your IntelliJ editor (Alt + F12);
Install grunt globally.  Type in terminal “npm install -g grunt-cli”. Test it: type in terminal “grunt -V”. More info about GrungJs ;
Install Compass and Sass. Type in terminal “gem install compass --pre” (pre release for work with BEM and source maps). Test it “compass -v”. Default sass and compass config file for using compass without Grunt “config.rb”. More info about Compass . More info about SASS;
Install Bower globally (package manager). Type in terminal “npm install –g bower”. To install default project packages (packages list in file “bower.json”) type in terminal “bower install”.To install new package type in terminal e.g. “bower install jquery”. It will be installed to “your_project_path/components”. You can change default packages folder by editing file “.bowerrc”. More info about Bower ;
Install all node and grunt plugins (plugins list in file “package.json”). Type in terminal “npm install”.  If error occurs rerun “npm install”.   All plugins will be installed to “your_project_path/node_modules”. GruntJs plugins page ;
Default grunt configuration “gruntfile.js”. For more settings or to add plugin go to “your_project_path/grunt”;

install "npm install"


Packages: 
    - grunt-bower-install
    - grunt-bower-task
    - grunt-combine-media-queries
    - grunt-contrib-clean
    - grunt-contrib-compass
    - grunt-contrib-compress
    - grunt-contrib-csslint
    - grunt-contrib-imagemin
    - grunt-contrib-jshint
    - grunt-contrib-watch
    - grunt-csscomb
    - grunt-csso
    - grunt-html-validation
    - grunt-includes
    - grunt-text-replace
    - grunt-version-copy-bower-components
    - grunt-wiredep
    - jshint-stylish
    - load-grunt-config