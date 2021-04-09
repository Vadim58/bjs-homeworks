"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
 percent = Number(percent);
 contribution = Number(contribution);
 amount = Number(amount);
  if (typeof(percent) != "number") {
  	  return ('Параметр <percent> содержит неправильное значение <' + percent + '>');
  }
     if (typeof(contribution) != "number") {
  	return ('Параметр <contribution> содержит неправильное значение <' + contribution + '>');
  }
   if (typeof(amount) != "number") {
  	return ('Параметр <amount> содержит неправильное значение <' + amount + '>');
  }
   let currentDate = new Date();
   let defaultAmount = amount - contribution;
   let numberOfMonths = (date.getFullYear() - currentDate.getFullYear()) * 12;  
   let percentRate = percent / 100; 
   let payment = defaultAmount * (percentRate + percentRate / ((Math.pow((1 + percentRate), numberOfMonths)) - 1));
   let totalAmount = payment * numberOfMonths;

     return totalAmount.toFixed(2);
}





function getGreeting(name) {
      let userName = '';        
      if (name.length > 0) {
      userName = name;
   }
 
 else {
      userName = 'Аноним';
 }

      let greeting = 'Привет, мир! Меня зовут ' + userName +'.';
      console.log(greeting);
     
      return greeting;
}

