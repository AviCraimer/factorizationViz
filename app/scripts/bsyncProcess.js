const bs = require('browser-sync').create();

// .init starts the server
bs.init({
    server: "./",
    files: ["*.js", '*.css', '*.html', 'images/*.svg']
});

// Now call methods on bs instead of the
// main browserSync module export
// bs.reload("*.html");