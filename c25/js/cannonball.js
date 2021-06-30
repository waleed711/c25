class cannonball {
    constructor(x,y){
        var options = {
            restitution:0.8,
            isStatic:true    
         }
         this.radius = 40
        this.body = Bodies.circle(x,y,this.radius,options)
        
        World.add(world,this.body)
        this.image = loadImage("assets/cannonball.png")
    
    }

    display(){

        
push()
translate(this.body.position.x,this.body.position.y)

        image(this.image,0,0,this.radius,this.radius)
pop()
          //  image(name of image,x,y,w,h)
    }
    

}

