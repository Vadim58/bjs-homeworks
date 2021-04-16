"use strict";
function getSolutions (a, b, c) {
	let d =  Math.pow(b, 2) - 4 * a * c;
	let x1;
	let x2;
	if (d < 0) {
		return {
		 D: d,
		 roots: [], 
	    	}
	}
	else if (d === 0) {
		x1 = -b / (2 * a);

        return { 
        	D: d,
        	roots: [x1],
             }
	}
	else if (d > 0) {
		 x1 = (-b + Math.sqrt(d)) / (2 * a);
		 x2 = (-b - Math.sqrt(d)) / (2 * a);
		 return {
		 	D: d,
		 	roots: [x1, x2],
	    	 }
 	    }
 	}

function showSolutionsMessage(a, b, c) {
       let result = getSolutions(a, b, c);
       console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
       console.log(`Значение дискриминанта D: ${result.D}`);
       if (result.D > 0) {
       	console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
       }
       else if (result.D === 0) {
       	console.log(`Уравнение имеет один корень. X₁ = ${result.roots[0]}`);
       }
       else if (result.D < 0) {
         console.log (`Уравнение не имеет вещественных корней`);
       }
}

//=====================================================================================================================================================

function getAverageScore(data) {
let result = {};
let average;
let k = 0;
let disciple;
let totalSum = 0;
    for (disciple in data) {
      let mark = data[disciple];
      if (getAverageMark(mark) > 0){
      k++;
      totalSum += (getAverageMark(mark));
      result[disciple] = getAverageMark(mark);
    } 
}
    
    if (k > 9) {
      return 'Недопустимое количество предметов';
    }
      average = totalSum / k;
      result.average = average; 
      return result;
}

function getAverageMark(marks) {
  let sum = 0;
  let averageRate = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];  
  }
  if (marks.length == 0) {
     return sum = 0;
  }
  averageRate = sum / marks.length;
  return averageRate;
}
