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
}

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
                if (title) {
                    title.classList.add('fadeIn');
                    title.style.animationDelay = '0.2s';
                }
                
                const cards = section.querySelectorAll('.card, .card-contact, .timetable-card');
                if (cards.length > 0) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('fadeInUp');
                        }, 100 * (index + 1));
                    });
                }
                
                // Animate content in About section
                if (section.id === 'aboutus') {
                    const aboutContent = section.querySelector('.about-content');
                    const aboutImage = section.querySelector('.about-image');
                    
                    if (aboutContent) aboutContent.classList.add('fadeIn');
                    if (aboutImage) {
                        aboutImage.style.animationDelay = '0.3s';
                        aboutImage.classList.add('fadeInUp');
                    }
                }
            }
        });
    };
    
    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on initial load
    animateOnScroll();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to current section in navigation
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-list a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});
