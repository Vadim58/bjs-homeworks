const compareArrays = (arr1, arr2) => {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])
};

function memorize(fn, limit) {
    let memory = [];
    return (...someArgs) => {
        const findedObject = memory.find(object => compareArrays(object.args, someArgs));
         if (findedObject) {
            return findedObject.result
        };
        const res = fn(...someArgs);
        memory.push({
            args: someArgs,
            result: res,
        })
        memory.splice(limit - 1);
        return res;
    }
}
const resultFunction = memorize(((a, b) => a + b), 23);
resultFunction(3, 4);