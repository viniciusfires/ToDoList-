console.log("teste");

const paleta1 = document.querySelector('#paleta1');
const paleta2 = document.querySelector('#paleta2');
const paleta3 = document.querySelector('#paleta3');
const botao_add = document.querySelector('.botao');
const botao_limpar = document.querySelector('.botao_limpar');
const atividades = document.querySelector('.atividades');
const paletas = document.querySelector('.paletas');
const container = document.querySelector('.container');
const caixa = document.querySelector('.caixa');
const erro = document.querySelector('.erro');
const input = document.querySelector('.input');

paleta1.addEventListener('click', () => defineBackground('yellow'));
paleta2.addEventListener('mouseover', () => defineBackground('tomato'));
paleta3.addEventListener('dblclick', () => defineBackground('slateblue'));
botao_limpar.addEventListener('click', () => removeAtividades());
botao_add.addEventListener('click', () => cadastrarAtividade());



function defineBackground(cor){
    container.style.background = cor;
    atividades.style.background = cor;
}

function cadastrarAtividade(){
    if(input.value.length > 5){
        criarAtividade();
    }else{
        erro.style.display = 'flex';
    }
}

function criarAtividade(){
    const div = document.createElement('div');
    div.classList.add('atividade');
    const nomeAtividade = document.createElement('h2');
    nomeAtividade.textContent = input.value;
    const button = document.createElement('button');
    button.textContent = 'Limpar';
    button.classList.add('botao_del');
    button.addEventListener('click', () => this.removeAtividade(div));
    div.appendChild(nomeAtividade);
    div.appendChild(button);
    atividades.appendChild(div);
    limparInput();

}

function limparInput(){
    input.value = '';
}

function removeAtividade(elemento){
    atividades.removeChild(elemento);
}

function removeAtividades(){
    while(atividades.firstChild){
        console.log(atividades);
        atividades.removeChild(atividades.firstChild)
    }
}
window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastrarAtividade();
    }
});
