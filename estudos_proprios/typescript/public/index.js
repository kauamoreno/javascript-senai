"use strict";
let x = 10;
x = 12;
let y = 1;
let z = 1;
let nome = 'Kauã';
let ano = 18;
let deMaior = true;
let myTupla;
myTupla = [3, 'tupla', false];
const user = {
    name: 'Kauã',
    age: 18
};
let a;
a = 1;
a = 'txt';
let id;
id = 1;
id = '1';
let idNovo;
idNovo = 2;
idNovo = '2';
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: 'Camisa gola V',
    size: Size.G
};
let teste;
teste = 'algumValor';
let teste2;
teste2 = 'algumValor';
teste2 = 'Kauã';
function soma(a, b) {
    return a + b;
}
function dizerOlaPara(nome) {
    return `Olá ${nome}`;
}
function mensagem(msg) {
    console.log(msg);
}
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
function somarNum(nums) {
    return nums.n1 + nums.n2;
}
console.log(somarNum({ n1: 2, n2: 3 }));
function multNum(nums) {
    return nums.n1 * nums.n2;
}
console.log(multNum({ n1: 3, n2: 5 }));
const numerosSoma = {
    n1: 3,
    n2: 20
};
console.log(somarNum(numerosSoma));
function doSomething(info) {
    if (typeof info === 'number') {
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}
function mostrarArray(arr) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}
class Usuario {
    constructor(nome, ano, foiAprovado) {
        this.nome = nome,
            this.ano = ano,
            this.foiAprovado = foiAprovado;
    }
    deMaior() {
        if (this.ano < 18) {
            return false;
        }
        return true;
    }
    status() {
        console.log(`Nome: ${this.nome}, Idade: ${this.ano}, Maior de idade: ${this.deMaior() ? 'Sim' : 'Não'}`);
    }
}
const kaua = new Usuario('Kauã', 18, true);
kaua.status();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
