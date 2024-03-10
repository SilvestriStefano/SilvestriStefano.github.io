const path = require('path');
const md = require('../../libraries/markdown.js');
const createPicture = require('../../utils/imgCreate.js'); 


function wrapFigure(output, caption,id) {
  return `<figure role="figure" aria-labelledby="${id}">${output}<figcaption id="${id}">${md.renderInline(caption)}</figcaption></figure>`;
}

module.exports = async function (src, alt, caption="", classes, preset = 'default') {
  const extension = path.extname(src)
  const name = path.basename(src, extension)
  let picHTML = await createPicture(src,alt,classes,preset);
  return caption ? wrapFigure(picHTML,caption,name) : picHTML;
}
