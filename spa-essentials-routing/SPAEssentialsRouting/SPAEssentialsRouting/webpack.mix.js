let mix = require('laravel-mix');

mix.options({
        publicPath: './'
    })
    .extract([
        'axios',
        'vue'
    ])
    .js([
        'Scripts/main.js'
    ], 'wwwroot/js/site.js')
    //.js([
    //    'Areas/YourArea/Scripts/pathToYourSrcFile/yourSrcFile.js'
    //], 'wwwroot/js/dist/yourDestinationFile.js')
    .then((stats) => {
        var date = new Date();
        var day = date.getDate();
        var month = (`0${date.getMonth() + 1}`).slice(-2);
        var year = date.getFullYear();
        var hour = (`0${date.getHours()}`).slice(-2);
        var minute = (`0${date.getMinutes()}`).slice(-2);
        var second = (`0${date.getSeconds()}`).slice(-2);
        console.log('');
        console.log(`${year}-${month}-${day} ${hour}:${minute}:${second}`);
    });
    