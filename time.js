let time = document.querySelector(".time");

let date = new Date();

time.innerHTML = date.toLocaleDateString() + ", " + date.toLocaleTimeString();

setInterval(() => {
    let time = document.querySelector(".time");
    let date = new Date();
    time.innerHTML = date.toLocaleDateString() + ", " + date.toLocaleTimeString();
}, 1000);
