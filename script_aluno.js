function calcularCompra() {
    // 1. Coleta os elementos do HTML
    const valorElemento = document.getElementById("valorProduto");
    const cupomElemento = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    // 2. Validação básica: se não houver valor, para a execução aqui
    if (!valorElemento || valorElemento.value === "") {
        painel.innerHTML = "Por favor, insira o valor do produto.";
        painel.className = "resultado erro"; // Opcional: mude a cor para vermelho no CSS
        return;
    }

    let valorOriginal = Number(valorElemento.value);
    let cupomDigitado = cupomElemento.value.trim(); // .trim() remove espaços extras

    // --- REGRA 1: Cupom ---
    let desconto = 0;
    if (cupomDigitado.toUpperCase() === "PROMO10") {
        desconto = 10;
    }

    // --- REGRA 2: Valor com Desconto ---
    let valorComDesconto = valorOriginal - desconto;
    if (valorComDesconto < 0) valorComDesconto = 0; // Garante que não fique negativo

    // --- REGRA 3: Frete ---
    let frete = 0;
    if (valorComDesconto < 100) {
        frete = 15;
    } else {
        frete = 0;
    }

    // --- REGRA 4: Total Final ---
    let totalFinal = valorComDesconto + frete;

    // 3. Exibe o resultado final
    painel.className = "resultado sucesso";
    painel.innerHTML = `
        <strong>Resumo do Pedido:</strong><br>
        Valor original: R$ ${valorOriginal.toFixed(2)}<br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Frete: ${frete === 0 ? "Grátis" : "R$ " + frete.toFixed(2)}<br>
        <hr>
        <strong>Total a pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}