function random(lower, upper) {
    for (let i = lower; i <= upper; i++) {
        return Math.floor(Math.random(i) * upper + lower);
    }
}