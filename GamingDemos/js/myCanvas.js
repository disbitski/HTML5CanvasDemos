window.onload = function () {

    //Intellisense
    var canvas = document.getElementById('myCanvas');

    //Get Canvas Context
    //var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    //Rectangle
    ctx.fillStyle = 'Blue'; //navy
    ctx.fillRect(20, 20, 100, 100);


    //Animate the new Rectangle?
    //            var id = window.setInterval(function () {
    //                ctx.fillRect(20, 20, 100, 100); //replace 20,20 with x and y and were checking 100ms

    //            }, 100);

    //Arc
    ctx.fillStyle = 'Red';
    ctx.strokeStyle = 'Yellow';
    ctx.arc(300, 100, 50, 0, Math.PI, false); //draw 200,200, 50 raidus
    //ctx.fill();
    ctx.stroke();

    //Lines - lets do a triangle with a stroke and a fill
    ctx.beginPath();
    ctx.moveTo(100, 350);
    ctx.lineTo(50, 500);
    ctx.lineTo(150, 500);
    ctx.lineTo(100, 400);
    ctx.strokeStyle = 'White';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = 'Green';
    ctx.fill();

    


}
