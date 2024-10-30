import md from '../../libraries/markdown.js';
import {imageBg} from './imageBg.js';


async function visualizationsList(items) {
    let liItems = await Promise.all(items.map(async (item) => {
        let li = '<li class="flex card">';
        let picture = await imageBg(item.thumbnail, ["card-img"], item.alt);
        li += picture;
        li += `<article class="flex card-description" style="--tag:'${item.language}'"><h4>${md.renderInline(item.title)}</h4><p>${md.renderInline(item.description)}</p>`;
        li += `<a href="${item.link}" class="card-link">open</a></article></li>`;
        return li;
    }));
    return liItems.join('\n');
}

async function websList(items) {
    let liItems = await Promise.all(items.map(async (item) => {
        let li = '<li class="flex card">';
        let picture = await imageBg(item.thumbnail, ["card-img"], item.alt);
        li += picture;
        li += `<article class="flex card-description" style="--tag:'${item.framework}'"><h4>${md.renderInline(item.title)}</h4><p>${md.renderInline(item.description)}</p>`;
        if (item.details.length > 0) li += `<p><strong>Details:</strong> ${item.details.join('; ')}.</p>`;
        li += `<a href="${item.link}" class="card-link">homepage</a>`
        if (item.source) li += `<a href="${item.source}" class="card-link">source</a>`;
        li += '</article></li>';
        return li;
    }));
    return liItems.join('\n');
}

export const showcase = async (obj, header) => {

    let list = '<ul class="flex portfolio" role="list">';

    switch (header) {
        case "visualizations":
            list += await visualizationsList(obj);
            break;
        case "websites":
            list += await websList(obj);
            break;
        default:
            list += '';
    }
    list += '</ul>';
    return list;

}; 