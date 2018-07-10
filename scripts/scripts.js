window.onload = function(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 3;
    let dy = -1;
    let ballRadius = 10;

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2, false);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
    }

    function drawLine(){
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, 0);
        ctx.lineTo(canvas.width / 2, canvas.height);
        ctx.strokeStyle = "#fff";
        ctx.stroke();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawLine();
        console.log(y);
        if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
            dx = -dx;
        }
        if(y + dy < ballRadius || y + dy > canvas.height - ballRadius){
            dy = -dy;
        }

        x += dx;
        y += dy;

        requestAnimationFrame(draw);
    }

    draw();
    drawLine();
};