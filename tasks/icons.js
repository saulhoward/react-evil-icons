var gulp = require('gulp');
var inject = require('gulp-inject-string');
var evil = require('evil-icons');

module.exports = {
    /**
     * options.htmlSrc index.html file
     * options.dest index.html output
     */
    iconSprite: function(options) {
        return gulp.src(options.htmlSrc)
        .pipe(inject.after('<body>', evil.sprite))
        .pipe(gulp.dest(options.dest));
    }
};
