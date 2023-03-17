// generates breadcrumb navigation
// pass in collections.all | eleventyNavigationBreadcrumb
module.exports = (pageNav) => {
  let breadcrumb = '<div role="navigation" aria-label="Breadcrumb" class="breadcrumb">\n<ul class="flex">\n';
  pageNav.forEach( (page,ind) => {
    breadcrumb+=`<li>`;
    let current = (ind==pageNav.length-1) && `<span aria-current="page">${page.title}</span></li>\n`;
    console.log(page.title,current);   
    breadcrumb+= current ? current : `<a href="${page.url}">${page.title}</a></li>\n`;
  });
  return breadcrumb+'\n</ul>\n</div>';
};
