// Partículas de lluvia
const canvas = document.createElement('canvas');
canvas.id = 'rain-canvas';
document.getElementById('rain-particles')?.appendChild(canvas);

const ctx = canvas.getContext('2d');
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Drop {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * -canvas.height;
    this.speed = Math.random() * 3 + 2;
    this.length = Math.random() * 15 + 10;
    this.opacity = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = -20;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x, this.y + this.length);
    ctx.strokeStyle = `rgba(120, 180, 220, ${this.opacity})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

// Crear gotas
for (let i = 0; i < 80; i++) {
  particles.push(new Drop());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();