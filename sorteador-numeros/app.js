// Função para sortear números e exibir na tela
function sortear() {
    // Obtém os valores de quantidade, de e até dos elementos HTML
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Define um array vazio para armazenar os números sorteados
    let sorteados = [];

    // Variável temporária para armazenar o número sorteado
    let numero;

    // Loop para gerar a quantidade especificada de números aleatórios
    for (let i = 0; i < quantidade; i++) {
        // Chama a função obterNumeroAleatorio com os valores mínimo e máximo
        numero = obterNumeroAleatorio(de, ate);
        
        // Verifica se o número já foi sorteado
        while (sorteados.includes(numero)) {
            // Se o número já foi sorteado, gera outro número
            numero = obterNumeroAleatorio(de, ate);
        }

        // Adiciona o número sorteado ao array sorteados
        sorteados.push(numero);
    }

    // Adiciona os números na tela do programa puxando a tag HTML
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alteraStatusBotao(); // Chama a função para trocar o estilo do botão
}

// Função para obter um número aleatório dentro de um intervalo especificado
function obterNumeroAleatorio(min, max) {
    // Utiliza a função Math.random() para gerar um número entre 0 e 1
    // Multiplica pela diferença entre max e min e adiciona min para ajustar o intervalo
    // Utiliza Math.floor para arredondar para o inteiro mais próximo
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para alterar o status do botão entre ativo e desativado
function alteraStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        // Se o botão estiver desativado, ativa
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        // Se o botão estiver ativo, desativa
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

// Função para reiniciar a página
function reiniciar() {
    // Recarrega a página
    location.reload();
}
