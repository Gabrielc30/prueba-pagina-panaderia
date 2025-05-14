// Mejoras para el carrusel de productos
// Incluye: centrado vertical de flechas, soporte para deslizamiento táctil y optimización de imágenes

// Variables de control para el carrusel
let currentProduct = '';
let currentImageIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Estructura de datos para el carrusel de imágenes por producto
const carouselData = {
    "panificados": [
        "./img/panificados-1.jpg",
        "./img/panificados-2.jpg",
        "./img/panificados-3.jpg"
    ],
    "pasteleria": [
        "./img/pasteleria-1.jpg",
        "./img/pasteleria-2.jpg",
        "./img/pasteleria-3.jpg"
    ],
    "facturas": [
        "./img/facturas-1.jpg",
        "./img/facturas-2.jpg",
        "./img/facturas-3.jpg"
    ],
    "chipa": [
        "./img/chipa-1.jpg",
        "./img/chipa-2.jpg",
        "./img/chipa-3.jpg"
    ]
};

// Crear el modal del carrusel
function createCarouselModal() {
    // Crear elemento modal si no existe
    if (!document.getElementById('carousel-modal')) {
        const modal = document.createElement('div');
        modal.id = 'carousel-modal';
        modal.className = 'carousel-modal';
        
        // Estructura del modal
        modal.innerHTML = `
            <div class="carousel-container">
                <button class="close-carousel"><i class="bi bi-x-circle-fill"></i></button>
                <div class="carousel-content">
                    <button class="carousel-prev"><i class="bi bi-chevron-left"></i></button>
                    <div class="carousel-image-container">
                        <img id="carousel-image" src="" alt="Producto">
                    </div>
                    <button class="carousel-next"><i class="bi bi-chevron-right"></i></button>
                </div>
                <div class="carousel-indicators"></div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Añadir eventos
        const closeBtn = modal.querySelector('.close-carousel');
        const prevBtn = modal.querySelector('.carousel-prev');
        const nextBtn = modal.querySelector('.carousel-next');
        const imageContainer = modal.querySelector('.carousel-image-container');
        
        closeBtn.addEventListener('click', closeModal);
        prevBtn.addEventListener('click', showPrevImage);
        nextBtn.addEventListener('click', showNextImage);
        
        // Añadir eventos de deslizamiento táctil
        imageContainer.addEventListener('touchstart', handleTouchStart, false);
        imageContainer.addEventListener('touchend', handleTouchEnd, false);
        
        // Cerrar modal al hacer clic fuera del contenido
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Añadir eventos de teclado
        document.addEventListener('keydown', handleKeyDown);
    }
}

// Gestionar inicio de toque táctil
function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
}

// Gestionar fin de toque táctil
function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}

// Procesar deslizamiento táctil
function handleSwipe() {
    const minSwipeDistance = 50; // Distancia mínima para detectar un deslizamiento
    
    if (touchEndX < touchStartX - minSwipeDistance) {
        // Deslizamiento hacia la izquierda -> siguiente imagen
        showNextImage();
    }
    
    if (touchEndX > touchStartX + minSwipeDistance) {
        // Deslizamiento hacia la derecha -> imagen anterior
        showPrevImage();
    }
}

// Función para mostrar el modal con el carrusel
function openModal(productType) {
    currentProduct = productType;
    currentImageIndex = 0;
    
    const modal = document.getElementById('carousel-modal');
    modal.classList.add('active');
    document.body.classList.add('modal-open');
    
    updateCarouselImage();
    updateIndicators();
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('carousel-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Actualizar la imagen mostrada en el carrusel
function updateCarouselImage() {
    const image = document.getElementById('carousel-image');
    if (carouselData[currentProduct] && carouselData[currentProduct][currentImageIndex]) {
        image.src = carouselData[currentProduct][currentImageIndex];
        image.alt = `${currentProduct} ${currentImageIndex + 1}`;
        
        // Asegurar que la imagen carga correctamente
        image.onload = function() {
            image.style.opacity = 1;
        };
        
        // Efecto de transición
        image.style.opacity = 0.8;
    }
}

// Mostrar imagen anterior
function showPrevImage() {
    if (carouselData[currentProduct]) {
        currentImageIndex = (currentImageIndex - 1 + carouselData[currentProduct].length) % carouselData[currentProduct].length;
        updateCarouselImage();
        updateActiveIndicator();
    }
}

// Mostrar imagen siguiente
function showNextImage() {
    if (carouselData[currentProduct]) {
        currentImageIndex = (currentImageIndex + 1) % carouselData[currentProduct].length;
        updateCarouselImage();
        updateActiveIndicator();
    }
}

// Crear indicadores de posición del carrusel
function updateIndicators() {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = '';
    
    if (carouselData[currentProduct]) {
        carouselData[currentProduct].forEach((_, index) => {
            const indicator = document.createElement('span');
            indicator.className = 'carousel-indicator';
            if (index === currentImageIndex) {
                indicator.classList.add('active');
            }
            
            indicator.addEventListener('click', () => {
                currentImageIndex = index;
                updateCarouselImage();
                updateActiveIndicator();
            });
            
            indicatorsContainer.appendChild(indicator);
        });
    }
}

// Actualizar el indicador activo
function updateActiveIndicator() {
    const indicators = document.querySelectorAll('.carousel-indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentImageIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Manejar eventos de teclado
function handleKeyDown(e) {
    if (!document.getElementById('carousel-modal').classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeModal();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
}

// Inicializar el carrusel al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    createCarouselModal();
    
    // Añadir eventos a las tarjetas de productos
    const productCards = document.querySelectorAll('#productus .card');
    
    productCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function() {
            let productType;
            
            // Determinar tipo de producto según el índice
            switch(index) {
                case 0:
                    productType = 'panificados';
                    break;
                case 1:
                    productType = 'pasteleria';
                    break;
                case 2:
                    productType = 'facturas';
                    break;
                case 3:
                    productType = 'chipa';
                    break;
            }
            
            if (productType) {
                openModal(productType);
            }
        });
    });
});
