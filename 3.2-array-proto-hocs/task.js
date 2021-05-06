const compareArrays = (arr1, arr2) => {if (arr1.length === arr2.length && arr1.every(function(value, index) { return value === arr2[index]}))
 return true; 
 else {
 	return false
 } 
}

function memorize(fn,limit) {
	let memory = [
  {
    args: [3, 4],
    result: 7
  },
  {
    args: [1, 3],
    result: 4
  }
];


 return (...someArgs) => { if (compareArrays(memory.find(item => item.args).args, [...someArgs])) console.log(fn(...someArgs));
  console.log('вычислительный процесс обратился к объекту памяти');
  }
}
const resultFunction = memorize((a,b) => a + b);
resultFunction(3,4);

