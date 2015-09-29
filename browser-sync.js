var gulp = require('gulp');
var browserSync = require('browser-sync').create();
require('./elixir-browser-sync'); // переменная с адресом локального домена пример в elixir-browser-sync.js.example
/*
 Тунель запускается командой
 gulp elixir-browser-sync
 Если включит в соседней вкладке gulp watch то появится функция livereload
 */
gulp.task("default", function() {
    browserSync.init({
        proxy           : domainName,
        logPrefix       : "Laravel Eixir BrowserSync",
        logConnections  : false,
        reloadOnRestart : false,
        notify          : false,
        open            : false,
        tunnel: true
    });
    gulp.watch("public/css/*").on('change', browserSync.reload);
    //gulp.watch("resources/view/**/*").on('change', browserSync.reload);
});