let produtosInformacoes = [["./img/celular1.jpg", "Iphone 13 - Apple", "R$ 1800.00"], 
["./img/celular2.jpg", "Descriçãocelular Mi 11 LITE 128gb 6Ggb RAM PEACH PINK", "R$ 2390.90"],
["./img/tlou.jpg", "The Last Of Us Remasterizado Hits - PlayStation 4", "R$ 95.90"],
["./img/gow3.jpg", "God Of War III Remasterizado Hits - PlayStation 4", "R$ 69.90"],
["./img/celular3.jpg", "Celular Apple iPhone 13 Pro Max 128GB", "R$ 8590.90"]];

document.addEventListener('DOMContentLoaded', () => {

    for (let x = 0; x < produtosInformacoes.length; x++) {

        let produto = document.createElement('div');
        produto.className = 'produto';

        produto.innerHTML = `
        <div class="produto">
            <div>
                <img width="100px" src="${produtosInformacoes[x][0]}" alt="Produto">
                <p class="descricao">${produtosInformacoes[x][1]}</p>
            </div>
            <div>
                <p class="preco">${produtosInformacoes[x][2]}</p>
                <button>Comprar</button>
            </div>
        </div>`
        
        document.querySelector('#produtos').appendChild(produto);
    }
})