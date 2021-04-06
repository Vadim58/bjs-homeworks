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
}

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
}




/*
function askDrink(name,dateOfBirthday){
  
  let  age;
       dateOfBirthday = {
  	   day,                          ---------------------//НЕ МОГУ ПОНЯТЬ КАКИМ ОБРАЗОМ ОБРАТИТЬСЯ К ОБЪЕКТУ dateOfBirthday, ЧТОБЫ ВЫЧИСЛИТЬ КОЛИЧЕСТВО ПОЛНЫХ ЛЕТ, У МАССИВА Я ПРОСТО 
  	   month,                        ------------------------МОГУ ПЕРЕБИРАТЬ ЕГО ЭЛЕМЕНТЫ ПО-ПОРЯДКУ, А КАК ОБРАТИТЬСЯ К СВОЙСТВУ И КЛЮЧУ ОБЪЕКТА, ЕСЛИ Я НЕ ЗНАЮ ИХ ИМЕН? ИЛИ ЭТО МАССИВ?                       
  	   year,
  };
     
     function getFullYear() {
  
         
    let newDate = {
     day: 26,
     month: 9,
     year: 2021,
   };

if ((newDate.month > dateOfBirthday.month) || ((newDate.month === dateOfBirthday.month) && (newDate.day === dateOfBirthday.day)) || ((newDate.month === dateOfBirthday.month) && (newDate.day > dateOfBirthday.day))) {
  age = newDate.year -  dateOfBirthday.year;
}                                                             //УСЛОВИЯ ВРОДЕ ВЕРНЫЕ, НО КАК ВЫТАЩИТЬ ЗНАЧЕНИЕ ГОДА, МЕСЯЦА И ДНЯ ИЗ АРГУМЕНТА dateOfBirthday НЕ МОГУ ДОГАДАТЬСЯ
else {
  age = newDate.year - dateOfBirthday.year - 1;
}

console.log(age);
 return (age);
     }
getFullYear();                                  
    if (age > 18) {
    	console.log('Достаточно взрослый, ' + name);
    }
    else {
    	console.log('Гуляй, ' + name);
    }


}*/