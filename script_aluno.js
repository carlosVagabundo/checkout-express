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
    //O nome do cupom oficial é "PROMO10". 
    // Use .toUpperCase() para garantir que funcione se o usuário digitar "promo10" ou "Promo10"
    
    // Faça um teste condicional (if): se o 'cupomDigitado' for igual ao cupom oficial o valor de desconto será = a 10
     
    // DICA: Use a estrutura -> if (variavel.toUpperCase() === "VALOR") { valor da vaiável desconto}
    
    let desconto = 0;
    


    // REGRA 2: Aplicação do Desconto no Valor do Produto

    // Crie uma nova variável chamada 'valorComDesconto'.
    // Ela deve guardar o resultado de uma conta matemática simples:
    // O 'valorOriginal' do produto MENOS (-) o 'desconto' que você descobriu na Regra 1.
    
    // ESCREVA SEU CÓDIGO AQUI:


  
    // REGRA 3: Cálculo da Taxa de Frete
   
    // Agora crie uma estrutura condicional completa (if / else):
    // -> SE o 'valorComDesconto' for MAIOR OU IGUAL (>=) a 100, o frete continua 0.
    // -> SENÃO (else), a variável 'frete' deve receber o valor de 15.
    //
    // DICA: Use a estrutura -> if ( ... ) { ... } else { ... }
    let frete = 0;
    
    // ESCREVA SEU IF / ELSE AQUI:


   
    // REGRA 4: Total Geral da Compra
    // -----------------------------------------------------------------
    // Crie a última variável chamada 'totalFinal'.
    // Ela deve guardar a soma (+) do 'valorComDesconto' com a taxa do 'frete'.
    
    // ESCREVA SEU CÓDIGO AQUI:


    // =================================================================
    //  SEU CÓDIGO TERMINA AQUI 
    // =================================================================

    // 2. Exibe o resultado final de volta na tela do usuário
    painel.className = "resultado sucesso";
    painel.innerHTML = `
        <strong>Resumo do Pedido:</strong><br>
        Desconto: R$ ${desconto.toFixed(2)}<br>
        Frete: R$ ${frete === 0 ? "Grátis" : "R$ " + frete.toFixed(2)}<br>
        <strong>Total a pagar: R$ ${totalFinal.toFixed(2)}</strong>
    `;
}
