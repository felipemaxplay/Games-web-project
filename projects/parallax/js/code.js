/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;
let gameSpeed = 5;
// let gameFrame = 0;

const backGroundLayer1 = new Image();
backGroundLayer1.src = "./assets/layer-1.png";
const backGroundLayer2 = new Image();
backGroundLayer2.src = "./assets/layer-2.png";
const backGroundLayer3 = new Image();
backGroundLayer3.src = "./assets/layer-3.png";
const backGroundLayer4 = new Image();
backGroundLayer4.src = "./assets/layer-4.png";
const backGroundLayer5 = new Image();
backGroundLayer5.src = "./assets/layer-5.png";

window.addEventListener('load', function(e) {
    const slider = document.getElementById("slider");
    slider.value = gameSpeed;
    const showGameSpeed = document.getElementById("showGameSpeed");
    showGameSpeed.innerHTML = gameSpeed;
    slider.addEventListener("change", function(e) {
        gameSpeed = e.target.value;
        showGameSpeed.innerHTML = gameSpeed;
    });
    
    class Layer {
        constructor(image, speedMofier) {
            this.x = 0;
            this.y = 0;
            this.width = 2400;
            this.height = 700;
            this.image = image;
            this.speedMofier = speedMofier;
            this.speed = gameSpeed * this.speedMofier;
        }
        
        update() {
            this.speed = gameSpeed * this.speedMofier;
            if(this.x <= -this.width) {
                this.x = 0;
            }
            this.x = this.x - this.speed;
            // this.x = gameFrame * this.speed % this.width;
        }
    
        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
    }
    
    const layer1 = new Layer(backGroundLayer1, 0.1);
    const layer2 = new Layer(backGroundLayer2, 0.2);
    const layer3 = new Layer(backGroundLayer3, 0.3);
    const layer4 = new Layer(backGroundLayer4, 0.4);
    const layer5 = new Layer(backGroundLayer5, 0.5);
    
    const gameObjects = [layer1, layer2, layer3, layer4, layer5];
    
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gameObjects.forEach(object => {
            object.update();
            object.draw();
        });
    
        // gameFrame--;
        requestAnimationFrame(animate);
    }
    animate()
    
});