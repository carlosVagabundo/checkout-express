function calcularCompra() {
    // 1. Coleta os dados que o usuário digitou na tela
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    let valorOriginal = Number(valorElemento.value);
    let cupomDigitado = cupomElemento.value;

    // =================================================================
    // Complete os códigos a seguir com o que é pedido
    // =================================================================

    
    // REGRA 1: Validação do Cupom de Desconto
    let desconto = 0;
    
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }


    // REGRA 2: Aplicação do Desconto no Valor do Produto
    // O 'valorOriginal' do produto MENOS (-) o 'desconto'
    let valorComDesconto = valorOriginal - desconto;
  

  
    // REGRA 3: Cálculo da Taxa de Frete
    let frete = 0;
    
    if (valorComDesconto >= 100) {
        frete = 0;
    } else {
        frete = 15;
    }


   
    // REGRA 4: Total Geral da Compra
    // Soma (+) do 'valorComDesconto' com a taxa do 'frete'
    let totalFinal = valorComDesconto + frete;


    // =================================================================
    //  SEU CÓDIGO TERMINA AQUI 
    // =================================================================

    // 2. Exibe o resultado final de volta na tela do usuário
    painel.className = "resultado sucesso";
    painel.innerHTML = `
        <strong>Resumo do Pedido:</strong><br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Frete: ${frete === 0 ? "Grátis" : "R$ " + frete.toFixed(2)}<br>
        <strong>Total a pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}