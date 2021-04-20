class PrintEditionItem {
	constructor (name, releaseDate, pagesCount){
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.state = 1000;
     this.type = null;
	}
	fix () {
		return state * 1.5;
	}
	set(state) {
		if (state < 0) {
			this.state = 0;
          }
        if (state > 100) {
        	this.state = 100;
        }
	}
	
}
const bakunin = new PrintEditionItem ('Анархия', 1909, 389);
console.log(bakunin.state);
