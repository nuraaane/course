function reduce(arr, num) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    if (num === 0) {
        return sum;
    }
    return sum + num;
}
//2-ci parametri funksiya şəklində yaza bilmədim.