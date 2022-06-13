function some(arr, myFunction) {
    let result = 0;
    for (let i of arr) {
        result = myFunction(i);
        if (result) {
            return true;
        }
    }
    return false;
}