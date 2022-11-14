var arvore = document.querySelector('.arvore')
var megaman = document.querySelector('.megaman')


// Para saber a largura da tela
var largura = window.screen.width

// Iniciar animação
$('.arvore').css('animation','arvoreAnime 1.3s linear infinite')

// CLicar na tela ou em qualquer tecla faz a função jump
$(document).on('click keydown',()=>{
    $('.megaman').css('animation','megamanJump 0.7s ease-in-out ')

    setTimeout(()=>{
        $('.megaman').css('animation','none')
    },700)
})


var loop = setInterval(function verificar() {
    var arvorePosi = arvore.offsetLeft
    var megaposi = +window.getComputedStyle(megaman).bottom.replace('px','')

    if(arvorePosi <= 25 && megaposi <= 30 && arvorePosi > 0 && largura < 700) {
        // Remover animação
        $('.arvore').css('animation','none')
        $('.megaman').css('animation','none')

        // Apos perder, todos os elementos ficarão no mesmo lugar
        megaman.style.bottom=megaposi+'px'
        arvore.style.left=arvorePosi+'px'
        megaman.src='./img/explosao.gif'

        // Tempo para o gif rodar apenas uma vez
        setTimeout(()=>{
            megaman.style.display='none'
        },500)
        clearInterval(loop)

        //Para abrir a página de derrota
        setTimeout(()=>{
            $('.fundoDerrota').css('display','block')
            $('.container').css('display','none')
        },1000)
    } else if(arvorePosi <= 45 && megaposi <= 70 && arvorePosi > 0 && largura >= 700) {
        // Remover animação
        $('.arvore').css('animation','none')
        $('.megaman').css('animation','none')

        // Apos perder, todos os elementos ficarão no mesmo lugar
        megaman.style.bottom=megaposi+'px'
        arvore.style.left=arvorePosi+'px'
        megaman.src='./img/explosao.gif'

        // Tempo para o gif rodar apenas uma vez
        setTimeout(()=>{
            megaman.style.display='none'
        },500)
        clearInterval(loop)

        //Para abrir a página de derrota
        setTimeout(()=>{
            $('.fundoDerrota').css('display','block')
            $('.container').css('display','none')
        },1000)
    }

    
})
