function flat2D(arr) {
    let newArr = [];
    for (let i of arr) {
        for (let j of i) {
            newArr.push(j);
        }
    } return newArr;
}