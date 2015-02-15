var gulp = require('gulp');
var inject = require('gulp-inject-string');
var evil = require('evil-icons');

/**
 * htmlSrc index.html file
 * dest index.html output
 */
function evilIconsSprite(htmlSrc, dest) {
    return gulp.src(htmlSrc)
        .pipe(inject.after('<body>', evil.sprite))
        .pipe(gulp.dest(dest));
}

module.exports = evilIconsSprite;
