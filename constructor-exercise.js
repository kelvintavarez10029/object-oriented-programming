/* Please read the instructions located in the 1-constructor-exercise-readme.md file and complete your code below */ 
function Book(title, author, year, genre) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
}
  Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}. It is a ${this.genre} book.`
  }

 Book.prototype.isClassic = function() {
    let currentYear = new Date().getFullYear();
    return (currentYear - this.year >= 50) ? `${this.title} is a classic.` : `${this.title} is not a classic.`;
};

  Book.prototype.updateYear = function(newYear){
    this.year = newYear;
    return `The year of ${this.title} has been updated to ${this.year}.`
  }
  Book.prototype.changeGenre = function(newGenre) {
    this.genre = newGenre;
    return `Genre updated to ${newGenre}`;
};

let book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Fiction");

console.log(book1.getSummary()); 

console.log(book1.isClassic()); 

console.log(book1.updateYear(2000)); 

console.log(book1.changeGenre("Historical Fiction")); 

  

  

