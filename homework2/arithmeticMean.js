function arithmeticMean(...args) {
    let result = 0;
    let count = 0;
    let sum = 0;
    if (args.length === 0 || args === undefined) {
        return 0;
    }
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
        count++;
    }
    result = sum / count;
    return result;
}