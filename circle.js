class Circle
{
   /* constructor()
    {
        console.log("Default constructor");
    }
    constructor(radius)
    {
        this.radius=radius;
    }*/
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    getRadius()
    {
        return this.radius;
    }
    setRadius(value)
    {
        this.radius=value;
    }
    getColor()
    {
        return this.color;
    }
    setColor(color)
    {
        this.color=color;
    }
    toString()
    {
        return "radius"+this.radius,"color"+this.color;
    }
    getArea()
    {
        return 3.14*this.radius*this.radius;
    }
    getCircumference()
    {
        return 2*3.14*this.radius;
    }

}
const obj1=new Circle(1,"red");
console.log(obj1.getCircumference());
console.log(obj1.getArea());
console.log(obj1.getRadius());
console.log(obj1.getColor());