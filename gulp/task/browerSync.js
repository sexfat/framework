var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload;


// var fnc = 'html'; // html or pug  




//html style
require('../scripts/html_template.js');
require('../scripts/html_pug.js');
require('../scripts/jshint.js');

var web = {
    sass: [
        'sass/*.scss',
        'sass/**/*.scss',
        'sass/**/**/*.scss'
    ],
    css: [
        './dest/css/*.css',
        './dest/css/**/*.css'
    ]
};
// 用 module 的概念傳遞值
module.exports = function (fnc) {

    //broswerSync static
    gulp.task('static', ['styles'], function () {
        browserSync.init({
            server: {
                baseDir: "dest",
                index: "main_v.html"
            }
        });
        gulp.watch(web.sass, ['styles']).on('change', reload); //watch  sass
        gulp.watch('./dest/*.html').on('change', reload); //watch  sass
        if (fnc == 'html') {
            gulp.watch(['./app/html/*.html', './app/html/**/*.html'], ['fileinclude']).on('change', reload); //watch  sass
        } else if (fnc == 'pug') {
            gulp.watch(['./app/pug/*.pug', './app/pug/**/*.pug'], ['compilePug']).on('change', reload); //watch  sass     
        } else if (fnc == 'all') {
            gulp.watch(['./app/pug/*.pug', './app/pug/**/*.pug'], ['compilePug']).on('change', reload); //watch  sass
            gulp.watch(['./app/html/*.html', './app/html/**/*.html'], ['fileinclude']).on('change', reload); //watch  sasss
        }
        gulp.watch('./dest/css/*.css', ['css']).on('change', reload); //watch  autofixer
        gulp.watch('./dest/js/*.js', ['lint']).on('change', reload); //watch  autofixer
    });
}