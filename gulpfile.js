var gulp = require('gulp');
var rimraf = require('rimraf');
var to5 = require('gulp-6to5');

function compileJS() {
    return gulp.src('src/**/*.js')
        .pipe(to5({experimental: true}))
        .pipe(gulp.dest('lib'));
};

gulp.task('clean', function(cb) {
    rimraf('lib', cb);
});

gulp.task('default', ['clean'], function() {
    compileJS()
});
