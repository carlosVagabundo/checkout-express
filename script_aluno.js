function calcularCompra() {
    // 1. Coleta os dados que o usuário digitou na tela
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    let valorOriginal = Number(valorElemento.value);
    let cupomDigitado = cupomElemento.value;

    // REGRA 1: Validação do Cupom de Desconto
    let desconto = 0;
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }

    // REGRA 2: Aplicação do Desconto
    let valorComDesconto = valorOriginal - desconto;
  
    // REGRA 3: Cálculo da Taxa de Frete
    let frete = 0;
    if (valorComDesconto >= 100) {
        frete = 0;
    } else {
        frete = 15;
    } // Aqui faltava fechar a chave!

    // =================================================================
    // REGRA 4: Cálculo Final e Exibição
    // =================================================================
    let valorTotal = valorComDesconto + frete;

    // Atualiza o painel na tela com o resultado
    painel.innerHTML = `
        <p>Subtotal: R$ ${valorComDesconto.toFixed(2)}</p>
        <p>Frete: R$ ${frete.toFixed(2)}</p>
        <hr>
        <strong>Total a pagar: R$ ${valorTotal.toFixed(2)}</strong>
    `;
}