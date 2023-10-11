function fibs(count) {
    const output = [0,1]
    while (count > 2) {
        output.push(output[output.length-1] + output[output.length -2])
        count--
    }
    console.log(output, "normal")
}
function fibsRecursive(count, outputRec = [0,1]) {
    if (count < 3) {
        console.log(outputRec, "recursive")
        return;
    }
    outputRec.push(outputRec[outputRec.length-1] + outputRec[outputRec.length -2])
    fibsRecursive(count-1, outputRec)
}

fibs(8)
fibsRecursive(8)

