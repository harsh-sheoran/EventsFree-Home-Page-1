let background = document.getElementById("navbar");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    background.classList.add("navbg");
    background.classList.remove("bg-transparent");
  } else {
    background.classList.add("bg-transparent");
    background.classList.remove("navbg");
  }
}