
/***********************************************/
function f_noite() {
    document.body.style.background = 'black'
    document.body.style.color = 'white'
}
function f_dia() {
    document.body.style.background = 'white'
    document.body.style.color = 'black'
}
function f_pequeno() {
    document.body.style.fontSize = '10px'
}
function f_medio() {
    document.body.style.fontSize = '16px'
}
function f_grande() {
    document.body.style.fontSize = '26px'
}
/***********************************************/


/***********************************************/
var bt_bebe = document.getElementById('bebe');
bt_bebe.addEventListener('click', f_bebe);

var img = document.createElement('IMG')

function f_bebe() {
    document.querySelector('#idade').innerHTML = "Você é um bebe";
    maiorIdade = false;

    img.src = "imagens/bebe.jpg";
    document.getElementById("idade").appendChild(img)
}

function f_crianca() {
    document.querySelector('#idade').innerHTML = "Você é uma criança"
    maiorIdade = false

    img.src  = "imagens/crianca.PNG"
    document.getElementById("idade").appendChild(img)
}

function f_adolescente() {
    document.querySelector('#idade').innerHTML = "Você é um adolescente"
    maiorIdade = false

    img.src  = "imagens/adole.PNG"
    document.getElementById("idade").appendChild(img)
}


function f_jovem() {
    document.querySelector('#idade').innerHTML = "Você é um jovem"
    maiorIdade = true

    img.src  = "imagens/jovens.PNG"
    document.getElementById("idade").appendChild(img)
}

function f_adulto() {
    document.querySelector('#idade').innerHTML = "Você é um adulto"
    maiorIdade = true

    img.src  = "imagens/adulto.PNG"
    document.getElementById("idade").appendChild(img)
}

function f_maduro() {
    document.querySelector('#idade').innerHTML = "Você é maduro"
    maiorIdade = true

    img.src  = "imagens/maduros.PNG"
    document.getElementById("idade").appendChild(img)
}

function f_vivido() {
    document.querySelector('#idade').innerHTML = "Você é vivido"
    maiorIdade = true

    img.src  = "imagens/vivido.PNG"
    document.getElementById("idade").appendChild(img)
}
/***********************************************/


/***********************************************/
document.getElementById('btnResposta2').onclick = function () {
    var radios = document.getElementsByName('sexo')

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            console.log('Escolheu: ' + radios[i].value)

            valorSexo = radios[i].value
            document.querySelector("#div_sexo").innerHTML = valorSexo
        }
    }
}
/***********************************************/


/***********************************************/
function f_presente() {
    if (maiorIdade === false) {
        if (valorSexo === 'Masculino') {
            document.querySelector("#presente").innerHTML = "Você ganhou uma bola"
        }
        if (valorSexo === 'Feminino') {
            document.querySelector("#presente").innerHTML = "Você ganhou uma boneca"
        }
        else {
            document.querySelector("#presente").innerHTML = "Você ganhou um quebra-cabeça"
            console.log(valorSexo);
        }
    }
    if (maiorIdade === true) {
        if (valorSexo === 'Masculino') {
            document.querySelector("#presente").innerHTML = "Você ganhou uma camisa polo"
        }
        if (valorSexo === 'Feminino') {
            document.querySelector("#presente").innerHTML = "Você ganhou uma sandalia"
        }
        else {
            document.querySelector("#presente").innerHTML = "Você ganhou uma camisa polo e uma sandalia"
        }
    }
}


