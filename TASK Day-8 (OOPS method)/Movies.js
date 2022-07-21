class Movies{
	constructor(title,studio,rating){
    	this.title=title;
      	this.studio=studio;
        this.rating=rating;
    }
  	displayInfo(){
    	return this.title + " was created by " + this.studio + " which has rating of "+this.rating;
    }
}

let Movie = new Movies("Iron man","MARVEL","PG13");
Movie.displayInfo();
console.log(Movie.displayInfo());

let newmovie = new Movies("Casio Royale","Eon Production","PG13");
newmovie.displayInfo();
console.log(newmovie.displayInfo()); 
