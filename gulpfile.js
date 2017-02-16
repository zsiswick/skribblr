var gulp = require('gulp'),
  sass = require('gulp-sass');

var sassFiles = 'styles/sass/**/*.scss',
  cssDest = 'styles/css/';

gulp.task('default', ['styles']);

gulp.task('styles', function() {
  gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function() {
  gulp.watch(sassFiles, ['styles']);
});
