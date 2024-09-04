// Timer functionality
let timerInterval;
const timerDisplay = document.querySelector('#timer');
const startTimerBtn = document.querySelector('.start-timer');

const startTimer = () => {
    let timeLeft = 30;
    timerDisplay.textContent = timeLeft;
    startTimerBtn.disabled = true; // Disable the start button once timer starts

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerDisplay.textContent = 0;
            startTimerBtn.disabled = false; // Re-enable the start button when timer ends
        }
    }, 1000);
};

startTimerBtn.addEventListener('click', startTimer);