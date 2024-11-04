function updateClock() {
    const now = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;

    const timeStr = `${hours}:${minutes} ${ampm}`;

    const formattedTime = `${dateStr} | ${timeStr}`;
    document.querySelector(".clock").textContent = formattedTime;
    document.querySelector(".side-clock").textContent = formattedTime;
}

setInterval(updateClock, 1000);
updateClock();