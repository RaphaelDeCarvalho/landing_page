//Script de navegação de telas pelas setas
export
function arrowNavigation(){
    let screenTop = document.querySelector('#toppage');
    let screenMiddle = document.querySelector('#middlepage');
    let screenBottom = document.querySelector('#bottompage');

    let buttonUp = document.querySelector('button.botaoUp');
    let buttonMiddle = document.querySelector('button.botaoMiddle');
    let buttonDown = document.querySelector('button.botaoDown');
    let buttonTop = document.querySelector('button.botaoTop');

    let buttonLeft = document.querySelector('button.botaoLeft');
    let buttonRight = document.querySelector('button.botaoRight');
    console.log('função arrowNavigation chamada com sucesso!')
    
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
  }