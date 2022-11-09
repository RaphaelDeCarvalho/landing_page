//Script para inserir nome de usuário no e-mail resposta
export
function smartResponse(){
    console.log('função smartResponse chamada com sucesso!')
    const inputNome = document.querySelector('input#nome');

    inputNome.addEventListener('input', escreveNome);

    function escreveNome(){
    let inputResposta = document.querySelector('input#resposta');
    inputResposta.setAttribute("value", `Olá, ${inputNome.value}! \nObrigado por se Inscrever para conhecer mais sobre o Sabão Natural, em breve você irá receber e-mails com as novidades do produto e outras informações para estar antenado com o nosso mais novo lançamento.(Ou não pois isso nada mais é que uma landing page fictícia)`)
    console.log(inputNome.value);
    }
}