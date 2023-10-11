const mergeSort = (array) => {
    if (array.length < 2) {
        return array
    };

    const middle = Math.floor(array.length/2);
    const leftHalfOfArray = array.slice(0, middle);
    const rightHalfOfArray = array.slice(middle);

    return merge(mergeSort(leftHalfOfArray), mergeSort(rightHalfOfArray));

};

function merge(leftHalf, rightHalf) {

    const output = [];

    while (leftHalf.length && rightHalf.length) {

        if (leftHalf[0] < rightHalf[0]) {
            output.push(leftHalf.shift())
        } else {
            output.push(rightHalf.shift())
        }
    }

    return [...output, ...leftHalf, ...rightHalf]

}

let result = mergeSort([2, 6, 8, 1, 3, 5, 4, 7, 9]);
console.log(result);
