class PrintEditionItem {
	constructor (name, releaseDate, pagesCount){
     this.name = name;
     this.releaseDate = releaseDate;
     this.pagesCount = pagesCount;
     this.state = 100;
     this.type = null;
	}
	fix () {
		return state * 2;
	}
	
}