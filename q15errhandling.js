var divideNumber = function (x, y, next) {
    // if error condition? 
    if (y === 0) {
        // Will "throw" an error safely by returning it 
        // If we do not throw an error here, it will throw an exception 
        next(new Error("Can not divide by zero"))
    }
    else { // If noo error occurred, returning error as null 
        next(null, x / y)
    }
}
// Divide 10 by 5
divideNumber(10, 5, function (err, result) {
    if (err) {
        // Handling the error if it occurs... 
        console.log("10/5=err", err)
    }
    else {
        // Returning the result if no error occurs 
        console.log("10/5=" + result)
    }
})
// Divide 10 by 0
divideNumber(10, 0, function (err, result) {
    // Checking if an Error occurs ? 
    if (err) {
        // Handling the error if it occurs... 
        console.log("10/0=err", err)
    }
    else {
        // Returning the result if no error occurs 
        console.log("10/0=" + result)
    }
})