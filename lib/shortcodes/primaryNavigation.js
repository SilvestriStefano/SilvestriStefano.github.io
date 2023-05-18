// Primary Navigation. It only lists first level pages.
// pass in collections.all | eleventyNavigation, (current) page
module.exports = (pageNav, page) => {

  function createLi(entry) {
    let active = (entry.url === page.url);
    let classList =  active ? ['active'] : [];

    return (
      '<li' +(classList.length ? ` class="${ classList.join(' ') }"` : '') +'>' +
      (active ? `<strong>` : `<a href="${ entry.url }">`) + entry.title + (active ? `</strong>` : '</a>') + 
      '</li>'
    );
  }

  let nav = '';
  pageNav.forEach( (entry) => nav += createLi(entry) )

  return `<ul id="primary-navigation" class="primary-navigation flex" role="list" >${ nav }</ul>`;

};
