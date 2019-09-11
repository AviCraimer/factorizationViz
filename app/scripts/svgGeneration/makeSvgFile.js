const fs = require('fs')

const svgTemplate = function (ops) {
    {}
    return `
<?xml version="1.0" encoding="UTF-8"?>
<svg width="1000px" height="1000px" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${ops.title ? `<title>${title}</title>` : ''}
    ${ops.elements ? ops.elements.reduce((a,c)=> {a + c + '\n'}, ''): ''}
</svg>`
}


module.exports {
    makeSvgFile
}
