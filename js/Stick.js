class Stick {
    constructor(x,y){
        var options={
            density: 1,
           
        }
        this.body = Bodies.rectangle(x,y,200,15,options)
        World.add(world, this.body)

    }

    display(){
        push()
      
        fill("navy")
        translate(this.body.position.x,this.body.position.y)
        rectMode(CENTER)
        rect(0,0, 200, 15)
        pop()
    }
}