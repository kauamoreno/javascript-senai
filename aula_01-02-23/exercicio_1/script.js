
//PARA O CASO DE O USUARIO APERTAR "ENTER" DENTRO DO INPUT
const input = document.getElementById("data");
input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    //13 -> CODIGO PARA A TECLA DE "ENTER"
    verifica();
  }
});

function verifica(){

    //Variaveis
    var ano = document.getElementById("data").value;
    var anoAtual = 2023;
    var verificador = anoAtual - ano;

    if(!(verificador > 120  || verificador <0)){
        if(verificador > 17){
            alert(`Sistema Liberado, você possui ${verificador} anos`);
            window.location.href = "../conteudo_aula/index.html";
        }else{
            alert(`Acesso negado, você tem apenas ${verificador} anos de idade`);
        }
    }else{
        alert(`Acesso negado, idade ${verificador} é inexistente`);
    }

}