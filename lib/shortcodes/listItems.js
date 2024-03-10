const md = require('../libraries/markdown');

module.exports = (obj, key) => {
    
    let html = "";
    switch (key.toLowerCase()) {
        case "posters":
            html += posterList(obj[key]);
            break;
        case "awards":
            html += awardsList(obj[key]);
            break;
        case "publications":
            html += '<aside class="category-legend grid" aria-label="Legend of publication\'s category"><span data-category="purem" id="purem">Pure Mathematics</span> <span data-category="applm" id="applm">Applied Mathematics</span> <span data-category="histm" id="histm">History of Mathematics</span> <span data-category="eleceng" id="eleceng">Electrical Engineering</span></aside>';
            html += publicationsList(obj[key]);
            break;
        case "talks":
            html += '<p>The talks with an <span data-invited="true"></span> indicate that I have been invited to it.</p>';
            obj[key].forEach(item=>{
                let header = item.type.split(" ").join("_");
                console.log(header);
                html += detailsGenerator(header,item.talks, 3);
            })
            break;
        default:
            break;
    }
    return html;

    function detailsGenerator(header, items, level = 2) {
        if (level > 4) return '';

        let list = `<details class="accordion__container"><summary><h${level}>${header.split("_").join(" ")}</h${level}></summary>`;
        list += `<div id="accordion-panel-${header}" class="accordion__panel">`

        switch (header.toLowerCase()) {
            case "graduate_student_seminar":
                list += gSeminarList(items);
                break;
            case "seminar":
                list += seminarList(items);
                break;
            case "colloquium":
                list += colloquiumList(items);
                break;
            case "workshop":
                list += workshopList(items);
                break;
            case "conference":
                list += conferenceList(items);
                break;
            default:
                list += '';
        }
        list += '</div></details>';
        return list;
    }

    function posterList(items) {
        let list = '<ul role="list">';
        items.forEach((item) => {
            list += `<li><cite>"${md.renderInline(item.title)}"</cite> `;
            list += `<em>${item.authors}</em> <strong>${item.conference}</strong> <time>${item.date}</time>.`;
            list += (item.file) ? ` <a href="${item.file}">(.pdf)</a>` : '';
            list += '</li>';
        }
        );
        list += '</ul>';
        return list;
    }

    function awardsList(items) {
        let list = '<ul role="list">';
        items.forEach((item) => {
            list += `<li> <strong>${item.title}</strong> from <em>`;
            list += (item.link) ? `<a href="${item.link}">${item.from}</a>` : `${item.from}`;
            list += `</em> <time>${item.date}</time>.</li>`;
        });
        list += '</ul>';
        return list;
    }

    function publicationsList(items) {
        let list = '<ul role="list">';
        items.forEach((item, index) => {
            list += `<li data-category="${item.category}" aria-labelledby="${item.category}">${md.renderInline(item.authors)} <cite>"${md.renderInline(item.title)}"</cite> <em>${item.journal}</em>`
            if (item.volume) list += ` <strong>${item.volume}</strong>,`;
            if (item.pages) list += ` pp.${item.pages}`;
            if (item.year) list += ` (${item.year}).`;

            list += '<div class="pub_links">';
            if (item.inpreparation) {
                list += ` <em>---in preparation---</em>`;
            } else {
                if (item.journallink) {
                    list += `<a href="${item.journallink}">Journal`;
                    if (item.doi) list += ` DOI:${item.doi}`;
                    list += '</a> ';
                }
            }
            if (item.preprint) list += `<a href="${item.preprint}">Preprint (.pdf)</a> `;
            if (item.abstract) {
                list += `<details id="abstract-pub-${index}"><summary>abstract</summary>`;
                list += `<div id="pub-${index}" class="abstract">${md.renderInline(item.abstract)}</div>`;
            }
            list += '</div></li>';
        });
        list += '</ul>';
        return list;
    }

    function gSeminarList(items) {
        let list = '<ul role="list">';
        items.forEach((item) => {
            list += `<li><cite>''${md.renderInline(item.title)}''</cite> (${item.date})</li>`;
        });
        list += '</ul>';
        return list;
    }

    function seminarList(items) {
        let list = '<ul role="list">';
        items.forEach((item, index) => {
            list += `<li data-invited="${item.invited}"><cite>''${md.renderInline(item.title)}''</cite> (${item.date})`;
            if (item.abstract) list += ` <button type="button" id="abstract-seminar-${index}" class="btn-abstract" aria-controls="seminar-${index}" aria-expanded="false">abstract</button>`;
            list += `<p><em>${item.name}</em> at <strong>${item.university}</strong></p></li>`;
            if (item.abstract) list += ` <div id="seminar-${index}" aria-label="abstract-seminar-${index}" class="abstract" hidden>${md.renderInline(item.abstract)}</div>`;
        });
        list += '</ul>';
        return list;
    }

    function colloquiumList(items) {
        let list = '<ul role="list">';
        items.forEach((item, index) => {
            list += `<li data-invited="${item.invited}"><cite>''${md.renderInline(item.title)}''</cite> (${item.date})`;
            if (item.abstract) list += ` <button type="button" id="abstract-colloquium-${index}" class="btn-abstract" aria-controls="colloquium-${index}" aria-expanded="false">abstract</button>`;
            list += `<p><em>${item.name}</em> at <strong>${item.university}</strong></p>`;
            if (item.abstract) list += ` <div id="colloquium-${index}" aria-label="abstract-colloquium-${index}" class="abstract" hidden>${md.renderInline(item.abstract)}</div>`;
            list += '</li>';
        });
        list += '</ul>';
        return list;
    }

    function workshopList(items) {
        let list = '<ul role="list">';
        items.forEach((item, index) => {
            list += `<li data-invited="${item.invited}"><cite>''${md.renderInline(item.title)}''</cite> (<time>${item.date}</time>)`;
            if (item.abstract) list += ` <button type="button" id="abstract-workshop-${index}" class="btn-abstract" aria-controls="workshop-${index}" aria-expanded="false">abstract</button>`;
            list += '<p><em>' + ((item.link) ? `<a href="${item.link}">${item.name}</a>` : `${item.name}`) + '</em></p>';
            if (item.abstract) list += ` <div id="workshop-${index}" aria-label="abstract-workshop-${index}" class="abstract" hidden>${md.renderInline(item.abstract)}</div>`;
            list += '</li>';
        });
        list += '</ul>';
        return list;
    }

    function conferenceList(items) {
        let list = '<ul role="list">';
        items.forEach((item) => {
            list += `<li data-invited="${item.invited}"><cite>''${md.renderInline(item.title)}''</cite> (<time>${item.date}</time>)<p><em>`;
            list += (item.link) ? `<a href="${item.link}">${item.name}</a>` : `${item.name}`;
            list += '</em>' + ((item.session) ? `: ${item.session}` : '');
            if (item.abstract) list += ` <button type="button" id="abstract-conference-${index}" class="btn-abstract" aria-controls="conference-${index}" aria-expanded="false">abstract</button>`;
            list += '</p>';
            if (item.abstract) list += ` <div id="conference-${index}" aria-label="abstract-conference-${index}" class="abstract" hidden>${md.renderInline(item.abstract)}</div>`;
            list += '</li>';
        });
        list += '</ul>';
        return list;
    }

};
