function find(arr, myFunction) {
    let result = 0;
    for (let i = 1; i <= arr.length; i++) {
        result = myFunction(i);
        if (result) {
            return i;
        }
    }
}