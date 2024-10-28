let Contacts, Canvas, BallRadius, x, y, dx, dy; //To let the system know that there is such a thing as these variables
window.onload = () => {
    Canvas = document.getElementById("CanvasBoard");
    Contacts = Canvas.getContext("2d");
    BallRadius = 25;
    x = Canvas.width / 2 - BallRadius / 2;
    y = Canvas.width / 2 - BallRadius / 2;
    dx = 2; //The "steps" the ball moves on the x axis
    dy = 2; //The "steps" the ball moves on the y axis
    UpdateCanvas();
}
const UpdateCanvas = () => {
    Contacts.clearRect(0, 0, Canvas.width, Canvas.height); //Clears the entier canvas
    Contacts.beginPath();
    Contacts.lineWidth = 5;
    Contacts.strokeStyle = "rgb(0,0,0)";
    Contacts.fillStyle = "rgb(66, 135, 245)";
    Contacts.arc(x, y, BallRadius, 0, 2 * Math.PI);
    Contacts.stroke();
    Contacts.fill();
    Contacts.closePath();
    if (x + dx > Canvas.width - BallRadius || x + dx < BallRadius) {
        dx = -dx;
    }
    if (y + dy > Canvas.height - BallRadius || y + dy < BallRadius) {
        dy = -dy;
    }
    x = x + dx;
    y = y + dy;
    requestAnimationFrame(UpdateCanvas); // Calls for the animation in the function, again???
}

    // Contacts.beginPath();
    // Contacts.moveTo(0,0);
    // Contacts.lineTo(100,100);
    // Contacts.lineTo(800,600);
    // Contacts.stroke();

    // Contacts.fillStyle = "rgba(96, 214, 204, 0.5)";
    // Contacts.fillRect(10,10,100,100);
    // Contacts.fillStyle = "rgba(179, 196, 27, 0.7)";
    // Contacts.fillRect(80,80,100,100);

    // Contacts.beginPath();
    // Contacts.arc(120, 120, 100, 0, 2 * Math.PI);
    // Contacts.lineWidth = 10;
    // Contacts.strokeStyle = "rgb(0, 0, 0)";
    // Contacts.fillStyle = "rgb(0, 0, 255)";
    // Contacts.stroke();
    // Contacts.fill();