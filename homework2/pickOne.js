function pickOne(...args) {
    const randomIndex = random(0, args.length - 1);
    return args[randomIndex]
}