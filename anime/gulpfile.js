var gulp       = require('gulp'),
    concat     = require('gulp-concat'),
    minifyCSS  = require('gulp-minify-css'),
    terser     = require('gulp-terser'),
    rename     = require("gulp-rename");

gulp.task('concat', function() {
    return gulp.src('./app/css/*.css')
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('css',['concat'], function() {
    return gulp.src('./build/css/all.css')
        .pipe(minifyCSS({
            keepBreaks: true,
        }))
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".css";
        }))
        .pipe(gulp.dest('./build/css/'));
})
gulp.task('js', function() {
    return gulp.src('./app/js/*.js')
        .pipe(terser())
        .pipe(rename(function(path) {
            path.basename += ".min";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('default',['css','js']);

gulp.task('watch', function(){
  return gulp.watch([])
})
