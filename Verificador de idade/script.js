function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value < Number(ano - 130) ||fano.value.length == 0 || Number(fano.value>ano)) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
} else { 
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto')

   if (fsex[0].checked) {
       genero = 'homem'
    if  (idade>=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebemenino.png')
    } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'jovemhomem.png')
    
    } else if ( idade < 50){
        //adulto
        img.setAttribute('src', 'adulto.png')
    }  else {
        //idoso
        img.setAttribute('src','idoso.png')
    }
    }  else if (fsex[1].checked) {
       genero = 'mulher'
    if  (idade>=0 && idade < 10) {
        //criança
        img.setAttribute('src', 'bebemenina.png')
    } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'jovemmulher.png')
    
    } else if ( idade < 50){
        //adulto
        img.setAttribute('src', 'adulta.png')
    } else {
        //idoso
        img.setAttribute('src', 'idosa.png')
    }
}  
   txtano.style.textAlign = 'center'  
   res.style.textAlign = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
   res.appendChild(img)
}
}