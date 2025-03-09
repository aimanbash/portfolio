// script.js

const bubblesContainer = document.querySelector('.bubbles');

// Function to generate a random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a bubble and set its random position
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubbles';
    bubble.style.left = `${randomInRange(0, window.innerWidth)}px`;
    bubblesContainer.appendChild(bubble);
}

// Generate multiple bubbles
for (let i = 0; i < 50; i++) {
    createBubble();
}

//bubble container 
// script.js

// Function to generate a random number within a range
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Function to create a bubble and set its random position and animation duration
function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${randomInRange(0, window.innerWidth)}px`;
    bubble.style.animationDuration = `${randomInRange(2, 6)}s`;
    document.querySelector('.bubble-container').appendChild(bubble);
}

// Generate multiple bubbles
for (let i = 0; i < 50; i++) {
    createBubble();
}

