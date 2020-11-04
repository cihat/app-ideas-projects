var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = window.innerWidth;
var ch = c.height = window.innerHeight;
var cx = cw / 2,
  cy = ch / 2;
var rad = Math.PI / 180;
var frames = 0;
var requestId = null;

ctx.lineWidth = 3;
ctx.strokeStyle = "white";
ctx.fillStyle = "rgba(0,0,0,1)";

var Amplitude = 50,
  amplitude;
var step = .5;
var W = 360 * step;
var I = 1 / step;
var offset;

function Draw() {
  frames += 3;
  ctx.clearRect(0, 0, cw, ch);
  
  for (var Y = -Amplitude; Y < ch + Amplitude; Y += 10) {
    offset = cx + 100 * Math.sin(Y * rad) - 100;
    amplitude = Amplitude * Math.sin((frames + Y) * rad);
    ctx.beginPath();
    ctx.moveTo(0, Y + 3 * Amplitude);
    for (var x = 0; x < cw; x++) {
      if (x < offset || x > offset + (360 * step)) {
        y = Y;
      } else {
        y = amplitude * Math.cos(rad * (x - offset) * I) + Y - amplitude;
      }
      ctx.lineTo(x, y);
    }
    ctx.lineTo(cw, Y + 3 * Amplitude);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

  }

  requestId = window.requestAnimationFrame(Draw);
}

function Init() {

  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }
  cw = c.width = window.innerWidth;
  ch = c.height = window.innerHeight;
  cx = cw / 2, cy = ch / 2;
  frames = 0;
  Amplitude = 50, amplitude;
  step = .5;
  W = 360 * step;
  I = 1 / step;
  console.log(I)
  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  ctx.fillStyle = "rgba(0,0,0,1)";

  requestId = window.requestAnimationFrame(Draw);

}

window.setTimeout(function() {
  Init();

  window.addEventListener('resize', Init, false);
}, 15);