const {writeFileSync}  = require('fs')



const svgTemplate = function (ops) {
    const height = (ops.height) ? ops.height  : 1000;
    const width = (ops.width) ? ops.width  : 1000;
    const fileHeader = (ops.noFileHeader === true) ? ''  : '<?xml version="1.0" encoding="UTF-8"?>';

    return `
${fileHeader}
<svg width="${width}px" height="${height}px" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    ${ops.title ? `<title>${ops.title}</title>` : ''}
    ${ops.elements ? ops.elements.reduce((a,c)=> a + c + '\n', ''): ''}
</svg>`.trim();
}

function writeSvgFile (path,  ops) {
    const markup = svgTemplate(ops);
    writeFileSync(path, markup);
    console.log("SVG written to " + path);
}



module.exports =  {
    svgTemplate,
    writeSvgFile
}
