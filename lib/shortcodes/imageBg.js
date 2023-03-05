const path = require('path');
const Image = require('@11ty/eleventy-img');
const presets = require('../utils/imgPresets.js');


module.exports = async function (src, classes,srOnly) {
  let picMetadata = src && await Image(path.join('./src', src),{
    outputDir:"public/assets/img/thumb/",
    urlPath: "/assets/img/thumb/",
    formats: presets['thumb'].formats,
    widths: presets['thumb'].widths,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src)
      const name = path.basename(src, extension)
      return `${name}-${width}w.${format}`
    }
  });
  let picUrl = picMetadata ? `--img-src: url('${picMetadata.jpeg[0].url}')` : "";
  return `<div class="${classes.join(' ')}" style="${picUrl}" ><span class="sr-only">${srOnly}</span></div>`;
}