// generates breadcrumb navigation
// pass in collections.all | eleventyNavigationBreadcrumb, (current) page
module.exports = (pageNav, page) => {
  let breadcrumb = '<div role="navigation" aria-label="Breadcrumb" class="breadcrumb">\n<ul class="flex">';
  pageNav.forEach( (entry) => {
    breadcrumb+=`<li>`;
    let current = (page.url==entry.url) && `<span aria-current="page">${entry.title}</span></li>`;
    breadcrumb+= current ? current : `<a href="${entry.url}">${entry.title}</a></li>`;
  });
  return breadcrumb+'</ul></div>';
};
