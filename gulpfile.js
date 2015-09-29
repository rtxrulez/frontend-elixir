var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var elixir = require('laravel-elixir');
//require('laravel-elixir-imagemin');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
gulp.task("sprite", function() {
    var spriteData = gulp.src('resources/assets/img/sprite/*').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        imgPath: '/img/sprite.png',
        padding: 10
    }));
    spriteData.img.pipe(gulp.dest('public/img/'));
    spriteData.css.pipe(gulp.dest('resources/assets/less/'));
});

elixir(function(mix) {
    mix
        .less('app.less')
        .copy('resources/assets/vendor/font-awesome/fonts', 'public/fonts')
        .copy('resources/assets/vendor/bootstrap/fonts', 'public/fonts')
        //.imagemin("./resources/assets/img", "public/img/")
        .scripts(
            [
                '../vendor/jquery/dist/jquery.js',
                '../vendor/bootstrap/dist/js/bootstrap.js',
                'main.js'
            ],
            'public/js/app.min.js'
        )
        //.version(["public/css/app.css", "public/js/app.min.js"])
        .task('sprite')
});
