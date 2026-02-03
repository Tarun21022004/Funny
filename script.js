const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const mainImage = document.getElementById('main-image');
const question = document.getElementById('question');
const card = document.querySelector('.card');

// Flags to track state
let isMoved = false;

// Function to move the "No" button
function moveButton() {
    // Make sure the button is absolute position relative to body or a larger container if we want it to fly around screen
    // For better UX in this "chase" effect, we'll position it absolute 

    if (!noBtn.classList.contains('moving')) {
        noBtn.classList.add('moving');
        // Move the button to body to avoid transform/relative positioning issues from parent elements
        document.body.appendChild(noBtn);
        noBtn.style.position = 'fixed';
    }

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Calculate random position within viewport, keeping some padding
    const padding = 50;
    const randomX = Math.random() * (viewportWidth - btnWidth - padding * 2) + padding;
    const randomY = Math.random() * (viewportHeight - btnHeight - padding * 2) + padding;

    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;

    // Swap image to no.gif
    mainImage.src = 'images/no.gif';
}

// Event listeners for "No" button
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', (e) => {
    // Just in case they manage to click it (mobile or super fast mouse), move it again!
    e.preventDefault();
    moveButton();
});

// Event listener for "Yes" button
yesBtn.addEventListener('click', () => {
    // Change image to yes.gif
    mainImage.src = 'images/yes.gif';

    // Change text
    question.textContent = "yeeee seee u sonn 💖";

    // Remove the buttons
    document.querySelector('.btn-group').style.display = 'none';
    if (noBtn) noBtn.style.display = 'none'; // Ensure noBtn is also hidden if it was moved to body

    // Optional: Reset "No" button image change if it was active
    // But logic says yes.gif appears now, so that's handled.
});
