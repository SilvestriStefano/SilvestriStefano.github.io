import md from '../../libraries/markdown.js';
import {image} from './image.js';


async function visualizationsList(items) {
    let liItems = await Promise.all(items.map(async (item) => {
        let li = '<li class="card">';
        let picture = await image(item.thumbnail, item.alt, "", [],'thumb');
        li += picture;
        li += `<h4>${md.renderInline(item.title)}</h4>`;
        li += `<a href="${item.link}" class="card-link">open</a>`;
        li += `<p><strong>Language</strong>: ${item.language}</p>`;
        li += `<p>${md.renderInline(item.description)}</p>`;
        li += '</li>'; 
        return li;
    }));
    return liItems.join('\n');
}

async function websList(items) {
    let liItems = await Promise.all(items.map(async (item) => {
        let li = '<li class="card">';
        let picture = await image(item.thumbnail, item.alt, "", [],'thumb');
        li += picture;
        li += `<h4>${md.renderInline(item.title)}</h4>`;
        if (item.source) li += `<a href="${item.source}" class="card-link">source</a>`;
        li += `<a href="${item.link}" class="card-link">homepage</a>`;
        li += `<p><strong>Framework</strong>: ${item.framework}</p>`;
        if (item.details.length > 0) li += `<p><strong>Details:</strong> ${item.details.join('; ')}.</p>`;
        li += `<p>${md.renderInline(item.description)}</p>`;
        li += '</li>';	
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