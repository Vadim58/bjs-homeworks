function getResult(a,b,c){
    let x = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d === 0) {
      x.push(-Math.pow(b, 2) / (2 * a));
  }
   else if (d > 0) {
      
      x.push((-b + Math.sqrt(d)) / (2 * a));
      x.push((-b - Math.sqrt(d)) / (2 * a));
   }
   return x;
}

function getAverageMark(marks) {
   let sum = 0;
   let marksOverlay = marks.slice(0, 5);
   if (marks.length === 0) {
     return 0;
 }
   for (let i = 0; i < marksOverlay.length; i++) {
   	   sum += marks[i];
    }

   return(sum / marksOverlay.length);
}


function askDrink(name, dateOfBirthday) {
    let result;
    let currentYear = new Date().getFullYear();
    let birthDayYear = dateOfBirthday.getFullYear();
    if ((currentYear - birthDayYear) > 18) {
        result = 'Не желаете ли олд-фэшн, ' + name + '?';
    }
    else {
    	result = 'Сожалею, ' + name + ' но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!';
    }
    return result;
}




