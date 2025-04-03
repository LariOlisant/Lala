//Buscando elementos por ID
// let titulo = document.getElementById("titulo");
// console.log(titulo);

// //Buscando elementos por clase
// let descricao = document.getElementsByClassName("descricao");
// console.log(descricao[0]);

// //Selecionando pelo nome da TAG
// let paragrafo = document.getElementsByTagName("p");
// console.log(paragrafo[0])

// // Selecionando pelo Query Selector
// // # significa Id -> o nome do ID é titulo
// // "." significa classe -> o nome da classe é descrição
// let tituloQS = document.querySelector("#titulo");
// let paragrafoQS = document.querySelector(".descricao");
// console.log("Exibindo com Query Selector" + tituloQS);
// console.log("Exibindo com QS o paragrago" + paragrafoQS[0].textContent);

//Alterando o style de um elemento
titulo.innerText = "Novo Título"
titulo.innerHTML = "<span style='color:red'> Título em vermelho </span>"

//Alterando o style de um elemento com JS
titulo.style.backgroundColor = "black"; //Fundo preto
titulo.style.fontSize = "50px"; //Aumenta o tamanho da fonte

//Adicionando um novo elemento
let novoParagrafo = document.createElement("p");
novoParagrafo.innerText = "Este é um novo parágrafo!";

//Adicionando o novo parágrafo ao body com appendChild
document.body.appendChild(novoParagrafo);

//Removendo elementos do DOM com JS removeChild
let elementoParaRemover = document.querySelector(".descricao");
document.body.removeChild(elementoParaRemover);


