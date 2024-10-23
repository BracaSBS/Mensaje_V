function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block"; // Muestra el modal
    modalImg.src = img.src; // Establece la fuente de la imagen en el modal
    captionText.innerHTML = img.nextElementSibling.innerHTML; // Muestra la descripción de la imagen
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Oculta el modal
}
