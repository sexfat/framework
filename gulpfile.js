var gulp = require('gulp');

   
//樣式 sass style
var style = require('./gulp/scripts/style.js');

//watch
// require('./gulp/scripts/watch.js'); 



// 刷新瀏覽器並同步
var browerSync =  require('./gulp/task/browerSync.js');
// 選擇 1.html 使用app/html   2.pug 使用app/pug  3. all 使用全部
var selectMoudule = new browerSync ('html')  // html or pug or all
// pug
// require('./gulp/scripts/html_pug.js');
 

//==================
// 執行指令
//==================

gulp.task('default', ['css','static']);

// gulp.task('pugs', ['compilePug']);


