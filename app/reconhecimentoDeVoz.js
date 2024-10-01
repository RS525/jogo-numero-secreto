const elementoChute = document.get

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListner ('result', onSpeak)

function onSpeak(e) {
   chute = e.results[0][0].transcript
   exibirChuteNaTela(chute)
   verificaSeOChutePossuiUmValorValido(chute)
}

function exibirChuteNaTela(chute) {
   elementoChute.innerHTML = `
      <div>Voce disse:</div>
      <span class="box">${chute}</span>
      
   `
}

recognition.addEventListner('end', () => recognition.start())