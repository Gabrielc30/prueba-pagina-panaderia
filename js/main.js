const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const list = document.querySelector("#list");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");
const overflow = document.querySelector("#bodi")

abrir.addEventListener("click", ()=> {
    nav.classList.add("visible")
    bodi.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
    bodi.classList.remove("visible")
})

list.addEventListener("click", () => {
    nav.classList.remove("visible")
    bodi.classList.remove("visible")
})

list2.addEventListener("click", () => {
    nav.classList.remove("visible")
    bodi.classList.remove("visible")
})

list3.addEventListener("click", () => {
    nav.classList.remove("visible")
    bodi.classList.remove("visible")
})

list4.addEventListener("click", () => {
    nav.classList.remove("visible")
    bodi.classList.remove("visible")
})

