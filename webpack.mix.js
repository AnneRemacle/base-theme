// webpack.mix.js
let mix = require('laravel-mix');

mix.js('sources/js/main.js', 'build/main.min.js').setPublicPath('build');
mix.sass('sources/sass/styles.scss', 'build/styles.min.css').setPublicPath('build');
