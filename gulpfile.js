const gulp = require("gulp");
const postcss = require("gulp-postcss");
const broswerSync = require("browser-sync").create();

function style() {
  return gulp
    .src("./src/*.css")
    .pipe(postcss())
    .pipe(gulp.dest("./dist"))
    .pipe(broswerSync.stream());
}

function watch() {
  broswerSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("./src/*.css", style);
  gulp.watch("tailwind.config.js", style);
  gulp.watch("*.html", style);
  gulp.watch("*.html").on("change", broswerSync.reload);
}

exports.watch = watch;
exports.style = style;
