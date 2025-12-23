function showtime() {
    const timeNow = new Date().toLocaleTimeString();
    document.getElementById('clock').textContent = timeNow;
}

setInterval(showtime, 1000);

function surprise() {
    window.location.href="https://www.youtube.com/watch?v=ALj9FPvyFUU";
}