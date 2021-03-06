"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
const include = require("include");
const posthtml = require("gulp-posthtml");
const del = require("del");

gulp.task("clean", function () {
  return del("build")
});

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.mini.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/*.html", gulp.series("html")).on("change", server.reload);
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.mozjpeg({
        progressive: true
      }),
      imagemin.svgo
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 70
    }))
    .pipe(gulp.dest((file) => file.base))
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    // .pipe(posthtml([include()]))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff,woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.ico",
      "source/css/**",
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "css", "copy", "html", ));
gulp.task("start", gulp.series("build", "server"));
