const contador = document.getElementById("contador");
const tambores = document.getElementById("tambores");

// Data do aniversário (ajuste para a data correta)
const aniversario = new Date("2025-08-30T22:05:00").getTime();

function atualizarContagem() {
  const agora = new Date().getTime();
  const distancia = aniversario - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));

  if (dias > 1) {
    contador.innerText = `${dias} dias até o seu dia! 🎉`;
  } else if (dias === 1) {
    contador.innerText = "Amanhã é o seu grande dia! 🌟";
  } else if (dias === 0) {
    contador.innerText = "É HOJE! FELIZ ANIVERSÁRIO 🎂🎶";
    iniciarConfete();
  } else {
    contador.innerText = "Já passou... mas você continua especial 💖";
  }

  if (dias <= 2 && dias >= 0) {
    tambores.play();
  }
}

setInterval(atualizarContagem, 1000);
atualizarContagem();

// 🎉 Confetes
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confetes = [];
for (let i = 0; i < 150; i++) {
  confetes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 0.05 + 0.02,
    color: `hsl(${Math.random() * 360}, 100%, 50%)`
  });
}

function desenharConfete() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetes.forEach((c) => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2, false);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  atualizarConfete();
}

function atualizarConfete() {
  confetes.forEach((c) => {
    c.y += c.d * 20;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}

function iniciarConfete() {
  setInterval(desenharConfete, 20);
}
