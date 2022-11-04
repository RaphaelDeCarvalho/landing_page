let screenTop = document.querySelector('#toppage');
let screenMiddle = document.querySelector('#middlepage');
let screenBottom = document.querySelector('#bottompage');

let buttonUp = document.querySelector('button.botaoUp');
let buttonMiddle = document.querySelector('button.botaoMiddle');
let buttonDown = document.querySelector('button.botaoDown');
let buttonTop = document.querySelector('button.botaoTop');

let buttonLeft = document.querySelector('button.botaoLeft');
let buttonRight = document.querySelector('button.botaoRight');

buttonMiddle.addEventListener('click', function(){
  screenMiddle.scrollIntoView()
  console.log(`body.scrollTop = ${document.body.scrollTop} & 
  documentElement.scrollTop = ${document.documentElement.scrollTop}`)
});

buttonUp.addEventListener('click', function(){
  screenTop.scrollIntoView()
  console.log(`body.scrollTop = ${document.body.scrollTop} & 
  documentElement.scrollTop = ${document.documentElement.scrollTop}`)
});
buttonDown.addEventListener('click', function(){
  screenBottom.scrollIntoView()
  console.log(`body.scrollTop = ${document.body.scrollTop} & 
  documentElement.scrollTop = ${document.documentElement.scrollTop}`)
});
buttonTop.addEventListener('click', function(){
  screenTop.scrollIntoView()
  console.log(`body.scrollTop = ${document.body.scrollTop} & 
  documentElement.scrollTop = ${document.documentElement.scrollTop}`)
});

buttonLeft.addEventListener('click', function(){
  screenTop.scrollIntoView()
  console.log(`body.scroll( = ${document.body.scrollLeft} & 
  documentElement.scroll( = ${document.documentElement.scrollLeft}`)
});
buttonRight.addEventListener('click', function(){
  screenBottom.scrollIntoView()
  console.log(`body.scroll( = ${document.body.scrollTop} & 
  documentElement.scroll( = ${document.documentElement.scrollTop}`)
});


window.onscroll = function() {showScroll()};
function showScroll() {
  
    if (document.body.scrollLeft > 0 || document.documentElement.scrollLeft > 48) {
      buttonLeft.style.display = "block"; buttonRight.style.display = "none";
    } else if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      buttonRight.style.display = "none";
    } else {
      buttonLeft.style.display = "none"; buttonRight.style.display = "block";
    } 
  
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 100) {
    buttonMiddle.style.display = "none"; buttonUp.style.display = "block";
  } else {
    buttonMiddle.style.display = "block"; buttonUp.style.display = "none";
  } 
  
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 1600) {
    buttonTop.style.display = "block"; buttonDown.style.display = "none";
  } else {
    buttonTop.style.display = "none"; buttonDown.style.display = "block";
  }
}
