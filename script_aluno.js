function calcularCompra() {
    // 1. Coleta os dados que o usuário digitou na tela
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    let valorOriginal = Number(valorElemento.value);
    let cupomDigitado = cupomElemento.value;

    // =================================================================
    // REGRA 1: Validação do Cupom de Desconto
    // =================================================================
    let desconto = 0;
    
    // Se o cupom (em maiúsculas) for igual a PROMO10, o desconto é de 10 reais
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }

    // =================================================================
    // REGRA 2: Aplicação do Desconto no Valor do Produto
    // =================================================================
    let valorComDesconto = valorOriginal - desconto;
  
    // =================================================================
    // REGRA 3: Cálculo da Taxa de Frete
    // =================================================================
    let frete = 0;
    
    // Se o valor for menor que 100, cobramos 15 de frete. Caso contrário, é grátis.
    if (valorComDesconto >= 100) {
        frete = 0;
    } else {
        frete = 15;