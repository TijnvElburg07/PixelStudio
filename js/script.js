const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const pixelSize = 20;
const pixelColor = document.getElementById("colorPicker");

let isEraserMode = false;

function drawPixel(event) {
    const rect = canvas.getBoundingClientRect();
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const pixelX = Math.floor(mouseX / pixelSize) * pixelSize;
    const pixelY = Math.floor(mouseY / pixelSize) * pixelSize;

    const pixel = new Pixel(pixelX, pixelY, pixelColor.value, pixelSize, isEraserMode);
    pixel.draw();
}

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", () => {
    const tools = new Tools(canvas, ctx);
    tools.clearCanvas();
});

const eraserBtn = document.getElementById("eraserBtn");
eraserBtn.addEventListener("click", () => {
    isEraserMode = !isEraserMode; 
    if (isEraserMode) {
        eraserBtn.style.backgroundColor = "red";
        eraserBtn.innerText = "Eraser";
    } else {
        eraserBtn.style.backgroundColor = "";
        eraserBtn.innerText = "Eraser";
    }
});

canvas.addEventListener("mousedown", drawPixel);
canvas.addEventListener("mousemove", (event) => {
    if (event.buttons === 1) {
        drawPixel(event);
    }
});