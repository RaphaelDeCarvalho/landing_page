//Script para exibir e ocultar setas de cada tela
export
function displayArrow(){
    let screenTop = document.querySelector('#toppage');
    let screenMiddle = document.querySelector('#middlepage');
    let screenBottom = document.querySelector('#bottompage');

    let buttonUp = document.querySelector('button.botaoUp');
    let buttonMiddle = document.querySelector('button.botaoMiddle');
    let buttonDown = document.querySelector('button.botaoDown');
    let buttonTop = document.querySelector('button.botaoTop');

    let buttonLeft = document.querySelector('button.botaoLeft');
    let buttonRight = document.querySelector('button.botaoRight');
    console.log('função displayArrow puxada com sucesso!')

    window.onscroll = function() {showScroll()};
    function showScroll() {
    
        if (document.documentElement.scrollLeft > 48) {
        buttonLeft.style.display = "block"; buttonRight.style.display = "none";
        } else if(document.documentElement.scrollTop > 0){
        buttonRight.style.display = "none";
        } else {
        buttonLeft.style.display = "none"; buttonRight.style.display = "block";
        } 
    
    if (document.documentElement.scrollTop > 300) {
        buttonMiddle.style.display = "none"; buttonUp.style.display = "block";
    } else {
        buttonMiddle.style.display = "block"; buttonUp.style.display = "none";
    } 
    
    if (document.documentElement.scrollTop > 1300) {
        buttonTop.style.display = "block"; buttonDown.style.display = "none";
    } else {
        buttonTop.style.display = "none"; buttonDown.style.display = "block";
    }
    }
    
}