var myGamePiece;
var myObstacles = [];
var myScore;

function startGame(gamewidht) {
    myGamePiece = new component(50, 50, "images/rng-h.png", 10, 120, "image");
    myGamePiece.gravity = 0.05;
    myScore = new component("30px", "Consolas", "black", 100, 40, "text");
    myGameArea.start(gamewidht);
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function (gamewidht) {
        this.canvas.width = gamewidht | 645;
        this.canvas.height = 420;
        this.context = this.canvas.getContext("2d");
        document.getElementById("game").appendChild(this.canvas)
        document.getElementById("dado").style.display = 'none'
        document.getElementById("fogo").style.display = 'none'
        //document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('touchstart', function (e) {
            myGameArea.key = 38; //GAMBS
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
        window.addEventListener('touchend', function (e) {
            myGameArea.key = false;
        })
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function () {
        ctx = myGameArea.context;

        if (type == "image") {
            ctx.drawImage(this.image,
                this.x,
                this.y,
                this.width, this.height);
        } else if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function () {
        if (this.gravitySpeed < -1) {
            this.image.src = "images/fogo-baixo.png"
            this.width = 50
            this.height = 50
        } else if (this.gravitySpeed > 1) {
            this.image.src = "images/fogo-cima.png"
            this.width = 50
            this.height = 50

        } else {
            this.image.src = "images/fogo-reto.png"
            this.width = 55
            this.height = 35
        }
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitEdges();
    }
    this.hitEdges = function () {
        var rockbottom = myGameArea.canvas.height - this.height;
        var rooftop = 0;

        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = -0.2;
        }

        if (this.y < rooftop) {
            this.y = rooftop;
            this.gravitySpeed = 0.05;
        }
    }
    this.crashWith = function (otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            return;
        }
    }

    myGameArea.clear();
    myGameArea.frameNo += 1;

    var obstaclesMoviment = -2;
    maxGap = 200;

    if (myGameArea.frameNo > 500) {
        obstaclesMoviment = -3;
        maxGap = 180;
    } else if (myGameArea.frameNo > 1000) {
        obstaclesMoviment = -4;
        maxGap = 140;
    } else if (myGameArea.frameNo > 1500) {
        obstaclesMoviment = -5;
        maxGap = 120;
    } else if (myGameArea.frameNo > 2000) {
        obstaclesMoviment = -6;
        maxGap = 100;
    }


    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        x = myGameArea.canvas.width;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
        minGap = 60;
        gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new component(10, height, "#6ec6ec", x, 0));
        myObstacles.push(new component(10, x - height - gap, "#6ec6ec", x, height + gap));
    }

    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += obstaclesMoviment;
        myObstacles[i].update();
    }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    if (myGameArea.key && myGameArea.key == 38) { // 40 down //71 LETRA G
        myGamePiece.gravity = -0.2
    } else {
        myGamePiece.gravity = 0.05
    }
    myGamePiece.newPos();
    myGamePiece.update();
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {
        return true;
    }
    return false;
}

function accelerate(n) {
    myGamePiece.gravity = n;
}