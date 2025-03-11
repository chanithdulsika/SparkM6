const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    if (validateForm()) {
        // Form is valid, you can add additional actions here if needed
    }
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        showAlert("Please fill out all fields.");
        return false;
    }

    showAlert("Your message has been sent!");
    return true;
}

function showAlert(message) {
    const alertBox = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.style.display = 'block';

    // Load and play the Lottie animation
    // const animationContainer = document.getElementById('lottie-animation');
    // lottie.loadAnimation({
    //     container: animationContainer,
    //     renderer: 'svg',
    //     loop: false,
    //     autoplay: true,
    //     path: './Assets/Done1.json' // Replace with the path to your Lottie animation JSON file
    // });

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 8000);
}