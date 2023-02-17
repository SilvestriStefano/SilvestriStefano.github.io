const path = require('path');
const Image = require('@11ty/eleventy-img');
const presets = require('./imgPresets.js');

module.exports = async function (src, alt, classes, preset = 'default') {
  let metadata = await Image(path.join('./src', src), {
      outputDir:"public/assets/img/",
      urlPath: "/assets/img/",
      formats: presets[preset].formats,
      widths: presets[preset].widths,
      filenameFormat: function (id, src, width, format, options) {
				const extension = path.extname(src)
				const name = path.basename(src, extension)
				return `${name}-${width}w.${format}`
			}
    });

  const pictureOut = Image.generateHTML(metadata, {
    alt: alt || '',
    ...(classes && { class: classes }),
    decoding: 'async',
    loading: 'lazy',
    ...(presets[preset].sizes && { sizes: presets[preset].sizes }),
    });

  return pictureOut;
};
