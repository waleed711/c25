
class Tower{
    constructor(x,y,width,hieght){
        var options = {
            isStatic: true    
         }
        this.width = width
        this.hieght = hieght
        this.body = Bodies.rectangle(x,y,width,hieght,options)
        World.add(world,this.body)
        this.image = loadImage("assets/tower.png")
    
    }

    display(){
        
        image(this.image,50,200,this.width,this.hieght)

          //  image(name of image,x,y,w,h)
    }


}