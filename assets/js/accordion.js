const itemButton = document.querySelectorAll('.accordion__container button'); //get all

itemButton.forEach(
  function(el){
    el.addEventListener('click', function() { //when the title of the element is clicked
    toggle(this);
    })
});
   
function toggle(obj) {
  let expanded = obj.getAttribute('aria-expanded');
  let targetId = obj.getAttribute('aria-controls');
  let targetElement = document.querySelector(`#${targetId}`);
  
  if (expanded == 'true'){
    targetElement.hidden=true;
    obj.setAttribute('aria-expanded','false');
    obj.focus();
  } else { 
    targetElement.removeAttribute("hidden")
    obj.setAttribute('aria-expanded','true');
    obj.focus();
    obj.scrollIntoView({behavior: "smooth"});
  }
}