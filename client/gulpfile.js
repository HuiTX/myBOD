var gulp = require('gulp');
var gutil = require('gulp-util');
// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

// postcss
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var atImport = require('postcss-import');
var atCopy = require('postcss-copy');


gulp.task('default');

// Cleans up dist directory using del
gulp.task("clean", function () {
  return gulp.src('dist/**/*', {read: false})
    .pipe(clean({force: true}));
});

gulp.task('build-dev', ['css:build-dev'], function () {
  gulp.watch([
    'assets/css/**/*.css'
  ], ['css:build-dev']);
});

// develop
// =========================================

// style
gulp.task('css:build-dev', function () {
  var processors = [
    atImport,
    atCopy({
      src: ['src', 'node_modules'],
      dest: 'dist',
      keepRelativePath: false
    }),
    nested,
    autoprefixer
  ];

  return gulp.src(['assets/css/**/*.css', '!assets/css/**/_*.css'])
    .pipe(postcss(processors, { to: 'dist/css/*.css'}))
    .pipe(postcss(processors, { to: 'dist/css/*.css'}))
    .pipe(gulp.dest('dist/css'));
});

// script
// gulp.task('js:build-dev', function () {
//   return gulp.src([
//       'assets/vendor/jquery/jquery.js',
//       // 'assets/vendor/bootstrap/js/bootstrap.js',
//       'assets/vendor/semantic/semantic.min.js',
//       'assets/vendor/vue/vue.js'
//     ])
//     .pipe(concat('vendor.js'))
//     .pipe(gulp.dest('dist/js'));
// });

/*
// modify some webpack config options
var devConfig = Object.create(webpackConfig);
devConfig.devtool = 'sourcemap';
devConfig.debug = true;
// create a single instance of the compiler to allow caching
var devCompiler = webpack(devConfig);
// reg task
gulp.task('webpack:build-dev', function(callback) {
  // run webpack
  devCompiler.run(function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    callback();
  });
});
*/

/**
 * @private
 */

function getConfig (opt) {
  var config = webpackConfig;
  if (!opt) {
    return config;
  }
  for (var i in opt) {
    config[i] = opt;
  }
  return config;
}
