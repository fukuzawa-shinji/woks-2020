/* require */
var fs = require('fs'),
    gulp = require('gulp'),
    convert = require('gulp-convert'),
    rename = require('gulp-rename'),
    ejs = require('gulp-ejs'),
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

/* csv to json */
gulp.task('csvConv', function(done) {
    //csvの読み込み・変換
    return gulp.src('src/sitedata/csv/*.csv')
        .pipe(convert({ from: 'csv', to:'json'}))
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('src/sitedata/json/'));
    done();
});

gulp.task('ejs', function(done) {
    var jsonData01 = 'src/sitedata/json/sample-data.json',
        json01 = JSON.parse(fs.readFileSync(jsonData01, 'utf8'));

    //jsonの読み込みとejsからHTMLの出力
    for(var i = 0; i < json01.length; i++) {
        var fileName = json01[i].id;

        gulp.src('src/ejs/tmp_product.ejs')
            .pipe(ejs({
                jData01: json01[i]
            }))
            .pipe(rename(fileName + '/index.html'))
            .pipe(gulp.dest('../public/'));
    }
    done();
});

gulp.task('build', gulp.series('csvConv', 'ejs', function (cb) {
    cb();
}));
