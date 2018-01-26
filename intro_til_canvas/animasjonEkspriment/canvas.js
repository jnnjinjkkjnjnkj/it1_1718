var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var fart = 0.001;
var temp = 100;
var musX = canvas.width/2;
var musY = canvas.height/2;

c.canvas.addEventListener('mousemove', function (e) {

    musX = e.clientX;
    musY = e.clientY;
    
});

c.canvas.addEventListener('click', function () {
    red = Math.round(Math.random() * 255);
    blue = Math.round(Math.random() * 255);
    green = Math.round(Math.random() * 255);

});

function animate() {

    requestAnimationFrame(animate);

    c.fillStyle = 'rgba(0, 0, 0, 0.1)';
    c.fillRect(0, 0, canvas.width, canvas.height);

    temp = temp + fart;

    for(var i = 0; i<40; i++){
        var x = Math.cos(temp+i*temp/10)*30*i+musX;
        var y = Math.sin(temp+i*temp/10)*4*i+musY;
        var radius = 5;
        var r = 200;
        var g = 0;
        var b = blue-Math.round(Math.random() * 255);
        c.beginPath();
        c.arc(x, y, radius, 0, 2*Math.PI);
        c.strokeStyle = 'rgba('+r+','+g+','+b+',1)';
        c.fillStyle = 'rgba('+r+','+g+','+b+',0.5)';
        c.fill();
        c.stroke();
    }

};

animate()
