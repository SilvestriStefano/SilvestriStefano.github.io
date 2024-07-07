import path from 'path';
import md from '../../libraries/markdown.js';
import {imgCreate as createPicture} from '../../utils/imgCreate.js';

function wrapFigure(output, caption, id) {
    return `<figure role="figure" aria-labelledby="${id}">${output}<figcaption id="${id}">${md.renderInline(caption)}</figcaption></figure>`;
};

export const figureGroup = async (imgList, label)=> {
    let content = `<figure role="img" aria-label="${label}" >`;
    let pics = await Promise.all(imgList.map(async (img) => {
        const src = img.src;
        const extension = path.extname(src)
        const name = path.basename(src, extension)
        const alt = img.alt;
        const caption = img.caption;
        const classes = img.classes ? img.classes : null;
        const preset = img.preset ? img.preset : "default";
        const picHTML = await createPicture(src, alt, classes, preset);
        return wrapFigure(picHTML, caption, name);
    }));
    content += pics.join('\n') + '</figure>';
    return content;
}