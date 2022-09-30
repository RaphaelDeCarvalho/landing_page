var buttonUp = document.querySelector('button.botaoUp');
var buttonDown = document.querySelector('button.botaoDown');

function scrollButton(){
    document.documentElement.scrollTop = 1680
};
function scrollBackButton(){
    document.documentElement.scrollTop = 0
}

window.onscroll = function() {showScroll()};

function showScroll() {
  if (document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
    buttonDown.style.display = "none"; buttonUp.style.display = "block"
  } else {
    buttonDown.style.display = "block"; buttonUp.style.display = "none"
  }
}