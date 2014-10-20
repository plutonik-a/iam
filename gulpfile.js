// Load plugins
var gulp = require('gulp')
  , compass = require('gulp-compass')
  , autoprefixer = require('gulp-autoprefixer')
  , minifycss = require('gulp-minify-css')
  , jshint = require('gulp-jshint')
  , uglify = require('gulp-uglify')
  , imagemin = require('gulp-imagemin')
  , rename = require('gulp-rename')
  , clean = require('gulp-clean')
  , concat = require('gulp-concat')
  , notify = require('gulp-notify')
// deactivate caching until issue is resolved
//  , cache = require('gulp-cache')
  , connect = require('gulp-connect')
  , _ = require('lodash')

// set paths
  , source = 'src/'
  , dest = 'dist/'
  ;

// Styles
gulp.task('styles', function() {
  return gulp.src(source + 'sass/hm-app.scss')
    .pipe(compass({
      config_file: './config.rb',
      style: 'expanded',
      css: dest + 'css',
      sass: source + 'sass'
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(dest + 'css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(dest + 'css'))
    .pipe(notify({ message: 'Styles task complete' }))
    .pipe(connect.reload())
});

gulp.task('scripts', function() {
  return gulp.src(source + 'js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest(dest + 'js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(dest + 'js'))
    .pipe(notify({ message: 'Script built.' }))
    .pipe(connect.reload())
});

// Images
gulp.task('images', function() {
  return gulp.src(source + 'img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(dest + 'img'))
    .pipe(notify({ message: 'Images task complete' }))
    .pipe(connect.reload())
});

// copy html files
gulp.task('copy', function() {
  // main documentation index html
  gulp.src(source + 'index.html')
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());

    // detail views
    gulp.src(source + 'detailviews/**/*')
        .pipe(gulp.dest(dest + 'detailviews'))
        .pipe(connect.reload());
});

// Clean
gulp.task('clean', function() {
  return gulp.src(dest, {read: false})
    .pipe(clean())
});

// build distribution package
gulp.task('build', ['clean'], function() {
  gulp.start('styles', 'images', 'copy');
  //gulp.start('styles', 'scripts', 'images', 'copy');
});

// Default task
gulp.task('default', function() {
  gulp.start('build');
});

// Watch
gulp.task('watch', function() {

  // Watch Sass source files
  gulp.watch(source + 'sass/**/*.scss', ['styles']);

  // Watch Javascript source files
  //gulp.watch(source + 'js/**/*.js', ['scripts']);

  // Watch image files
  gulp.watch(source + 'img/**/*', ['images']);

  // Watch example files
  gulp.watch(source + 'index.html', ['copy']);
});

gulp.task('connect', function() {
  connect.server({
    root: dest,
    livereload: true
  });
});

// Serve
gulp.task('serve', ['build', 'connect', 'watch']);

