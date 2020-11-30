let nome = prompt("Digite seu nome:");

let boasvindas = `Seja bem vindo, ${nome}!`;

alert(boasvindas);


function mostrarNome()  {
    let divnova = document.createElement("div");
    let inputNome = document.querySelector("#nome");
    let textoNovo = document.createTextNode(`Bem vindo ${inputNome.value}`);

    divnova.appendChild(textoNovo);
    document.body.appendChild(divnova);

}
let botaoOk = document.querySelector("#botao")
botaoOk.onclick = mostrarNome;





















nao sei se o h1 no java  e bom pois ficario ruim