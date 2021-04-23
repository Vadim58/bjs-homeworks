function parseCount(item) {
  if (isNaN(Number.parseInt(item))) {
  	const inValid = new Error('Невалидное значение');
  	throw inValid;
  }
  return Number.parseInt(item);
}

function validateCount(item) {
	  try {
            return parseCount(item);
	  } 
	  catch(inValid) {
	  	    return inValid; 
   }
}

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		const error = new Error('Треугольник с такими сторонами не существует');
		if ((a + b) < c || (b + c) < a || (a + c) < b) {
          throw error;
		}
	}
    getPerimeter() {
    	let x = this.a + this.b + this.c;
    	return x;
    	console.log(x);
    }
    getArea() {
    	let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}
	catch(alarm) {
         return alarm = {
         	getPerimeter: function () {
         		return "Ошибка! Треугольник не существует"
         	},
         	getArea: function () {
         		return "Ошибка! Треугольник не существует"
         	},
         };
	}
}