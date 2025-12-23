function showtime() {
    const timeNow = new Date().toLocaleTimeString();
    document.getElementById('clock').textContent = timeNow;
}

setInterval(showtime, 1000);

function surprise() {
    window.location.href="https://www.youtube.com/watch?v=hJresi7z_YM";
}

function christmastree() {
    alert("A Christmas Tree!\n~It is not what is under the Christmas Tree that matters,\nit's who's around it\n   -Charles M. Schulz");
}

function christmassweater() {
    alert("A Christmas Sweater.\nMost people call it an ugly sweater.\nAny thoughts?");
}

function candycane() {
    alert("It's a Candy Cane!\nThe edges look a bit off");
}

function christmasornament() {
    alert("A Christmas Ornament.\nAs red as red can be, right?");
}

function christmassock() {
    alert("A Christmas Sock to stuff presents and other socks in");
}
