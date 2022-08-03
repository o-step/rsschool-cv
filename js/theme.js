let tumbler = document.getElementById('switch');
let main = document.getElementById('main');
let textTitle = document.getElementsByClassName('section__title');
let aboutP = document.getElementsByClassName('about__text')[0];
let university =  document.getElementsByClassName('education__wrapper')[0];
let skills = document.getElementsByClassName('li__skills');
let other = document.getElementsByClassName('li__skills-other');
let lang = document.getElementsByClassName('li__skills-lang');
let secIco = document.getElementsByClassName('section_icon');
let starIco = document.getElementsByClassName('star_icon');


window.onload = function() {

  if (localStorage.color === 'light') {
    tumbler.checked = true;
    changeTheme();
  }

};

function storageColor() {

  if (main.classList.contains('change-bg-color-js')) {
    localStorage.setItem('color', 'dark');
  }
  else if (!main.classList.contains('change-bg-color-js')) {
    localStorage.setItem('color', 'light');
  }

}

function changeTheme() {

  main.classList.toggle('change-bg-color-js');
  document.body.classList.toggle('change-bg-color-js');

  for (let i = 0; i < textTitle.length; i++) {
    textTitle[i].classList.toggle('change-color-title-js');
  }

  aboutP.classList.toggle('change-color-text-js');
  university.classList.toggle('change-color-text-js');

  for (let i = 0; i < skills.length; i++) {
    skills[i].classList.toggle('change-color-text-js');
  }

  for (let i = 0; i < other.length; i++) {
    other[i].classList.toggle('change-color-text-js');
  }

  for (let i = 0; i < lang.length; i++) {
    lang[i].classList.toggle('change-color-text-js');
  }

  for (let i = 0; i < secIco.length; i++) {
    secIco[i].classList.toggle('change-color-ico-js');
  }

  for (let i = 0; i < starIco.length; i++) {
    starIco[i].classList.toggle('change-color-ico-js');
  }
}

tumbler.addEventListener('click', storageColor);
tumbler.addEventListener('change', changeTheme);
