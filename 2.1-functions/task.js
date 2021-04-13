"use strict";
function getSolutions (a, b, c) {
	let d =  Math.pow(b, 2) - 4 * a * c;
	let x1;
	let x2;
	if (d < 0) {
		return {
		 D: d,
		 roots: [] 
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
