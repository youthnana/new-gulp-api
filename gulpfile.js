const { src, dest, watch, series } = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
function clean() {
    return src('src/*.js')
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('output/'))
}
function build() {
    return src('src/*.css')
    .pipe(rename({extname: '.min.css'}))
    .pipe(dest('dest/'))
}
watch('src/*.css',build)
exports.build = build;
exports.default = series(clean, build)