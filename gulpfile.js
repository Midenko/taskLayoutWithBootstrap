var gulp = require('gulp');
var stylus = require('gulp-stylus');
var pug = require('gulp-pug');
var browserSync = require('browser-sync');

gulp.task('stylus', function () {
    return gulp.src('app/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('pug', function buildHTML() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch',['browserSync', 'stylus', 'pug'] ,function () {
    gulp.watch('app/stylus/*.styl', ['stylus']);
    gulp.watch('app/pug/*.pug', ['pug']);
    gulp.watch('dist/js/**/*.js', browserSync.reload);
})

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'dist'
        },
    })
})
