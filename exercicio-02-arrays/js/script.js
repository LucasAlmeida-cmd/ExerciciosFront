let lista = document.getElementById("lista");
let nomes = [];

function renderizaLista(){
    lista.innerHTML = "";
    nomes.forEach((nome) => {
        let itemDeLista = document.createElement("li");
        itemDeLista.textContent = nome;
        lista.appendChild(itemDeLista);
    });
}

function nomesMaiusculos(nomes){
    return nomes.map(nome => nome.toUpperCase());
}

function deletaNome(){
    let valorDigitadoNoCampo = document.getElementById('idNome').value;
    let valor = valorDigitadoNoCampo.toUpperCase();
    let listaMaiuscula = nomesMaiusculos(nomes);
    
    if(listaMaiuscula.includes(valor)){
        let indice = listaMaiuscula.indexOf(valor); // Encontra o índice na lista maiúscula
        if(indice != -1){
            nomes.splice(indice, 1); // Remove o nome do array original
        }
        renderizaLista();
    }
}



document.getElementById("bntAdicionar").addEventListener("click", () => {
    let nomeDigitado = document.getElementById("idNome").value;
   
    if(nomeDigitado !== undefined && nomeDigitado !== ""){
        nomes.push(nomeDigitado);
        renderizaLista();
    }
});

document.getElementById("bntOrdenar").addEventListener("click", () => {
    nomes.sort();
    renderizaLista();
});

document.getElementById("bntReverter").addEventListener("click", () => {
    nomes.reverse();
    renderizaLista();
});


document.getElementById('btnDelete').addEventListener('click',deletaNome);