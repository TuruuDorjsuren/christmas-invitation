// Handle the button click to dynamically link to the next page
document.getElementById('yes-button').addEventListener('click', (event) => {
    const heartContainer = document.getElementById('heart-container');
    const buttonRect = event.target.getBoundingClientRect(); // Get the button's position

    // Generate exactly 20 hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart'); // Add the heart class
        heart.textContent = '❤︎'; // Use the desired heart symbol

        // Randomize starting position near the button
        const randomStartX = Math.random() * buttonRect.width - buttonRect.width / 2; // Randomize horizontally
        const randomStartY = Math.random() * buttonRect.height - buttonRect.height / 2; // Randomize vertically
        const randomSize = Math.random() * 2 + 0.3; // Random size (0.3x to 2.3x)
        const randomDelay = Math.random() * 0.5; // Random animation delay (0s to 0.5s)

        // Randomize heart color (solid red or gradient half)
        if (Math.random() > 0.5) {
            heart.classList.add('gradient-heart'); // Half gradient hearts
        } else {
            heart.style.color = 'red'; // Solid red hearts
        }

        // Apply styles
        heart.style.left = `${buttonRect.left + buttonRect.width / 2 + randomStartX}px`; // Horizontal spread
        heart.style.top = `${buttonRect.top + buttonRect.height / 2 + randomStartY}px`; // Vertical spread
        heart.style.transform = `scale(${randomSize})`; // Random size
        heart.style.animationDelay = `${randomDelay}s`; // Staggered animation

        // Use CSS variables for random scatter effect
        const randomX = Math.random() * 600 - 300; // Random scatter across the screen (-300px to 300px)
        heart.style.setProperty('--random-x', `${randomX}px`);

        // Add heart to the container
        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, 3000); // Matches animation duration (3s)
    }

    // Determine the next page dynamically
    const nextPage = event.target.getAttribute('data-next-page') || 'page8.html';

    // Delay navigation by 2 seconds to allow animation to finish
    setTimeout(() => {
        window.location.href = nextPage; // Navigate to the specified next page
    }, 2000); // 2-second delay
});
// Add event listener for the slider input
const slider = document.getElementById('rating-slider');
const heartContainer = document.getElementById('heart-container');

slider.addEventListener('input', (event) => {
    // Get the slider position
    const sliderRect = slider.getBoundingClientRect();
    const sliderThumbX = sliderRect.left + (slider.value / 100) * sliderRect.width;

    // Generate hearts when the slider is scrolled
    for (let i = 0; i < 1; i++) { // Create 1 hearts for every scroll
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤︎'; // Use the desired heart symbol

        // Randomize position around the slider thumb
        const randomOffsetX = Math.random() * 50 - 25; // Spread horizontally around the thumb
        const randomOffsetY = Math.random() * -50; // Spread vertically upwards
        const randomSize = Math.random() * 1 + 0.5; // Random size (0.5x to 1.5x)
        const randomDelay = Math.random() * 0.2; // Random animation delay (0s to 0.2s)

        // Apply styles to the heart
        heart.style.left = `${sliderThumbX + randomOffsetX}px`; // Horizontal position
        heart.style.top = `${sliderRect.top + randomOffsetY}px`; // Vertical position
        heart.style.transform = `scale(${randomSize})`; // Random size
        heart.style.animationDelay = `${randomDelay}s`; // Staggered animation

        // Use CSS variables for random scatter effect
        const randomX = Math.random() * 200 - 100; // Random scatter effect (-100px to 100px)
        heart.style.setProperty('--random-x', `${randomX}px`);

        // Add the heart to the container
        heartContainer.appendChild(heart);

        // Remove the heart after animation
        setTimeout(() => {
            heart.remove();
        }, 3000); // Matches animation duration (3s)
    }
});
