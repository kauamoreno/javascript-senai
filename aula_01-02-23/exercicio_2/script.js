var numero1 = prompt("Digite um número");
var numero2 = prompt("Digite um outro número");

if(numero1 > numero2){
    alert(`O maior é o número ${numero1}`);
}else if(numero1 < numero2){
    alert(`O maior é o número ${numero2}`);
}else if(numero1 == numero2){
    alert(`Os dois números são iguais`);
}
