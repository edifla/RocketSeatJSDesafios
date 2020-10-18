let box = document.getElementById("box")
    //   Criando o botão 
      let button = document.createElement("button")
    //   Colocando Onclick
      button.setAttribute('onclick','criarCaixa()')
    // Criando texto para o botao
      let buttonElement = document.createTextNode("Criar caixa")
    // Inserindo o texto no botao
      button.appendChild(buttonElement)
    // Colocando o botão dentro da div box
      box.appendChild(button)
    // Criando a caixa
    function criarCaixa(){
      let caixinha = document.createElement("div")
      caixinha.style.width = "100px";
      caixinha.style.height = "100px";
      caixinha.style.backgroundColor = "#F00";
    // Fazendo a função para quando o mouse passar por cima mudar a cor da caixa
      caixinha.onmouseover = function() {
        caixinha.style.backgroundColor = randomColor();
      }
    // Adicionando a caixa na div
      box.appendChild(caixinha)
    }
    // Função que randomiza as cores
    function randomColor(){
        let letras = "1234567890ABCDEF"
        let x = '#'
        for(let i = 0 ; i < 6; i++){//Irá adicionar uma nova letra a cada repetição
            
            x += letras[Math.floor(Math.random() * 16)]//* 16 para o dado varrer a quantidade de caracteres na variavel letras
            console.log(x)
        }
        return x
    }
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
