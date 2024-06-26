let btnOdernarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOdernarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOdenados)
}
