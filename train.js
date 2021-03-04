class Train{
constructor(x,y,width,height,options){
    var options={
restitution:0.1,



    }

this.body=Bodies.rectangle(x,y,width,height,options)

this.width = width;
this.height = height
this.image=loadImage("images/coach.png")
World.add(world,this.body)
}

display(){
    
imageMode(CENTER)
image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);


}










}