const time = document.querySelector('.time');

const date = new Date();

time.innerHTML = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;

setInterval(() => {
  const time = document.querySelector('.time');
  const date = new Date();
  time.innerHTML = `${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`;
}, 1000);
