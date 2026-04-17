document.addEventListener('DOMContentLoaded', () => {
    const timeDisplay = document.getElementById('current-time');

    function updateTime() {
        timeDisplay.textContent = Date.now();
    }

    updateTime();
    setInterval(updateTime, 100);
});