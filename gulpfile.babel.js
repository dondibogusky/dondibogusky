/*jshint node: true, esnext: true */

"use strict";

// import gulp from 'gulp';
const gulp = require('gulp');

const del = require('del');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const clean = () => del('./dist/css/');

const paths = {
  styles: {
    scss: './src/scss/**/*.scss',
    dest: './dist/css/'
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
      baseDir: "./dist/"
    },
    notify: false,
    open: false
  });
  done();
}

gulp.task('stylelint', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('./src/scss/main.scss')
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

const watch = () => gulp.watch(paths.styles.scss, gulp.series(styles, reload));

const dev = gulp.series(clean, styles, serve, watch);

export default dev;
