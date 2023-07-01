/*
    INSTALAÇÃO
    * npm i -g typescript
    * tsc -v >Verificar se ocorreu certo a instalação 
    * tsc --init >Criar arquivo de config
    * 
    * modificar os tsconfig nos campos "rootDir" /entrada/ e "outDir" /saida/
    * 
    * tsc >Comando para compilar
    * tsc -w >Compilação automatica
*/

let x: number = 10;
x = 12;

//****Inferencia x Anotacion****//

//Inferencia
let y = 1; 
//y = '4'; //ERROR

//Anotacion
let z: number = 1;
//z = '4' //ERROR

//******************************//


//*************Tipos basicos***********************//
let nome: string = 'Kauã';
let ano: number = 18;
let deMaior: boolean = true;

//tuplas
let myTupla: [number, string, boolean];
myTupla = [3, 'tupla', false];

//objetos
const user: { name: string, age: number } = {
    name: 'Kauã',
    age: 18
}

//any
let a: any;
a = 1;
a = 'txt';

//unir tipos
let id: string | number;
id = 1;
id = '1';

//type alias
type criandoTipagem = string | number;
let idNovo: criandoTipagem;
idNovo = 2;
idNovo = '2'

//enum
// tamanho de roupas {size: medio, size: pequeno}
enum Size {
    P = 'Pequeno',
    M = 'Médio',
    G = 'Grande'
}
const camisa: {} = {
    name: 'Camisa gola V',
    size: Size.G
}

//literal types
let teste: 'algumValor';
// teste = 'Kauã'//ERROR
teste = 'algumValor';

let teste2: 'algumValor' | string;
teste2 = 'algumValor';
teste2 = 'Kauã';

//funcoes
function soma(a: number, b:number){
    return a + b;
}
function dizerOlaPara(nome: string): string {
    return `Olá ${nome}`;
}
function mensagem(msg: string): void {
    console.log(msg);
} 
function greeting(name: string, greet?: string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}

//Interfaces
interface FuncoesMatematicas {
    n1: number,
    n2: number
}

function somarNum(nums: FuncoesMatematicas): number{
    return nums.n1 + nums.n2;
}
console.log(somarNum({ n1: 2, n2: 3 }));

function multNum(nums: FuncoesMatematicas): number{
    return nums.n1 * nums.n2;
}
console.log(multNum({ n1: 3, n2: 5 }));


const numerosSoma: FuncoesMatematicas = {
    n1: 3,
    n2: 20
}
console.log(somarNum(numerosSoma));

//narrowing
// checagem de tipos
function doSomething(info: number | boolean){
    if(typeof info === 'number'){
        console.log(`O número é ${info}`);
        return;
    }
    console.log('Não foi passado um número');
}

//generics
function mostrarArray<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`Item: ${item}`);
    });
}

//Classes
class Usuario{
    nome
    ano
    foiAprovado

    constructor(nome: string, ano: number, foiAprovado: boolean){
        this.nome = nome,
        this.ano = ano,
        this.foiAprovado = foiAprovado
    }

    private deMaior(): boolean{
        if(this.ano < 18){
            return false;
        }
        return true;
    }

    public status(): void{
        console.log(`Nome: ${this.nome}, Idade: ${this.ano}, Maior de idade: ${this.deMaior() ? 'Sim': 'Não'}`);
    }
}

const kaua = new Usuario('Kauã', 18, true);
kaua.status();

//Interfaces em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

//herança
class SuperCar extends Car{
    engine

    constructor(brand: string, wheels: number, engine: string){
        super(brand,wheels);
        this.engine = engine;
    }
}
