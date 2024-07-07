// Secondary Navigation. It lists only the first level child pages.
// pass in collections.all | eleventyNavigationBreadcrumb (of the parent page), eleventyNavigation, (current) page
export const secondaryNavigation = (parentPage, pageList, page) => {
    let containerDiv = '<aside aria-label="Subpages navigation" class="submenu">\n<span aria-hidden="true">';
    const parent = (page.url == parentPage[0].url) ? `<strong>~/${parentPage[0].title}</strong>` : `~/${parentPage[0].title}`;
    containerDiv += parent + '> ls</span>\n<menu class="flex secondary-navigation">';
    pageList.forEach((entry) => {
        containerDiv += `<li`;
        let current = (page.url == entry.url) && ` aria-current="page" class="active"><strong>/${entry.title}</strong></li>`;
        containerDiv += current ? current : `><a href="${entry.url}">/${entry.title}</a></li>`;
    });
    return containerDiv + '</menu></aside>';
};
