// 1 capturar formulario

// fazer a operação do formulario sendo enviado'submit -form.addEventListener
// e.preventDefault() - todo formulario por padrão de ficar enviando a os dados para a propria página, por isso interrompemos ela
// e - é o parametro que vou passar nessa função.
// pegar os dados do formulario, capturando o input nome e quantidade
//criar um elemento a partir do js

const form = document.getElementById("novoItem");
const lista = document.getElementById("lista")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  criaElemento(
    e.target.elements["nome"].value,
    e.target.elements["quantidade"].value
  );
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem)

}

