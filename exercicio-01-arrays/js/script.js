let lista = document.getElementById("lista");
nomes = [];

function renderizaLista(){
    lista.innerHTML = "";
    nomes.forEach((nome) => {
        let itemDeLista = document.createElement("li");
        itemDeLista.textContent = nome;
        lista.appendChild(itemDeLista);// Adicionando o item ao elemento ul
    });
}

document.getElementById("bntAdicionar").addEventListener("click", () => {
    let nomeDigitado = document.getElementById("idNome").value;
    nomes.push(nomeDigitado);
    renderizaLista();
});

document.getElementById("bntOrdenar").addEventListener("click", () => {
    nomes.sort();
    renderizaLista();
});

document.getElementById("bntReverter").addEventListener("click", () => {
    nomes.reverse();
    renderizaLista();
});