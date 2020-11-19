var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload');

//task html
gulp.task('html',function(){
    return gulp.src('./stage/*.html')
    .pipe(gulp.dest('./dist/src/'))
    .pipe(livereload())
})

//css task
gulp.task('css',function(){
    return gulp.src(['./stage/css/**/*.css','./stage/css/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/src/css'))
    .pipe(livereload())
})

//js task

gulp.task('js', function(){
    return gulp.src('./stage/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/src/js'))
    .pipe(livereload())
})

// task watch

gulp.task('watch',function(){
    require('./server.js');
    livereload.listen();
    gulp.watch('./stage/*.html' , gulp.series('html'));
    gulp.watch(['./stage/css/**/*.css','./stage/css/**/*.scss'] , gulp.series('css'));
    gulp.watch('./stage/js/*.js' , gulp.series('js'));
})