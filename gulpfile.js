var gulp = require('gulp');
var runSequence = require('run-sequence');
var compass = require('gulp-compass'),
  plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var bundler = require('aurelia-bundler');
var browserSync = require('browser-sync');

// SASS/Compass compiler
gulp.task('sass', function(done) {
  if (compass) {
    return gulp.src('./sass/**/*.scss')
      .pipe(plumber({
        errorHandler: function(error) {
          console.log(error.message);
          this.emit('end');
        }
      }))
      .pipe(compass({
        css: 'styles',
        config_file: './sass/compass.rb'
      }));
  }
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', function() {
  runSequence('sass');
});

gulp.task('production', function() {
  runSequence('sass');
});

gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      'middleware': function(req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('default', function() {
  process.stdout.write('\n');
  process.stdout.write('Available gulp tasks\n');
  process.stdout.write('\n');
  process.stdout.write('watch - Watch changes for SASS and TypeScript files\n');
  process.stdout.write('build - Compile SASS and TypeScript files\n');
  process.stdout.write('serve - Build and start local web-server\n');
  process.stdout.write('production - Bundle aurelia files into distribution folder');
  process.stdout.write('\n');
});
