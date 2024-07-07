import path from 'path';
import Image from '@11ty/eleventy-img';
import presets from '../../utils/imgPresets.js';


export const imageBg = async (src, classes, srOnly) => {
    let picMetadata = src && await Image(path.join('./src', src), {
        outputDir: "public/assets/img/thumb/",
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