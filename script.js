document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function() {
        alert('Call-to-Action button clicked!');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const button = document.querySelector('.btn');
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
        // Action to perform on button click
        alert('Download Button clicked!');
    });
});