const canvas = document.getElementById("snowfall");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  moveSnowflakes();
}

function moveSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    if (flake.y > height) {
      flake.y = 0;
      flake.x = Math.random() * width;
    }
  }
}

function updateSnowfall() {
  drawSnowflakes();
  requestAnimationFrame(updateSnowfall);
}

window.addEventListener("resize", () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});

createSnowflakes();
updateSnowfall();
