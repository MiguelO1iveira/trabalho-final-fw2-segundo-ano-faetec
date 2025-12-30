
const btnMobile = window.document.getElementById("btn-mobile")
btnMobile.addEventListener("click", toggleMenu)

function toggleMenu() {
    const nav = window.document.getElementById("nav")
    nav.classList.toggle("active")
}

/*
const a = window.document.getElementsByClassName("mudarImg")

function entrar(num){
    switch (num) {
        case 1:
            a.src = 'imagens/TOP10.jpg';
        break;
    }
}
function sair() {
    a.src = "imagens/nba-logo-200x89.png"
}
*/
