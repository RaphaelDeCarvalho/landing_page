let screenTop = document.querySelector('#toppage');
let screenMiddle = document.querySelector('#middlepage');
let screenBottom = document.querySelector('#bottompage');

let buttonUp = document.querySelector('button.botaoUp');
let buttonMiddle = document.querySelector('button.botaoMiddle');
let buttonDown = document.querySelector('button.botaoDown');
let buttonTop = document.querySelector('button.botaoTop');

let buttonLeft = document.querySelector('button.botaoLeft');
let buttonRight = document.querySelector('button.botaoRight');

// Script para exibição de telas dinâmicas
let telaTitulo1 = document.querySelector('section.split.titulopage').style.backgroundImage = "url('img/soap4.jpg')";
let telaTitulo2 = document.querySelector('section.split.titulopage').style.backgroundImage = "url('img/soap1.jpg')";
ArrayTitulo = [];
ArrayTitulo.push(telaTitulo1);
ArrayTitulo.push(telaTitulo2);
var counterTitulo = 0;
setInterval(function(){
    document.querySelector('section.split.titulopage').style.backgroundImage = ArrayTitulo[counterTitulo];
    if(counterTitulo < ArrayTitulo.length) {counterTitulo++;
    }else { counterTitulo = 0;}
}, 10000);
console.log(ArrayTitulo);

let telaConsumer1 = document.querySelector('section.split.institucionalpage').style.backgroundImage = "url('img/consumer3.jpg')";
let telaConsumer2 = document.querySelector('section.split.institucionalpage').style.backgroundImage = "url('img/consumer1.jpg')";
ArrayConsumer = [];
ArrayConsumer.push(telaConsumer1);
ArrayConsumer.push(telaConsumer2);
var counterConsumer = 0;
setInterval(function(){
    document.querySelector('section.split.institucionalpage').style.backgroundImage = ArrayConsumer[counterConsumer];
    if(counterConsumer < ArrayConsumer.length) {counterConsumer++;
    }else { counterConsumer = 0;}
}, 16000);
console.log(ArrayConsumer);

let telaForm1 = document.querySelector('section.split.infospage').style.backgroundImage = "url('img/consumer5.jpg')";
let telaForm2 = document.querySelector('section.split.infospage').style.backgroundImage = "url('img/consumer2.jpg')";
ArrayForm = [];
ArrayForm.push(telaForm1);
ArrayForm.push(telaForm2);
var counterForm = 0;
setInterval(function(){
    document.querySelector('section.split.infospage').style.backgroundImage = ArrayForm[counterForm];
    if(counterForm < ArrayForm.length) {counterForm++;
    }else { counterForm = 0;}
}, 12000);
console.log(ArrayForm);


//Script para inserir nome de usuário no e-mail resposta
const inputNome = document.querySelector('input#nome');

inputNome.addEventListener('input', escreveNome);

function escreveNome(){
  let inputResposta = document.querySelector('input#resposta');
  inputResposta.setAttribute("value", `Olá, ${inputNome.value}! \nObrigado por se Inscrever para conhecer mais sobre o Sabão Natural, em breve você irá receber e-mails com as novidades do produto e outras informações para estar antenado com o nosso mais novo lançamento.(Ou não pois isso nada mais é que uma landing page fictícia)`)
  console.log(inputNome.value);
}


//Script de navegação de telas pelas setas
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


//Script para exibir e ocultar setas de cada tela
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
