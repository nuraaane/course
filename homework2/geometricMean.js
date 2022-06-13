function geometricMean(...args) {
    let result = 0;
    let say = 0;
    let multiplication = 1;
    if (args.length === 0 || args === undefined) {
        return 0;
    }
    for (let i = 0; i < args.length; i++) {
        multiplication *= args[i];
        say++;
    }
    result = multiplication ** (1 / args.length)
    return result;
}