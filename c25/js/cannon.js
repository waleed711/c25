class cannon{
    constructor(x,y,width,hieght,angle){
this.x = x
this.y = y
this.width = width
this.hieght = hieght
this.angle = angle
    }
display(){
    fill("black")
    if (keyIsDown(RIGHT_ARROW)&& this.angle<0.35){
            this.angle +=0.02
    
        }
    
    if (keyIsDown(LEFT_ARROW)&& this.angle>-1.45){
        this.angle -=0.02
    }
        push()
    translate(this.x,this.y)
    rotate(this.angle)
    
    
    rect(-50,-50,this.width,this.hieght)
    pop()
    arc(this.x-50,this.y+110,140,200,PI,TWO_PI)
}
    
}