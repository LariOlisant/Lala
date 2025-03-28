//Busacndo elementos por ID
let titulo = document.getElementById("titulo");
console.log(titulo);

//Buscando elementos por clase
let descricao = document.getElementsByClassName("descricao");
console.log(descricao[0]);

//Selecionando pelo nome da TAG
let paragrafo = document.getElementsByTagName("p");
console.log(paragrafo[0])

// Selecionando pelo Query Selector
// # significa Id -> o nome do ID é titulo
// "." significa classe -> o nome da classe é descrição
let tituloQS = document.querySelector("#titulo");
let paragrafoQS = document.querySelector(".descricao");
console.log("Exibindo com Query Selector" + tituloQS);
console.log("Exibindo com QS o paragrago" + paragrafoQS[0].textContent);