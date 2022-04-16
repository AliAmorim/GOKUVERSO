const elementoNome = document.querySelector('#nome')
const elementoSituacao = document.querySelector('#situacao')
const elementoImg = document.querySelector('#img')
let elementoBtn = document.querySelector('#troca')
elementoBtn.addEventListener('click', () => {
  if (elementoBtn.value == 'gkcrianca') {
    elementoImg.src = './assets/img/goku-adulto.png'
    elementoNome.innerText = 'GOKU ADULTO'
    elementoSituacao.innerText = 'Freeza, por que você matou o Kuririn?'
    elementoBtn.value = 'gkadulto'
  } else if (elementoBtn.value == 'gkadulto') {
    elementoImg.src = './assets/img/goku-super.png'
    elementoNome.innerText = 'GOKU SUPER SAIYAJIN'
    elementoSituacao.innerText = 'FREEZAAAAAAAAAAAAAAAAAAAAAA'
    elementoBtn.value = 'gksuper'
  } else {
    elementoImg.src = './assets/img/goku-pequeno.png'
    elementoNome.innerText = 'GOKU CRIANÇA'
    elementoSituacao.innerText = 'Oi, eu sou o Goku!'
    elementoBtn.value = 'gkcrianca'
  }
})
 
