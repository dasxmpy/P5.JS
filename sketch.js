function setup() {
    createCanvas(450, 450);
     background("white");
  }
  
  function draw() {
    stroke("salmon");
    fill("pink");
  
     // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {      
      rect(mouseX, mouseY, 20, 35);
    }
  }