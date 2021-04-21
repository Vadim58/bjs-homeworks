class PrintEditionItem {
	constructor (name, releaseDate, pagesCount){
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     }
     type = null;
    
     fix() {
           return this.state * 1.5;
    }
   set state(arg) {
              if (arg < 0) {
              	this._state = 0;
                }

                if (arg * 1.5 > 100) {
                	this._state = 100;
                }
                if (arg * 1.5 > 0 && arg * 1.5 <= 100) {
                	this._state = arg;
                }
              }
	
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
	super (name, releaseDate, pagesCount);
	this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount, author) {
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
 