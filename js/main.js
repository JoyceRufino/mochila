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
// itens ja estão sendo salvos no localStorage, porém ao recarregar a página os dados ainda não ficam na tela, apenas no localStorage. preciso trazer os dados para poder manipula-los, para isso preciso fazer uma consulta no localStorage const itens = localStorage.getItem("itens") || [];
//refatorando código, por erros de lógica. A função criaElemento agora é unica e exclusiva para criar elemento, o submit agora gerencia todas as função que precisam ser enviadas neste momento do envio do item, e página é carregada buscando dados do localStorage

const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || [];

console.log(itens);

itens.forEach((elemento) => {
  criaElemento(elemento);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = e.target.elements["nome"];
  const quantidade = e.target.elements["quantidade"];

  const itemAtual = {
    nome: nome.value,
    quantidade: quantidade.value,
  };

  criaElemento(itemAtual);

  itens.push(itemAtual);
  localStorage.setItem("itens", JSON.stringify(itens));

  nome.value = "";
  quantidade.value = "";
});

function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}
