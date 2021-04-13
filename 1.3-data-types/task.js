"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
 let percentCheck = percent;
 let contributionCheck = contribution;
 let amountCheck = amount;
 percent = Number(percent);
 contribution = Number(contribution);
 amount = Number(amount);
  if (isNaN(percent) === true || percent === undefined || percent <= 0) {
  	  return (`Параметр <percent> содержит неправильное значение <${percentCheck}>`);
  }
     if (isNaN(contribution) === true || contribution === undefined) {
  	return (`Параметр <contribution> содержит неправильное значение <${contributionCheck}>`);
  }
   if (isNaN(amount) === true || amount === undefined || amount <= 0) {
  	return (`Параметр <amount> содержит неправильное значение <${amountCheck}>`);
  }
   let currentDate = new Date();
   let daymSecValue = 1000 * 60 * 60 * 24;
   let defaultAmount = amount - contribution;
   let numberOfMonths = Math.ceil((((date.getTime() - currentDate.getTime()) / daymSecValue) / 365) * 12);
   console.log(numberOfMonths);
   let percentRate = percent / (100 * 12);
   if (numberOfMonths < 1) {
   	return (`Параметр <date> содержит неправильное значение <${date}>`);
   } 
   else { 
     let payment = defaultAmount * (percentRate + percentRate / ((Math.pow((1 + percentRate), numberOfMonths)) - 1));
     let totalAmount = payment * numberOfMonths;
     return Number(totalAmount.toFixed(2));
 }
}





function getGreeting(name) {
      let userName = ''; 

      if (name != undefined && name.length > 0) {
      userName = name;
   }
 
 else {
      userName = 'Аноним';
 }

      let greeting = `Привет, мир! Меня зовут ${userName}.`;
      console.log(greeting);
     
      return greeting;
}

