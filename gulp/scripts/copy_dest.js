//==========================
// 打包進去 dist folder
//==========================




gulp.task('copy_all', function () {
        
         //html
    return gulp.src('*.html', {
            base: './'
        })
        .pipe(gulp.dest('./dist'))
        
        //css
        && gulp.src(web.css, {
            base: './'
        })
        .pipe(urlAdjuster({
            replace: ['../images/', '../images/']
        }))
        .pipe(cssmin({
           keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./dist/'))
       
        // all files
        && gulp.src(web.files, {
            base: './'
        })
        .pipe(gulp.dest('./dist/'))
        
        //js       
        && gulp.src(web.js, {
            base: './'
        })
        .pipe(gulp.dest('./dist/'))
        //app
         && gulp.src(web.app, {
            base: './'
        })
        .pipe(gulp.dest('./dist/'));
});