document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const box = document.getElementById("box");
    var boxX = 0;
    var boxY = 0;
    const boxWidth = 100;
    const boxHeight = 100;
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;
    document.addEventListener("keydown", function (event) {
        if (event.key === "ArrowRight") {
            boxX += 10;
            if (boxX + boxWidth > canvasWidth) {
                boxX = canvasWidth - boxWidth;
            }
        }
        else if (event.key === "ArrowLeft") {
            boxX -= 10;
            if (boxX < 0) {
                boxX = 0;
            }
        }
        else if (event.key === "ArrowUp") {
            boxY -= 10;
            if (boxY < 0) {
                boxY = 0;
            }
        }
        else if (event.key === "ArrowDown") {
            boxY += 10;
            if (boxY + boxHeight > canvasHeight) {
                boxY = canvasHeight - boxHeight;
            }
        }
        box.style.left = boxX + "px";
        box.style.top = boxY + "px";
    });
});