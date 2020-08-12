/* require */
var fs = require('fs'),
    gulp = require('gulp'),
    sass = require('gulp-sass');
    sass.compiler = require('node-sass');

/* sass convert */
gulp.task("watch", function() {
  return gulp.watch(["./sass/**/*.scss","./sass/*.scss"], function() {
    return (gulp.src(["./sass/**/*.scss","./sass/*.scss"])
        .pipe(sass({outputStyle: "expanded"}).on("error", sass.logError))
        .pipe(gulp.dest("./css"))
    );
  });
});