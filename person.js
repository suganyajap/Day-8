class Person
{
    constructor(name,gender,age,occupation)
    {
        this.name=name;
        this.gender=gender;
        this.age=age;
        this.occupation=occupation;
    }
    getName()
    {
        return this.name;
    }
    getAge()
    {
        return this.age;
    }
    getGender()
    {
        return this.gender;
    }
    getOccupation()
    {
        return this.occupation;
    }
    
}
const person1=new Person("anbu","male",30,"engineer");
console.log(person1);
console.log(person1.getAge());
console.log(person1.getGender());
console.log(person1.getOccupation());