const mix = require('laravel-mix');



//Backend css and js
mix.js('resources/js/backend/app.js', 'public/backend/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/global/bootstrap.css'); //global bootstarp file
mix.copy('resources/css/backend/backend.css', 'public/backend/css/custom.css');



//Frontend css and js
mix.js('resources/js/frontend/frontapp.js', 'public/frontend/js')
    .vue()
mix.copy('resources/css/frontend/frontend.css', 'public/frontend/css/custom.css');



// Global css
mix.copy('resources/css/global.css', 'public/global/globalcustom.css');