var nomes = ["Diego", "Gabriel", "Lucas"];
//pegando elemento UL
var elemento = document.querySelector("ul");

//Pega o input do txt
var inputTxt = document.getElementById("nome");



//percorrendo nome da lista de nomes
for (z of nomes) {
    //Inseri os itens que ja estão no array na lista
    adicionaItem(z);
}
function adicionar() {
    //Pegando o conteudo do input e jogando na função adicionar item
  adicionaItem(inputTxt.value);
  inputTxt.value = "";
  console.log(inputTxt)
}
//Adicionando item ao elemento li filho do elemento ul
function adicionaItem(z) {
  //Criando o elemento li e armazenando na var 
  var linha = document.createElement("li");

  //criando o texto para inserir no li
  var slotTexto = document.createTextNode(z);

  //inserindo o texto na linha
  linha.appendChild(slotTexto);

  //inserindo a linha dentro do ul
  elemento.appendChild(linha);
}
