window.onload = function(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let dx = 3;
    let dy = -1;
    let ballRadius = 10;
    let leftPlayerScore = 0;
    let rightPlayerScore = 0;

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

    function drawScore(){
        ctx.font = "50px Comic Sans MS";
        if(rightPlayerScore == 5){
            alert("Player 2 YOU WIN!");
            document.location.reload();
        }
        if(leftPlayerScore == 5){
            alert("Player 1 YOU WIN!");
            document.location.reload();
        }
        ctx.fillText(rightPlayerScore, canvas.width / 2 + 25, 50);
        ctx.fillText(leftPlayerScore, canvas.width / 2 - 60, 50);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        drawLine();
        drawScore();


        if(x + dx < ballRadius){
            rightPlayerScore++;
            x = canvas.width / 2;
            y = canvas.height / 2;
            dx = -dx;
        }
        if(x + dx > canvas.width - ballRadius){
            leftPlayerScore++;
            x = canvas.width / 2;
            y = canvas.height / 2;
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