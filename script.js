let menu = document.getElementById("menu")
let nav = document.getElementById("nav")
let header = document.getElementById("header")
menu.onclick = () =>{
    nav.classList.toggle("active")
}

window.onscroll = () =>{
    if(window.scrollY > 0){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
}

window.onload = () =>{
    if(window.scrollY > 0){
        header.classList.add("active")
    }
    else{
        header.classList.remove("active")
    }
}