// Get modal element
const modal = document.getElementById("modal");
// Get the image inside the modal
const modalImage = document.getElementById("modal-image");
// Get close button
const closeButton = document.getElementById("close");

// Add click event listeners to gallery images
const galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach(image => {
    image.addEventListener("click", function() {
        modal.style.display = "block"; // Show modal
        modalImage.src = this.src; // Set modal image to clicked image
    });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", function() {
    modal.style.display = "none"; // Hide modal
});

// Close the modal when clicking outside the image
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
});
