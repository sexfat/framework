//==========================
// 打包進去 dist folder
//==========================

var gulp = require('gulp'),
    cssmin = require('gulp-cssmin');
    // urlAdjuster = require('gulp-css-url-adjusters'); // 更換 css 檔案路徑


var clean = require('./clean.js');




var web = {
    assets: [
        'assets/fonts/*',
        'assets/images/*',
    ],
    libs: []
};






//先清空資料夾 在放新檔案

gulp.task('dist' , ['clean'] ,function () {

    //html
    return gulp.src('*.html', {
            base: './'
        })
        .pipe(gulp.dest('./dist'))

        //css
        &&
        gulp.src('assets/css/*', {
            base: './'
        })
        // .pipe(urlAdjuster({
        //     replace: ['./assets/images/', './assets/images/']
        // }))
        .pipe(cssmin({
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./dist/'))

        // all files
        &&
        gulp.src(web.assets, {
            base: './'
        })
        .pipe(gulp.dest('./dist/'))
        //js       
        &&
        gulp.src('assets/js', {
            base: './'
        })
        .pipe(gulp.dest('./dist/'))
});