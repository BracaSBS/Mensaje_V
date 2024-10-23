const message = `Hoy, mientras celebramos nuestro primer año juntos, quiero tomarme un momento para expresar lo que siento. A veces me pregunto cómo tuve la suerte de encontrar a una mujer tan maravillosa como tú. Eres la luz en mis días más oscuros y la sonrisa que ilumina mi corazón. 

Desde el primer instante en que nuestras miradas se cruzaron, supe que había encontrado a alguien especial. Tu risa, esa melodía que siempre me alegra, y tu bondad, que irradia amor y compasión, me han demostrado que existen personas realmente excepcionales en este mundo. Cada momento a tu lado ha sido un regalo, una aventura llena de risas, sueños compartidos y momentos inolvidables.

Eres perfecta en tu imperfección; tus pequeñas manías y tu forma de ver la vida hacen que cada día sea único. Me asombra cómo enfrentas los desafíos con valentía y cómo siempre encuentras la manera de ver lo mejor en los demás. Tu capacidad para amar y apoyar a quienes te rodean es un verdadero testimonio de tu carácter.

A veces me detengo a pensar en lo afortunado que soy de tenerte en mi vida. No solo eres mi pareja, sino también mi mejor amiga, mi confidente y mi mayor inspiración. Tu amor me motiva a ser una mejor persona y a perseguir mis sueños con valentía. Gracias por estar siempre a mi lado, por cada palabra de aliento, por cada gesto de cariño.

En este primer año juntos, he aprendido tanto sobre el amor y la felicidad, y todo eso se debe a ti. Te prometo seguir creciendo juntos, construir nuevos sueños y enfrentar cada día con la misma pasión que hemos compartido hasta ahora. Te amo con todo mi corazón y espero con ansias todos los años que nos quedan por vivir juntos.

Eres, sin duda, la mejor parte de mi vida. Gracias por ser quien eres y por permitirme ser parte de tu historia. ¡Feliz aniversario, mi amor!`;

let index = 0;
const speed = 80; // Velocidad de escritura
const typedTextElement = document.getElementById('typed-text');

function typeMessage() {
    if (index < message.length) {
        typedTextElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeMessage, speed);
    }
}

// Inicia el efecto de escritura al cargar la página
window.onload = function() {
    typeMessage();
};

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-target');
        window.location.href = targetPage;
    });
});
