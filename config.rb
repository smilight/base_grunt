# Compass Config
preferred_syntax = :sass
http_path = '/'
css_dir = 'app/css'
sass_dir = 'scss'
http_generated_images_path  = 'app/img'
images_dir = 'sprites'
fonts_dir = 'app/fonts'
relative_assets = true
line_comments = true


# Make a copy of sprites with a name that has no uniqueness of the hash.
on_sprite_saved do |filename|
  if File.exists?(filename)
    FileUtils.cp filename, filename.gsub(%r{-s[a-z0-9]{10}\.png$}, '.png')
    # Note: Compass outputs both with and without random hash images.
    # To not keep the one with hash, add: (Thanks to RaphaelDDL for this)
    FileUtils.rm_rf(filename)
  end
end

# Replace in stylesheets generated references to sprites
# by their counterparts without the hash uniqueness.
on_stylesheet_saved do |filename|
  if File.exists?(filename)
    css = File.read filename
    File.open(filename, 'w+') do |f|
      f << css.gsub(%r{(?<start>-s)(?<hash>[a-z0-9]{10})(?<file>\.png)}, '.png?v=\k<hash>')
    end
  end
end

require 'sass-globbing'
