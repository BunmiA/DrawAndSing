
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;
var can;
var ctx;

var canvasOffset=$("#drawingCanvas").offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
function init(){
    can = document.getElementById("drawingCanvas");
    ctx = can.getContext("2d");
}



$('#drawingCanvas').mousedown(function(e){
  // var mouseX = e.pageX - this.offsetLeft;
  // var mouseY = e.pageY - this.offsetTop;
   var mouseX = e.pageX - offsetX;
  var mouseY = e.pageY - offsetY;
	// console.log(this.offsetLeft);
	// console.log(offsetX);
  paint = true;
  // addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  addClick(e.pageX - offsetX, e.pageY - offsetY);
  redraw();
});


$('#drawingCanvas').mousemove(function(e){
  if(paint){
    // addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
     addClick(e.pageX - offsetX, e.pageY - offsetY, true);
    redraw();
  }
});


$('#drawingCanvas').mouseup(function(e){
  paint = false;
});


$('#drawingCanvas').mouseleave(function(e){
  paint = false;
});



function myFunction() {
     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height,false);
     clickX = new Array();
     clickY = new Array();
     ctx.save();
 }


function addClick(x, y, dragging)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
}


function redraw(){
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); // Clears the canvas
  
  ctx.strokeStyle = "#df4b26";
  ctx.lineJoin = "round";
  ctx.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++) {		
    ctx.beginPath();
    if(clickDrag[i] && i){
      ctx.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       ctx.moveTo(clickX[i]-1, clickY[i]);
     }
     ctx.lineTo(clickX[i], clickY[i]);
     ctx.closePath();
     ctx.stroke();
  }
}