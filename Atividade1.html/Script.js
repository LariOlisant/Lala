
// Selecionando elementos de diferentes formas
let titulo = document.getElementById("titulo");
console.log("Selecionado por ID:", titulo.textContent);

let esportesPorClasse = document.getElementsByClassName("esporte");
console.log("Selecionados por Classe:", esportesPorClasse[0].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[1].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[2].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[3].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[4].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[5].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[6].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[7].textContent);
console.log("Selecionados por Classe:", esportesPorClasse[8].textContent);



let esportesPorTag = document.getElementsByTagName("li");
console.log("Selecionados por Tag:", esportesPorTag[0]);

let primeiroEsporte = document.querySelector(".esporte");
console.log("Selecionado pelo querySelector:", primeiroEsporte);

let todosEsportes = document.querySelectorAll(".esporte");
console.log("Selecionados pelo querySelectorAll:", todosEsportes);

// Modificando a cor do título
titulo.style.color = "#fff";
let lista = document.getElementById("lista-esporte");

let novoEsporte = document.createElement("li");
novoEsporte.innerText = "Beach Tennis";

//Adicionando o novo parágrafo ao body com appendChild
lista.appendChild(novoEsporte);


let novoEsporte2 = document.createElement("li");
novoEsporte2.innerText = "Elefante Polo🐘";

//Adicionando o novo parágrafo ao body com appendChild
lista.appendChild(novoEsporte2);

let novoEsporte3 = document.createElement("li");
novoEsporte3.innerText = "Luta de sabre de luz✨";

//Adicionando o novo parágrafo ao body com appendChild
lista.appendChild(novoEsporte3);