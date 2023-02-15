
function imprime(){
    var valInicial = parseFloat(document.getElementById("val-inicial").value);
    var valDepositoMes = parseFloat(document.getElementById("val-deposito-mes").value);
    var taxaJurosMes = parseFloat(document.getElementById("taxa-juros-mes").value);
    taxaJurosMes = taxaJurosMes / 100;

    const meses = 12;

    for (x = 1; x <= meses; x++) {

        valInicial += (valDepositoMes * taxaJurosMes) + valDepositoMes
        var conteudo = `${x} - ${valInicial} <br>`;

        document.getElementById("dados").innerHTML += conteudo;
    }
}

function Calcular() {

    imprime();

    var reinicio;
    reinicio = prompt("Quer ver o próximo ano? (s/n)");
    if (reinicio == "s") {
       imprime() 
    }
}
