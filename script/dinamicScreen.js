// Script para exibição de telas dinâmicas
export
function dinamicScreen(){
    console.log('função dinamicScreen chamada com sucesso!')
    const telaTitulo1 = document.querySelector('section.split.titulopage').style.backgroundImage = "url('img/soap1.jpg')";
    const telaTitulo2 = document.querySelector('section.split.titulopage').style.backgroundImage = "url('img/soap4.jpg')";
    const telaTitulo3 = document.querySelector('section.split.titulopage').style.backgroundImage = "url('img/soap3.jpg')";
    const telaTitulo4 = document.querySelector('section.split.titulopage').style.backgroundImage = "url('img/soap2.jpg')";
    const ArrayTitulo = [];
    ArrayTitulo.push(telaTitulo1);
    ArrayTitulo.push(telaTitulo2);
    ArrayTitulo.push(telaTitulo3);
    ArrayTitulo.push(telaTitulo4);
    let counterTitulo = 0;
    setInterval(function(){
        document.querySelector('section.split.titulopage').style.backgroundImage = ArrayTitulo[counterTitulo];
        if(counterTitulo < ArrayTitulo.length) {counterTitulo++;
        }else { counterTitulo = 0;}
    }, 10000);
    console.log(ArrayTitulo);

    const telaConsumer1 = document.querySelector('section.split.institucionalpage').style.backgroundImage = "url('img/consumer3.jpg')";
    const telaConsumer2 = document.querySelector('section.split.institucionalpage').style.backgroundImage = "url('img/consumer1.jpg')";
    const ArrayConsumer = [];
    ArrayConsumer.push(telaConsumer1);
    ArrayConsumer.push(telaConsumer2);
    let counterConsumer = 0;
    setInterval(function(){
        document.querySelector('section.split.institucionalpage').style.backgroundImage = ArrayConsumer[counterConsumer];
        if(counterConsumer < ArrayConsumer.length) {counterConsumer++;
        }else { counterConsumer = 0;}
    }, 16000);
    console.log(ArrayConsumer);

    const telaForm1 = document.querySelector('section.split.infospage').style.backgroundImage = "url('img/consumer5.jpg')";
    const telaForm2 = document.querySelector('section.split.infospage').style.backgroundImage = "url('img/consumer2.jpg')";
    const ArrayForm = [];
    ArrayForm.push(telaForm1);
    ArrayForm.push(telaForm2);
    let counterForm = 0;
    setInterval(function(){
        document.querySelector('section.split.infospage').style.backgroundImage = ArrayForm[counterForm];
        if(counterForm < ArrayForm.length) {counterForm++;
        }else { counterForm = 0;}
    }, 12000);
    console.log(ArrayForm);
}
