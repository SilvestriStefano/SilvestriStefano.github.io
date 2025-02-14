// Primary Navigation. It only lists first level pages.
// pass in collections.all | eleventyNavigation, (current) page
function createLi(entry, page) {
    const active = (entry.url === page.url);
    const classList = active ? ['active'] : [];

    return (
        '<li' + (classList.length ? ` class="${classList.join(' ')}"` : '') + '>' +
        (active ? `<strong>/` : `<a href="${entry.url}">/`) + entry.title + (active ? `</strong>` : '</a>') +
        '</li>'
    );
}
export const primaryNavigation = (pageNav, page) => {
    let nav = '';
    pageNav.forEach((entry) => nav += createLi(entry,page))

    return `<ul id="primary-navigation" class="primary-navigation flex">${nav}</ul>`;

};
