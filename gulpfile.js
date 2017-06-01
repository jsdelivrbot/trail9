///
/// Dependencies
///

var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


///
/// Local variables
///

var path = {
    SCSS_SRC_ALL: 'jekyll-source/_scss/**/*.scss',
    SCSS_SRC_MAIN: 'jekyll-source/_scss/styles.scss',
    JS_MAIN: 'jekyll-source/js/*.js',
    CSS_DEST: 'dist/css/',
    JS_DEST: 'dist/js/',
    JEKYLL_SRC: 'jekyll-source/**/*',
    LAYOUTS: 'jekyll-source/_layouts/**/*.html',
    INCLUDES: 'jekyll-source/_includes/**/*.html',
    DATA: 'jekyll-source/_data/**/*',
    JSON: 'jekyll-source/json/*.json',
    JSON_DEST: 'dist/data/'
};


///
/// Development server
///

gulp.task('server', function() {
    browserSync.init({
        server: 'dist',
        ghostMode: false,
        port: 3010,
        ui: {
            port: 3011
        }
    });
});


///
/// Watch files
///

gulp.task('watch', function() {
    gulp.watch(path.SCSS_SRC_ALL, ['styles']);
    gulp.watch(path.JEKYLL_SRC, ['site']);
    gulp.watch(path.LAYOUTS, ['site']);
    gulp.watch(path.INCLUDES, ['site']);
    gulp.watch(path.DATA, ['site']);
    gulp.watch(path.JS_MAIN, ['scripts']);
    gulp.watch(path.JSON, ['data']);
});


///
/// SCSS compilation
///

gulp.task('styles', function() {
    gulp.src(path.SCSS_SRC_MAIN)
        .pipe(sass({
                includePaths: ['node_modules'],
                outputStyle: 'expanded' // expanded for development
            })
            .on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                browsers: ['last 2 versions']
            })
        ]))
        .pipe(gulp.dest(path.CSS_DEST))
        .pipe(browserSync.stream());
});

gulp.task('data', function(){
    gulp.src(path.JSON)
      .pipe(gulp.dest(path.JSON_DEST))
      .pipe(browserSync.stream());
});


///
/// Static site generator
///

gulp.task('site', ['jekyll'], function() {
    gulp.src('_site/**/*')
        .pipe(gulp.dest('dist'));
        // .pipe(browserSync.stream());  // Removing because it was making the gulp copy task finish prematurely
});


gulp.task('jekyll', function(gulpCallBack) {
    var exec = require('child_process').exec;

    exec('jekyll build', function(err, stdout, stderr) {
        console.log(stdout);
        console.error(stderr);
        gulpCallBack(err);
    });
});


///
/// Static site generator
///

gulp.task('scripts', function() {
    gulp.src('node_modules/apollo-ui/dist/js/apollo.min.js')
        .pipe(gulp.dest(path.JS_DEST));
    gulp.src(path.JS_MAIN)
        .pipe(gulp.dest(path.JS_DEST))
        .pipe(browserSync.stream());
});


///
/// Conglomerate tasks
///

gulp.task('default', ['site', 'styles', 'scripts', 'data']);
gulp.task('serve', ['default', 'server', 'watch']);
