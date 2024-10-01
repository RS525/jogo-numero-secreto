function verificaSeOChutePossuiUmValorValido(chute) {
   const numero = +chute
   if (chuteForInvalido(numero)) {
      elementoChute.innerHTML += '<div>Valor Invalido!</div>'
      return
   }

   if (numeroForMaiorOuMenorDoqueOPermitido){
     elementoChute.innerHTML += `<div>Valor Invalido: O Numero Secreto prescisa estar entre ${menorValor} e ${maiorValor}</div>`
     return
   }
}

if (numero === NumeroSecreto) {
   document.body.innerHTML = `
   <h2>Você Acertou!!!</h2>
   <h3>O Numero Secreto Era ${NumeroSecreto}</h3>
   <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
   `
} else if (numero > NumeroSecreto) {
   elementoChute.innerHTML += `<div>O numero secreto é Menor <i class="fa-solid fa-arrow-down-long"></i></div> -->`
} else {
   elementoChute.innerHTML += `<div>O numero secreto é Maior <i class="fa-solid fa-arrow-up-long"></i></div> -->`
}

function chuteForInvalido(numero){
   return Number.isNaN(numero)
}

function numeroForMaiorOuMenorDoqueOPermitido(numero){
   return numero> maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
   if (e.target.id == 'jogar-novamente') {
      window.location.reload()
   }
})