// ============================================
// ANNIVERSARY MESSAGE - EDIT THIS SECTION
// ============================================
const anniversaryMessage = {
    greeting: "Happy Anniversary, Mumma Papa <3",
    lines: [
        "",
        "I don't have enough words to express how happy I am to have loving parents like you.",
        "",
        "Thank you for all you've done for me and Naisha",
        "and for giving us such a loved home 🩷",
        "",
        "Love you LOADSSSS",
        "",
        "- Jia"
    ]
};

// ============================================
// SCREEN MANAGEMENT
// ============================================

function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        setTimeout(() => {
            targetScreen.classList.add('active');
        }, 50);
    }
}

// ============================================
// SCREEN 1: CAKE WITH CANDLES
// ============================================

function initCakeScreen() {
    const cake = document.querySelector('.cake');
    const cakeImage = document.querySelector('.cake-image');
    
    cake.addEventListener('click', () => {
        // Disable further clicks
        cake.style.pointerEvents = 'none';
        
        // Fade and scale down the cake image
        cakeImage.classList.add('blowing-out');
        
        // Transition to next screen after ~1.2 seconds
        setTimeout(() => {
            showScreen('screen-letter-closed');
        }, 1200);
    });
}

// ============================================
// SCREEN 2: CLOSED LETTER
// ============================================

function initLetterClosedScreen() {
    const letterClosed = document.getElementById('letter-closed');
    
    letterClosed.addEventListener('click', () => {
        // Disable further clicks
        letterClosed.style.pointerEvents = 'none';
        
        // Animate letter opening
        letterClosed.classList.add('opening');
        
        // Transition to open letter screen
        setTimeout(() => {
            showScreen('screen-letter-open');
            displayLetterMessage();
        }, 1000);
    });
}

// ============================================
// SCREEN 3: OPEN LETTER WITH MESSAGE
// ============================================

function displayLetterMessage() {
    const letterContent = document.getElementById('letter-content');
    letterContent.innerHTML = ''; // Clear any existing content
    
    // Create greeting line
    const greetingLine = document.createElement('div');
    greetingLine.className = 'letter-line';
    greetingLine.textContent = anniversaryMessage.greeting;
    letterContent.appendChild(greetingLine);
    
    // Create message lines with staggered animation
    anniversaryMessage.lines.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.className = 'letter-line';
            
            // Add special styling classes for emphasis and signature
            if (line === "Love you LOADSSSS") {
                lineElement.className += ' letter-line-emphasis';
            } else if (line === "- Jia") {
                lineElement.className += ' letter-line-signature';
            }
            
            lineElement.textContent = line;
            letterContent.appendChild(lineElement);
        }, (index + 1) * 300); // 300ms delay between each line
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all screens
    initCakeScreen();
    initLetterClosedScreen();
    
    // Ensure first screen is visible
    showScreen('screen-cake');
});
