var gulp = require('gulp'),
    notify = require('gulp-notify'),
    pug = require('gulp-pug');
// 路徑
var path = {
    pug: [
        './app/pug/*.pug'
    ],
    html: './app/html/comp/'
};



// pug主程式
gulp.task('compilePug', function () {
    return gulp.src(path.pug)
        .pipe(pug({
            pretty: true
        }))
        .on('error', notify.onError(function (error) {
            return '你的PUG編錯啦~~~~~~!\n  watch console \n' + error;
        }))
        .pipe(gulp.dest(path.html))
});