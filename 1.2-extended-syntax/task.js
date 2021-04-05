function getResult(a,b,c){
    let x = [];
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d === 0) {
      x.push(-Math.pow(b, 2) / (2 * a));
      return (x);
  }
   else if (d > 0) {
      let x1 = (-b + Math.sqrt(d)) / (2 * a);
      let x2 = (-b - Math.sqrt(d)) / (2 * a);
      x.push(x1, x2);
      return (x);
}
   else {
    return (x);
   }
};

function getAverageMark(marks) {
   let sum = 0;
   let marksOverlay = marks.slice(0, 5);
   for (let i = 0; i < marksOverlay.length; i++) {
   	   sum += marks[i];
      }
    let averageMark = sum / marksOverlay.length;
  
     if (marks.length > 5) {
    console.log('Введено ' + marks.length + ' оценок, средний балл будет вычислен для первых 5');
    }
    
   else if (marks.length === 0) {
     return(0);
   }
   return(averageMark);
function getAverageMark(marks){
    // код для задачи №2 писать здесь
    return (averageMark);
}





function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    return (result);
}

