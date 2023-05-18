// Secondary Navigation. It lists only the first level child pages.
// pass in collections.all | eleventyNavigationBreadcrumb (of the parent page), eleventyNavigation, (current) page
module.exports = (parentPage, pageList, page) => {
  let containerDiv = '<div role="navigation" aria-label="Sub Menu" class="submenu">';
  const parentLink = (page.url==parentPage[0].url) ? `/<strong>${parentPage[0].title}</strong>` : `/<a href="${parentPage[0].url}">${parentPage[0].title}</a>`;
  containerDiv += parentLink+'\n<ul class="flex secondary-navigation">';
  pageList.forEach( (entry) => {
    containerDiv+=`<li`;
    let current = (page.url==entry.url) && ` aria-current="page" class="active"><strong>${entry.title}</strong></li>`;
    containerDiv+= current ? current : `><a href="${entry.url}">${entry.title}</a></li>`;
  });
  return containerDiv+'</ul></div>';
};
