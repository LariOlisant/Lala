
        // Selecionando elementos de diferentes formas
        let titulo = document.getElementById("titulo");
        console.log("Selecionado por ID:", titulo);

        let esportesPorClasse = document.getElementsByClassName("esporte");
        console.log("Selecionados por Classe:", esportesPorClasse);

        let esportesPorTag = document.getElementsByTagName("li");
        console.log("Selecionados por Tag:", esportesPorTag);

        let primeiroEsporte = document.querySelector(".esporte");
        console.log("Selecionado pelo querySelector:", primeiroEsporte);

        let todosEsportes = document.querySelectorAll(".esporte");
        console.log("Selecionados pelo querySelectorAll:", todosEsportes);

        // Modificando a cor do título
        titulo.style.color = "#fff";