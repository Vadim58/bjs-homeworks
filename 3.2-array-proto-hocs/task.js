const compareArrays = (arr1, arr2) => {if (arr1.length === arr2.length && ''+arr1 === ''+arr2)
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
const findObject = (arr) => memory.find(object => compareArrays(object.args, arr)); 
 return (...someArgs) => { return findObject([...someArgs]).result;    	  	  
	  	{memory.push(
 	  	     {
 	  		  args: [...someArgs],
 	  	      result: fn(...someArgs),
 	  	    }
 	  	 )
 	  	memory.splice(limit - 1);
 	  	return fn(...someArgs); 
  }
 }
}
const resultFunction = memorize(((a,b) => a + b), 23);
resultFunction(3,4);
