function openModal() {
    document.getElementById("pdfModal").style.display = "block";
}

// Close the modal
function closeModal() {
    document.getElementById("pdfModal").style.display = "none";
}

// Close modal when clicking outside the modal box
window.onclick = function(event) {
    let modal = document.getElementById("pdfModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}