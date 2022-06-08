let links = document.querySelectorAll('.contacts__link');
let icons = document.querySelectorAll('.contacts_icon');

for (let i = 0; i < links.length; i++) {

  links[i].onmouseover = function(event) {
    let target = event.target;
    target.previousElementSibling.classList.add('contacts__hover-icon-js');
  };

  links[i].onmouseout = function(event) {
    let target = event.target;
    target.previousElementSibling.classList.remove('contacts__hover-icon-js');
  };

}

for (let i = 0; i < icons.length; i++) {

  icons[i].onmouseover = function(event) {
    let target = event.target;
    target.nextElementSibling.classList.add('contacts__hover-a-js');
  };

  icons[i].onmouseout = function(event) {
    let target = event.target;
    target.nextElementSibling.classList.remove('contacts__hover-a-js');
  };

}