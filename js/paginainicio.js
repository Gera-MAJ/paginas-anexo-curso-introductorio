const scrollear = window.scrollY

if (scrollear > 0){
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}


window.onload = function(){
    
    let conteiner = document.getElementById("conteiner-charge")
    let fondoconteiner = document.getElementById("conteinerPrincipal")
        
    conteiner.style.visibility = "hidden"
    conteiner.style.opacity = "0"
    fondoconteiner.style.visibility = "visible"
}
