var a = 10;
var b = 20;
var c = null;

document.write(`A = ${a} <br>`);
document.write(`B = ${b} <br><br>`);

c = b;
b = a;
a = c;

document.write("Agora invertendo os valores <br>");
document.write(`A = ${a} <br>`);
document.write(`B = ${b}`);


