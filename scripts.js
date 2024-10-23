
function typeMessage() {
    if (index < message.length) {
        typedTextElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeMessage, speed);
    }
}

if (document.getElementById('start-btn')) {
    document.getElementById('start-btn').addEventListener('click', () => {
        typedTextElement.innerHTML = ''; // Limpia cualquier texto previo
        index = 0;
        typeMessage(); // Comienza a escribir
    });
}

// Manejo de botones de navegación
document.querySelectorAll('button[data-target]').forEach(button => {
    button.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-target');
        window.location.href = targetPage;
    });
});

// Observador de intersección para efectos de visibilidad
const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});

// Inicia el efecto de escritura al cargar la página
if (typedTextElement) {
    window.onload = typeMessage;
}
