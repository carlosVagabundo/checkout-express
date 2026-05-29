function calcularCompra() {
    // 1. Coleta os dados que o usuário digitou na tela
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    // Convertemos o valor para número e tratamos caso esteja vazio
    let valorOriginal = Number(valorElemento.value) || 0;
    let cupomDigitado = cupomElemento.value || "";

    // REGRA 1: Validação do Cupom de Desconto
    let desconto = 0;
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }

    // REGRA 2: Aplicação do Desconto no Valor do Produto
    let valorComDesconto = valorOriginal - desconto;
    
    // Pequena correção de segurança: o valor não pode ser negativo
    if (valorComDesconto < 0) valorComDesconto = 0;

    // REGRA 3: Cálculo da Taxa de Frete
    let frete = 0;
    if (valorComDesconto >= 100) {
        frete = 0; // Frete grátis
    } else {
        frete = 15; // Cobrança de frete
    }

    // REGRA 4: Total Geral da Compra
    let totalFinal = valorComDesconto + frete;

    // 2. Exibe o resultado final de volta na tela do usuário
    painel.className = "resultado sucesso";
    painel.innerHTML = `
        <strong>Resumo do Pedido:</strong><br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Frete: ${frete === 0 ? "Grátis" : "R$ " + frete.toFixed(2)}<br>
        <strong>Total a pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}