// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get the button and message elements
    const button = document.getElementById('myButton');
    const message = document.getElementById('message');

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Display a message when the button is clicked
        message.textContent = 'Hello, World! Welcome to Dalen AI!';
    });
});