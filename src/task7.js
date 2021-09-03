export const contextFib = { length: 15 };

export const getNumbersFibonacci = (obj) => {
    const resultFibonacci = [0, 1];

    let numFibonacci = obj.length;
    if (obj.length > 47 || obj.length <= 0) {
        let invalidData = {
            status: 'fail',
            reason: 'the number must be no less than 0 or no more than 48'
        };
        return invalidData;

    } else if (obj.length == undefined) {
        let invalidData = {
            status: 'fail',
            reason: 'enter data'
        }
        return invalidData;

    } else {
        for (let i = 2; i < numFibonacci; i++) {
            resultFibonacci.push(resultFibonacci[i - 2] + resultFibonacci[i - 1]);
        }
        return resultFibonacci;
    }
}

console.log(getNumbersFibonacci(contextFib));