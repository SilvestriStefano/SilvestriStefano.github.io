// Kevin Powell `Responsive navbar tutorial using HTML CSS & JS` https://youtu.be/HbBMp6yUXO0
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const subNav = document.querySelector('.sub-navigation');
const subNavToggle = document.querySelector('.subnav-toggle');

navToggle.addEventListener('click',()=>{
    const visibility = primaryNav.getAttribute('data-visible');
    let val = (visibility=='true' ? 'false' : 'true');
    primaryNav.setAttribute('data-visible', val);
    navToggle.setAttribute('aria-expanded', val);
});
subNavToggle.addEventListener('click',()=>{
    const visibility = subNav.getAttribute('data-visible');
    let val = (visibility=='true' ? 'false' : 'true');
    subNav.setAttribute('data-visible', val);
    subNavToggle.setAttribute('aria-expanded', val);
});