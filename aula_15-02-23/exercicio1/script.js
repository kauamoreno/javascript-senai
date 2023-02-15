
var qtdAlunos = 20;

for(var x = 0; x < qtdAlunos; x++){

    if(x % 2 == 0){
        
        if(x == 0){
            console.log(`O aluno ${x} é zero`);
        }else{
            console.log(`O aluno ${x} é par`);
        }

    }

    if(x % 2 == 1){
        console.log(`O aluno ${x} é impar`);
    }
}