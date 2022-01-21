class Ball {
    constructor(x,y){
        var options={
            friction: 0.00001,
            restitution: 1,
            density: 0.000001,
            frictionAir: 0.001
           
        }
        this.body = Bodies.circle(x,y,20,options)
        World.add(world, this.body)

    }

    display(){
        push()
        fill("red")
        translate(this.body.position.x,this.body.position.y)
        ellipse(0,0, 40, 40)
        pop()
    }
}