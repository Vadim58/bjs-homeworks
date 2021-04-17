"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
 let percentCheck = percent;
 let contributionCheck = contribution;
 let amountCheck = amount;
 let numberOfMonths;
 percent = Number(percent);
 contribution = Number(contribution);
 amount = Number(amount);
  if (isNaN(percent) === true || percent === undefined || percent <= 0) {
  	  return (`Параметр <percent> содержит неправильное значение <${percentCheck}>`);
  }
     if (isNaN(contribution) === true || contribution === undefined || contribution < 0) {
  	return (`Параметр <contribution> содержит неправильное значение <${contributionCheck}>`);
  }
   if (isNaN(amount) === true || amount === undefined || amount <= 0) {
  	return (`Параметр <amount> содержит неправильное значение <${amountCheck}>`);
  }
   let currentDate = new Date();
   let defaultAmount = amount - contribution;
   let currentYear = currentDate.getFullYear();
   let currentMonth = currentDate.getMonth();
   let loanCloseYear = date.getFullYear();
   let loanCloseMonth = date.getMonth();
   if (loanCloseYear < currentYear) {
   	return (`Параметр <date> содержит неправильное значение <${date.getFullYear()}>`);
   }
   if (loanCloseYear === currentYear && loanCloseMonth <= currentMonth) {
   	return (`Параметр <date> содержит неправильное значение <${date.getMonth() + 1}, ${date.getFullYear()}>`);
   }
   if (loanCloseYear === currentYear && loanCloseMonth > currentMonth) {
   	numberOfMonths = loanCloseMonth - currentMonth;
   }
   if (loanCloseYear > currentYear && loanCloseMonth < currentMonth) {
   	numberOfMonths = (loanCloseYear - currentYear) * 12 + (loanCloseMonth + 1);
   }
   if (loanCloseYear > currentYear && loanCloseMonth === currentMonth) {
    numberOfMonths = (loanCloseYear - currentYear) * 12;
   }
  if (loanCloseYear > currentYear && loanCloseMonth > currentMonth) {
    numberOfMonths = (loanCloseYear - currentYear) * 12 + (loanCloseMonth - currentMonth);
  }
   let percentRate = percent / (100 * 12);
   let payment = defaultAmount * (percentRate + percentRate / ((Math.pow((1 + percentRate), numberOfMonths)) - 1));
   let totalAmount = payment * numberOfMonths;

   return Number(totalAmount.toFixed(2));
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

