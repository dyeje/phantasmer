'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () =>
    gulp.src('phantasmer.js')
        .pipe(babel({
          presets: ['env']
        }))
        .pipe(gulp.dest('out'))
);