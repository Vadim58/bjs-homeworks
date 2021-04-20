 String.prototype.isPalindrome = function () {
  if (this.split(' ').join('').split('').reverse().join('').trim().toLowerCase() === this.split(' ').join('').trim().toLowerCase()) {
      return true;
  }
  else return false;
}

 

function getAverageMark(marks) {
	let sum = 0;
	let averageRate = 0;
	for (i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	if (sum === 0) {
		return 0;
	}
	averageRate = sum / marks.length;
   return Math.round(averageRate);
}

function checkBirthday(birthday) {
   let age;
   let now = new Date ();
   let diff = now.getTime() - birthday.getTime(); 
   console.log(diff);
   let year = now.getTime() / 1000 / 60 / 60 / 24 / 365;
   age = diff / year;
    console.log(age);
} 

