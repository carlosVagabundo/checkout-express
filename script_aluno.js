function calcularCompra() {
    // 1. Captura dos elementos do HTML
    const campoValor = document.getElementById("valorProduto");
    const campoCupom = document.getElementById("cupomTexto");
    const painel = document.getElementById("painelResultado");

    // 2. Tratamento de entrada (Prevenção de erros)
    let valorOriginal = parseFloat(campoValor.value);
    // .trim() remove espaços e .toUpperCase() evita erro se o usuário digitar "promo10" minúsculo
    let cupom = campoCupom.value.trim().toUpperCase();

    // Validação: Se o valor for inválido, nulo ou menor que zero
    if (isNaN(valorOriginal) || valorOriginal <= 0) {
        painel.className = "resultado";
        painel.innerHTML = "⚠️ Por favor, insira um valor válido para o produto.";
        return; // Interrompe a função aqui
    }

    // 3. Regra de Cupom
    let desconto = 0;
    if (cupom === "PROMO10") {
        desconto = 10;
    }

    // Aplica o desconto (Garante que o valor não fique negativo se o produto for barato)
    let valorComDesconto = Math.max(0, valorOriginal - desconto);

    // 4. Regra de Frete
    // Se o valor após o desconto for 100 ou mais, frete é 0. Caso contrário, 15.
    let frete = valorComDesconto >= 100 ? 0 : 15;

    // 5. Cálculo do Total
    let totalFinal = valorComDesconto + frete;

    // 6. Atualização da Interface (Feedback para o usuário)
    painel.className = "resultado sucesso"; // Aplica a classe de sucesso do CSS
    
    // Construção da mensagem final
    painel.innerHTML = `
        <div style="line-height: 1.6;">
            <strong>✅ Pedido Processado</strong><br>
            <small>Subtotal: R$ ${valorOriginal.toFixed(2)}</small><br>
            Desconto: <span style="color: #166534;">- R$ ${desconto.toFixed(2)}</span><br>
            Frete: ${frete === 0 ? "<strong>Grátis</strong>" : "R$ " + frete.toFixed(2)}<br>
            <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 8px 0;">
            <strong>Total a Pagar: R$ ${totalFinal.toFixed(2)}</strong>
        </div>
    `;
}