function map(arr, myFunction) {
    let newArr = [];
    let result = 0;
    for (let i = 1; i <= arr.length; i++) {
        result = myFunction(i);
        newArr.push(result);
    } return newArr;
}