function unique(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;


    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < arr.length; j++) {
    //         if (arr[i] !== arr[j]) {
    //             newArr.push(arr[i]);
    //         }
    //     }
    // }
    // return newArr;
}