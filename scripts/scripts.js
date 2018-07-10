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
    let paddleHeight = 70;
    let paddleWidth = 8;
    let paddleY = canvas.height / 2 - paddleHeight / 2;
    let upPressed = false;
    let downPressed = false;

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

    function drawLeftPaddle(){
        ctx.beginPath();
        ctx.rect(5, paddleY, paddleWidth, paddleHeight);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
    }

    function drawRightPaddle(){
        ctx.beginPath();
        ctx.rect(canvas.width - 13, paddleY, paddleWidth, paddleHeight);
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
    }

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    function keyDownHandler(e){
        if(e.keyCode === 38){
            upPressed = true;
        }
        if(e.keyCode === 40){
            downPressed = true;
        }
    }

    function keyUpHandler(e){
        if(e.keyCode === 38){
            upPressed = false;
        }
        if(e.keyCode === 40){
            downPressed = false;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawBall();
        drawLine();
        drawScore();
        drawLeftPaddle();
        drawRightPaddle();

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

        if(x + dx < ballRadius + paddleWidth || x + dx > canvas.width - ballRadius - paddleWidth){
            if(y + dy > paddleY){
                dx = -dx;
            }
            console.log(y);
        }

        if(y + dy < ballRadius || y + dy > canvas.height - ballRadius){
            dy = -dy;
        }

        if(upPressed && paddleY >= 0){
            paddleY -= 5;
        }
        if(downPressed && paddleY <= canvas.height - paddleHeight){
            paddleY += 5;
        }


        x += dx;
        y += dy;

        requestAnimationFrame(draw);
    }

    draw();
};