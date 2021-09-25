class Uber
{
    static baseFare=25;
    static costPerMin=1;
    static costPerMile=6;
    static bookingFee=15;
    constructor(time,distance)
    {
        this.time=time;
        this.distance=distance;
    }
    getFare()
    {
        return this.time*this.distance;
    }
}
const obj=new Uber(2,4);
console.log(obj.getFare());
