// 1 capturar formulario

// fazer a operação do formulario sendo enviado'submit -form.addEventListener
// e.preventDefault() - todo formulario por padrão de ficar enviando a os dados para a propria página, por isso interrompemos ela
// e - é o parametro que vou passar nessa função.
// pegar os dados do formulario, capturando o input nome e quantidade
//criar um elemento a partir do js
// salvar informações no navegador localStorage
// os itens estao sendo sobrescritos no localstorage, precisamos salvar multiplos dados.
// no js quando temos um par de elementos, uma chave-valor, e queremos salvar o dicionario, usamos um objeto, por isso criamos const itemAtual, para transformar em objeto.
// ao inserir esse objeto(itemAtual) no localSotrage, ele retorna um objeto e precisamos que seja uma string, então transformamos em uma string atraves de JSON.stringfy(itemAtual)
// precismos de um array de objetos para parar de sobrescrever.


const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = e.target.elements["nome"];
  const quantidade = e.target.elements["quantidade"];
  criaElemento(nome.value, quantidade.value);
  nome.value = "";
  quantidade.value = "";
});

function criaElemento(nome, quantidade) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += nome;

  lista.appendChild(novoItem);

  const itemAtual = {
    nome: nome,
    quantidade: quantidade,
  };

  itens.push(itemAtual);
  localStorage.setItem("item", JSON.stringify(itens));
}
