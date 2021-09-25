class Movie
{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
    
    getPG(movie)
    {
        let mv=[];let c=0;
        for(let i=0;i<movie.length;i++)
        {
             if(movie[i].rating==='PG')
             {
             mv[c++]=movie[i];
             }
        }   
     return mv;
    }
    
}
const movie1=new Movie("Casino Royale","Eon Productions","PG­13");
const movie2=new Movie("jeans","AVM Productions");
const movie3=new Movie("kovil","kavithalaya Productions","5star");
console.log(movie1);
console.log(movie2);
console.log(movie3);
