var key = document.querySelector("#numKey");
var selector = document.querySelector("#selector");
var decod = document.querySelector("#decodificar");
var cod = document.querySelector("#codificar");
var submit = document.getElementById("submit");
var codificar = document.getElementById("codificar")
var decodificar = document.getElementById("decodificar")

selector.addEventListener('change', () => {
  if (selector.value === "cifracesar") {
    key.classList.remove("hide");
  } else {
    key.classList.add("hide");
  }
})

cod.addEventListener("click", function(){
  submit.value = "Codificar Mensagem"
  })
  

decod.addEventListener("click", function(){
  submit.value = "Decodificar Mensagem"
  }
)

function escolha() {
  var tipoCodigo = document.getElementById("selector").value;
  var mensagem = document.querySelector("#mensagem").value;
  var opcao = document.getElementsByName("codDecod");
  for (var i = 0; i < opcao.length; i++) {
    if (opcao[i].checked == true) {
      opcao = opcao[i].id;
    }
  }
  event.preventDefault();

  if (tipoCodigo == "base64") {
    base(mensagem, opcao);
  } else {
    cifraCod(mensagem, opcao);
  }
}

function base(recebe, opcao) {
  if (opcao == "codificar") {
    recebe = btoa(recebe);
  } else {
    recebe = atob(recebe);
  }
  document.getElementById("texto").innerHTML = recebe;
}

function cifraCod(recebe, opcao) {
  var letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var deslocamento = document.getElementById("numKey").value;
  deslocamento = parseInt(deslocamento);
  var mensagemFinal = [];

  for (var i = 0; i < recebe.length; i++) {
    if (recebe[i] != " ") {
      for (var j = 0; j < letras.length; j++) {
        if (recebe[i] == letras[j]) {
          if (opcao == "decodificar") {
            var aux = j - deslocamento;
            if (aux < 0) {
              aux = j - deslocamento + 26;
            }
            mensagemFinal[i] = letras[aux];
            break;
          } else {
            var aux = j + deslocamento;
            if (aux > 25) {
              console.log(aux);
              aux = j + deslocamento - 26;
              console.log(aux);
            }
            mensagemFinal[i] = letras[aux];
            
            break;
          }
        }
      }
    } else {
      mensagemFinal[i] = " ";
    }
  }
  mensagemFinal = mensagemFinal.join("");
  document.getElementById("texto").innerHTML = mensagemFinal;
}
