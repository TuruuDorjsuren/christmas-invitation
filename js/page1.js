document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation with heart animation
    const yesButton = document.getElementById('yes-button');
    if (yesButton) {
        yesButton.addEventListener('click', (event) => {
            const heartContainer = document.getElementById('heart-container');
            const buttonRect = yesButton.getBoundingClientRect(); // Get the button's position

            // Generate exactly 20 hearts
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

            // Delay navigation by 2 seconds to allow animation to finish
            setTimeout(() => {
                window.location.href = 'page2.html'; // Navigate to Page 2
            }, 2000); // 2-second delay
        });
    }

    // Handle the "I'm not sure yet" button click
    const noButton = document.getElementById('no-button');
    if (noButton) {
        noButton.addEventListener('click', () => {
            // Define the small range for teleportation
            const rangeX = 50; // Horizontal range
            const rangeY = 50; // Vertical range

            // Get the current position of the button
            const rect = noButton.getBoundingClientRect();

            // Generate new positions within the range
            const randomTop = rect.top + (Math.random() * rangeY - rangeY / 2);
            const randomLeft = rect.left + (Math.random() * rangeX - rangeX / 2);

            // Ensure the button stays within the viewport
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Constrain the random positions
            const constrainedTop = Math.max(50, Math.min(randomTop, viewportHeight - 100));
            const constrainedLeft = Math.max(50, Math.min(randomLeft, viewportWidth - 200));

            // Update button position
            noButton.style.position = 'absolute';
            noButton.style.top = `${constrainedTop}px`;
            noButton.style.left = `${constrainedLeft}px`;

            // Change the button text
            noButton.textContent = "Sorry, I think you misclicked ( ˶°ㅁ°) !!";
        });
    }
});
