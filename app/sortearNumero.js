const menorValor = 1
const maiorValor = 100
const NumeroSecreto = gerarNumeroAleatorio()
const elementoMenorValor = document.getElementById('menor-valor')
const elementoMaiorValor = document.getElementById('maior-valor')

function gerarNumeroAleatorio() {
   return parseInt(Math.Random() * maiorValor + 1)
}

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor