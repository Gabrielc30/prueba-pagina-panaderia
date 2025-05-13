/*const nav = document.querySelector("#nav");
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
}*/

// Seleccionar elementos del DOM
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const list = document.querySelector("#list");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const list4 = document.querySelector("#list4");
const bodi = document.querySelector("#bodi");

// Función para abrir el menú
abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    bodi.classList.add("visible");
});

// Función para cerrar el menú
cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    bodi.classList.remove("visible");
});

// Cerrar el menú al hacer clic en los elementos de navegación
list.addEventListener("click", () => {
    nav.classList.remove("visible");
    bodi.classList.remove("visible");
});

list2.addEventListener("click", () => {
    nav.classList.remove("visible");
    bodi.classList.remove("visible");
});

list3.addEventListener("click", () => {
    nav.classList.remove("visible");
    bodi.classList.remove("visible");
});

list4.addEventListener("click", () => {
    nav.classList.remove("visible");
    bodi.classList.remove("visible");
});
document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu for mobile
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const body = document.querySelector("#bodi");
    const navLinks = document.querySelectorAll(".nav-list a");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
        body.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
        body.classList.remove("visible");
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("visible");
            body.classList.remove("visible");
        });
    });

    // Animate elements when they enter the viewport
    const animateOnScroll = function() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
                
                // Animate elements inside the section
                const title = section.querySelector('.section-title');
                if (title) title.classList.add('fadeIn');
                
                const cards = section.querySelectorAll('.card, .card-contact, .timetable-card');
                if (cards.length > 0) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('fadeInUp');
