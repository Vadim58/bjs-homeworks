class PrintEditionItem {
 constructor (name, releaseDate, pagesCount){
  this.name = name;
  this.releaseDate = releaseDate;
  this.pagesCount = pagesCount;
  this.type = null;
  this.state = 100;
     }
     
 fix() {
  if (this.state * 1.5 <= 100) {
   return this.state * 1.5;
 }
  else if (this.state * 1.5 > 100) {
   	return 100;
  }
}
 set state(arg) {
   if (arg < 0) {
     this._state = 0;
 }

   if (arg > 100) {
      this._state = 100;
 }
   if (arg > 0 && arg <= 100) {
      this._state = arg;
 }
}
	
  get state() {
	return this._state;
 }
}

const books = new PrintEditionItem ('tolstoy', 1902, 300);
books.state = 45;
console.log(books.state);
console.log(books.fix());


class Magazine extends PrintEditionItem {
 constructor (name, releaseDate, pagesCount) {
  super (name, releaseDate, pagesCount);
  this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
 constructor (author, name, releaseDate, pagesCount) {
   super (name, releaseDate, pagesCount);
   this.author = author;
   this.type = 'book';
  }
}
 class NovelBook extends Book {
 constructor (author, name, releaseDate, pagesCount) {
  super (author, name, releaseDate, pagesCount);
  this.type = 'novel';
  }
}

 class FantasticBook extends Book {
 constructor (author, name, releaseDate, pagesCount) {
 	super (author, name, releaseDate, pagesCount);
 	this.type = 'fantastic';
 }
}
 class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
 	super (author, name, releaseDate, pagesCount);
 	this.type = 'detective';
 }
}
 

 class Library {
  constructor (name) {
 	this.name = name;
    this.books = [];
   } 	
 	addBook(book) {	
     if (book.state > 30) {
     	this.books.push(book);
     }
   }
    findBookBy (type, value) {
     for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].type === value) {
    		return this.books[i];
    }
   	else {
    return null;
   }
  }
 }
   
}



