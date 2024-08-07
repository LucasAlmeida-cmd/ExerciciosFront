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