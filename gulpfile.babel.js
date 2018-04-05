/*jshint node: true, esnext: true */

"use strict";

// import gulp from 'gulp';
const gulp = require('gulp');

const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const critical = require('critical').stream;
const del = require('del');
const log = require('fancy-log');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const clean = () => del('./build/css/');

const paths = {
  styles: {
    scss: './source/scss/**/*.scss',
    dest: './build/css/'
  }
};

const server = browserSync.create();

function styles() {
  return gulp.src(paths.styles.scss)
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('.', {sourceRoot:'/'}))
    .pipe(gulp.dest(paths.styles.dest));
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: "./build/"
    },
    notify: false,
    open: false
  });
  done();
}

gulp.task('stylelint', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('./source/scss/main.scss')
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: 'reports/lint',
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'}
      ],
      debug: true
    }));
});

gulp.task('critical', function () {
  return gulp.src('build/*.html')
    .pipe(critical({base: 'build/', inline: true, css: ['build/css/main.css']}))
    .on('error', function(err) { log.error(err.message); })
    .pipe(gulp.dest('build'));
});

const watch = () => gulp.watch(paths.styles.scss, gulp.series(styles, reload));

const dev = gulp.series(clean, styles, serve, watch);

export default dev;
