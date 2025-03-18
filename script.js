document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show pop-up
    let popup = document.getElementById("popup");
    popup.classList.add("show");

    // Clear form fields
    document.getElementById("contactForm").reset();

    // Auto-close after 3 seconds
    setTimeout(() => {
        closePopup();
    }, 3000);
});

// Function to close the pop-up
function closePopup() {
    let popup = document.getElementById("popup");
    popup.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function() {

    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartCount.innerText = cart.length;

});
