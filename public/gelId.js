
let xPos = 0
let yPos = 0
const sect2 = document.getElementById('sect-2')
const swatch2 = document.getElementById('swatch-2')
var dash2 = document.getElementById('dash-2');
var img = new Image();
img.src = './images/calibrate.jpg'
var canvas = document.getElementById('canvas2');
var ctx = canvas.getContext('2d');


img.onload = function () {
  ctx.drawImage(img, 0, 0, 300, 300);
};

sect2.addEventListener('mousedown', setCoor)

function setCoor(e) {
  var offset = this.getClientRects()[0];
  xPos = Math.round(e.clientX - offset.left)
  yPos = Math.round(e.clientY - offset.top)
  var pixel = ctx.getImageData(xPos, yPos, 1, 1);
  var data = pixel.data;
  var rgb = 'rgb(' + data[0] + ', ' + data[1] +
    ', ' + data[2] + ')';
  swatch2.textContent = rgb;
  dash2.style.background = rgb
}

// color.textContent = rgb;
