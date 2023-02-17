// generates a page navigation list
const
  listType      = 'ul',
  elementActive = 'strong',
  classActive   = 'active',
  classOpen     = 'open';

// pass in collections.all | eleventyNavigation, (current) page, and maximum depth level
module.exports = (pageNav, page, maxLevel = 999) => {

  function navRecurse(entry, level = 1) {

    let childPages = '';

    if (level < maxLevel) {
      for (let child of entry.children) {
        childPages += navRecurse(child, level++);
      }
    }

    let active = (entry.url === page.url);
    let classList = [];

    if ((active && childPages) || childPages.includes(`<${ elementActive }>`)) classList.push(classOpen);
    if (active) classList.push(classActive);

    let subMenuArrow = `
    <button type="button" class="subnav-toggle" aria-controls="sub-navigation" aria-expanded="false">
      <span class="sr-only">Sub Menu</span>
      <svg viewBox="0 0 50 50" stroke="var(--clr-fg)" fill="none" >
        <path class="arrow" d="M 5 5 L 25 40 L 45 5" stroke-linecap="round" stroke-width="10"/>
      </svg>
    </button>
    `

    return (
      '<li' +(classList.length ? ` class="${ classList.join(' ') }"` : '') +'>' +
      (active ? `<${ elementActive }>` : `<a href="${ entry.url }">`) + entry.title +
      (active ? `</${ elementActive }>` : '</a>') + 
      (childPages ? ` ${subMenuArrow} 
      <${ listType } id="sub-navigation" class="sub-navigation flex" data-visible="false" role="list">${ childPages }</${ listType }>` : '') +
      '</li>'
    );

  }

  let nav = '';
  for (let entry of pageNav) {
    nav += navRecurse(entry);
  }

  return `<${ listType } id="primary-navigation" class="primary-navigation flex" role="list" data-visible="false" >${ nav }</${ listType }>`;

};
