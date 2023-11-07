let setaDireita = window.document.getElementById("setaDireita")
let setaEsquerda = window.document.getElementById("setaEsquerda")
let leonardo = window.document.getElementById("leonardo")
let samantha = window.document.getElementById("samantha")
let bruna = window.document.getElementById("bruna")

function RolarParaDireita(){
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style = "display:flex; margin-top:55px"
}


function RolarParaEsquerda(){
    leonardo.style = "display:flex"
    bruna.style = "display:nome"
    setaDireita.style ="display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}
