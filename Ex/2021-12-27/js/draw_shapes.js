let rectangles = [];
let qorder = 1

class Rectangle {
    constructor(x,y,width, height, color) {
        this.x = x;
        this.y = y; 
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = null;
        this.ctx = null;
    }
    draw(){        
        if (this.ctx == null){
            this.canvas = document.getElementById("myCanvas");
            this.ctx = this.canvas.getContext("2d");
        }
    }
}
class FilledRectangle extends Rectangle {
    constructor(x,y,width, height, color) {
        super(x,y,width, height, color);
    }
    draw(){  
        super.draw();      
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);    
    }
}
function restartArray(){
    let colors = ["#184CE8", "#1FD1C5", "#A9B3D8", "#3C4874"];
    let rectsCount = 3;
    let maxWidth = 120;
    let minWidth = 20;
    let startX = 150;
    let startY = 20;
    let sizeGap = (maxWidth - minWidth) / rectsCount;
    for (let i = 0; i < rectsCount; i++){
        rectangles.unshift(
            new FilledRectangle(
                startX + i*sizeGap/2,
                startY + i*sizeGap/2,
                maxWidth - i*sizeGap,
                maxWidth - i*sizeGap,
                // rgb(Math.floor(Math.random() * 255)+1, Math.floor(Math.random() * 255)+1, Math.floor(Math.random() * 255)+1)
                colors[i]
            )
        );
    }

}
function initPage(){
    console.log("initPage");
    restartArray()
}

function drawRects(change){
    if (qorder === -1){
        //Draw queue order
        qorder = change*qorder
        while (rectangles.length > 0){
            rectangles.shift().draw();
        }
    }else{
        //Draw stack order
        qorder = change*qorder
        while (rectangles.length > 0){
            rectangles.pop().draw();
        }
    }
    restartArray()
}
