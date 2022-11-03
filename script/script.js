let screenTop = document.querySelector('#toppage');
let screenMiddle = document.querySelector('#middlepage');
let screenBottom = document.querySelector('#bottompage');

let buttonUp = document.querySelector('button.botaoUp');
let buttonMiddle = document.querySelector('button.botaoMiddle');
let buttonDown = document.querySelector('button.botaoDown');
let buttonTop = document.querySelector('button.botaoTop');


buttonUp.addEventListener('click', function(){
  screenTop.scrollIntoView()
  console.log('cliquei no up button')
});
buttonMiddle.addEventListener('click', function(){
  screenMiddle.scrollIntoView()
  console.log('cliquei no middle button')
});
buttonDown.addEventListener('click', function(){
  screenBottom.scrollIntoView()
  console.log('cliquei no down button')
});
buttonTop.addEventListener('click', function(){
  screenTop.scrollIntoView()
  console.log('cliquei no top button')
});
/*
function scrollBackButton(){
    document.documentElement.scrollTop = 0
};
function scrollMiddleButton(){
    document.documentElement.scrollTop = 840
};
function scrollBottomButton(){
    document.documentElement.scrollTop = 1680
};
*/

//window.onscroll = function() {showScroll()};

/*
function showScroll() {
  if (document.body.scrollTop > 22 || document.documentElement.scrollTop > 22) {
    buttonDown.style.display = "none"; buttonUp.style.display = "block"
  } else {
    buttonDown.style.display = "block"; buttonUp.style.display = "none"
  }
}
*/