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

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    return (averageMark);
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}