function filter(arr, myFunction) {
    let newArr = [];
    let result = 0;
    for (let i = 1; i <= arr.length; i++) {
        result = myFunction(i);
        if (result) {
            newArr.push(i);
        }
    }
    return newArr;
}