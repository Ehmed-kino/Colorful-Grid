
// color gallery
var color = ["#2196f3","#f44e42","#d117be","#3d0309","#dd5b04",
            "#EFDECD", "#CD9575","#FDD9B5", "#78DBE2", "#87A96B",
             "#FFA474", "#C5E384"];
// how many time the mouse has been over
var over = 0;
// the index that change the color
var index = 0;

// loading the page
function load() {
  var output = "<div class='block' onmouseover='mouseOver(this)' onmouseout='mouseOut(this);'></div>";
// looping 1000 time
for (var i = 0; i < 1000 ; i++) {
  // addind divs to grid div
   document.getElementById('grid').innerHTML += output;
 }
}
// onmouseOver
function mouseOver(mouse_over) {
  // adding stylesheet to the block class
  mouse_over.style.backgroundColor = color[index];
  // incroment over times
  over++;
  // implementaion
  console.log(over);
  // check if array reach to the end
  if (index !== color.length){
    index++;
  }else {
    index = 0;
  }
}
// onMouseOut
function mouseOut(mouse_out) {
  // reset the color to white
  mouse_out.style.backgroundColor = "white";
  // adding fade out animation
  mouse_out.style.transitionDuration = ".2s";
}
