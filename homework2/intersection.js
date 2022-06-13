function intersection(firstArr, secArr) {
    let newArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        for (let j = 0; j < secArr.length; j++) {
            if (firstArr[i] === secArr[j]) {
                newArr.push(firstArr[i]);
            }
        }
    }
    return newArr;
}