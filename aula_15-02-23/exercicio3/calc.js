var objetivoInvestimento = parseFloat(prompt("Informe o valor do objetivo de investimento: "));
var valorInicial = parseFloat(prompt("Informe o valor inicial do investimento: "));
var valDepositoMes = parseFloat(prompt("Informe o valor do depósito mensal: "));
var taxaJuros = parseFloat(prompt("Informe a taxa de juros mensal (%): ") /100);
const meses = 12;

for (x = 1; x <= meses; x++) {

    valorInicial = valorInicial + valorInicial * taxaJuros + valDepositoMes
    var conteudo = `${x} . ${valorInicial.toFixed(2)} <br>`;

    document.getElementById("dados").innerHTML += conteudo;
}

setTimeout(function () {
    // Código que precisa ser executado após a atualização do innerHTML

    while (valorInicial < objetivoInvestimento) {
        var resp = prompt("Simular mais um ano? (s/n)");

        if (resp == "s") {
            for (x = 1; x <= meses; x++) {

                valorInicial = valorInicial + valorInicial * taxaJuros + valDepositoMes
                var conteudo = `${x} - ${valorInicial.toFixed(2)} <br>`;


                document.getElementById("dados").innerHTML += conteudo;
            }
        }

    }
}, 1000);