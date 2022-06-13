function every(arr, myFunction) {
    let aaa = true;
    let result = 0;
    for (let i of arr) {
        result = myFunction(i);
        if (!result) {
            aaa = false;
        }
    }
    return aaa;
}