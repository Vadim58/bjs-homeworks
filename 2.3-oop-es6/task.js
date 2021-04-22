class PrintEditionItem {
	constructor (name, releaseDate, pagesCount){
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     }
     type = null;
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
books.state = 100;
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
 	constructor (name, releaseDate, pagesCount, author) {
 		super (name, releaseDate, pagesCount, author);
 		this.type = 'novel';
 	}
 }

 class FantasticBook extends Book {
 	constructor (name, releaseDate, pagesCount, author) {
 		super (name, releaseDate, pagesCount, author);
 		this.type = 'fantastic';
 	}
 }
 class DetectiveBook extends Book {
 	constructor (name, releaseDate, pagesCount, author) {
 		super (name, releaseDate, pagesCount, author);
 		this.type = 'detective';
 	}
 }
 

 class Library {
 	constructor (name) {
 		this.name = name;
 	}
 	books = [];
 	addBook(book) {
 		if (book.state > 30) {
 			this.books.push(book);
 		}

 	}
   
 }

 const library = new Library("Библиотека имени Ленина");