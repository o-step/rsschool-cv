

if (window.screen.width < 768) {
  let btn = document.getElementById('btn__arrow-up');

window.onscroll = function() {
  scrollFunc()
};

function scrollFunc() {
    if (document.body.scrollTop > 380 || document.documentElement.scrollTop > 380) {
      btn.style.display = "block";
  } else {
      btn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  btn.addEventListener('click', scrollFunc);
  btn.addEventListener('click', topFunction);
}