class Wall {
    constructor(x, y, width, height){
        var options={
           isStatic: true
           
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,this.width, this.height,options)
        World.add(world, this.body)

    }

    display(){
        push()
        fill("black")
        translate(this.body.position.x,this.body.position.y)
        rect(this.x, this.y, this.width, this.height)
        pop()
    }
}