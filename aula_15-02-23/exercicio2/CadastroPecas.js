
function cadastrar() {
    
    var nome = document.getElementById('nome').value;
    var massa = document.getElementById('massa').value;
    var quantidade = document.getElementById('quantidade').value;

    if(massa < 100){
        alert("Erro, massa menor de 100 gramas");
    }else if(quantidade > 10){
        alert("Erro, quantidade maior que 10 é acima do estoque");
    }else if(nome.length < 3){
        alert("Erro, nome menor de 3 caracteres");
    }else{
        alert("Itens cadastrasdos");
    }
}