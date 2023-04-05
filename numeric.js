function isNumeric(input) {
    if (typeof (input) === "number") {
        return true;
    }
    return false;
}

console.log(isNumeric(123)); // Output: true
console.log(isNumeric('456')); // Output: true
console.log(isNumeric('abc')); // Output: false
console.log(isNumeric(true)); // Output: false
console.log(isNumeric(null)); // Output: false