function darkMode() {
    let element = document.body;
    element.classList.toggle("dark-mode");
};

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImg = new Image();
playerImg.src = "/sprite-animation/assets/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    ctx.drawImage(playerImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    requestAnimationFrame(animate);
}

animate();