
function cadastrar() {
    
    var nome = document.getElementById('nome').value;
    var massa = document.getElementById('massa').value;
    var quantidade = document.getElementById('quantidade').value;

    if(massa < 100 || quantidade > 10 || nome.length < 3){
        alert("Erro ao cadastrar");
    }else{
        alert("Itens Cadastrados")
    }
}