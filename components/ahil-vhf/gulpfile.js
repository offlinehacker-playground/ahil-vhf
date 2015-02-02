var gulp = require('gulp'),
    gutil = require('gulp-util'),
    vulcanize = require('gulp-vulcanize'),
    del = require('del');

require('web-component-tester').gulp.init(gulp);

var DIST_DIR = 'dist';

gulp.task('clean', function(done) {
    del([DIST_DIR+'/**/*', '!\\.*'], done);
});

gulp.task('vulcanize', ['clean'], function() {
    return gulp.src(['ahil-vhf.html', 'demo.html'])
        .pipe(vulcanize({
            dest: DIST_DIR,
            inline: true,
            strip: true
        }))
        .pipe(gulp.dest(DIST_DIR));
});

gulp.task('copy', ['clean'], function() {
  return gulp.src(['AHIL.png', 'Gorethi2.png']).pipe(gulp.dest(DIST_DIR));
});

gulp.task('build', ['copy', 'vulcanize']);

gulp.task('default', ['test', 'build']);
