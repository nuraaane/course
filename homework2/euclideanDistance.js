function euclideanDistance(firstArr, secArr) {
    let result = 0;
    result = (secArr[0] - firstArr[0]) ** 2 + (secArr[1] - firstArr[1]) ** 2;
    return result ** (1 / 2);
}