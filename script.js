// Tiny JS to show interactivity and the current time
const nowEl = document.getElementById('now');
const countEl = document.getElementById('count');
const yearEl = document.getElementById('year');
const clicker = document.getElementById('clicker');
const themeToggle = document.getElementById('themeToggle');

function renderTime() {
  const now = new Date();
  nowEl.textContent = now.toLocaleString();
  yearEl.textContent = now.getFullYear();
}
renderTime();
setInterval(renderTime, 1000);

let clicks = 0;
clicker.addEventListener('click', () => {
  clicks += 1;
  countEl.textContent = `Clicked ${clicks} ${clicks === 1 ? 'time' : 'times'}.`;
});

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  themeToggle.setAttribute('aria-pressed', String(isLight));
});
