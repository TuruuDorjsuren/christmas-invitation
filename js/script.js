// Shared heart animation logic
function createHeartAnimation(button, heartContainerId) {
    const heartContainer = document.getElementById(heartContainerId);
    const buttonRect = button.getBoundingClientRect(); // Get the button's position

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart'); // Add the heart class
        heart.textContent = '❤︎'; // Use the desired heart symbol

        // Randomize starting position near the button
        const randomStartX = Math.random() * buttonRect.width - buttonRect.width / 2;
        const randomStartY = Math.random() * buttonRect.height - buttonRect.height / 2;
        const randomSize = Math.random() * 2 + 0.3; // Random size (0.3x to 2.3x)
        const randomDelay = Math.random() * 0.5; // Random animation delay (0s to 0.5s)

        // Randomize heart color (solid red or gradient half)
        if (Math.random() > 0.5) {
            heart.classList.add('gradient-heart'); // Half gradient hearts
        } else {
            heart.style.color = 'red'; // Solid red hearts
        }

        // Apply styles
        heart.style.left = `${buttonRect.left + buttonRect.width / 2 + randomStartX}px`;
        heart.style.top = `${buttonRect.top + buttonRect.height / 2 + randomStartY}px`;
        heart.style.transform = `scale(${randomSize})`;
        heart.style.animationDelay = `${randomDelay}s`;

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
}

// Handle dynamic navigation with hearts
function handleNavigation(buttonId, heartContainerId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener('click', (event) => {
        createHeartAnimation(button, heartContainerId);

        // Determine the next page dynamically
        const nextPage = event.target.getAttribute('data-next-page') || 'page2.html';

        // Delay navigation by 2 seconds to allow animation to finish
        setTimeout(() => {
            window.location.href = nextPage; // Navigate to the specified next page
        }, 2000); // 2-second delay
    });
}
