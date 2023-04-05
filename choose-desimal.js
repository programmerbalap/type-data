function choose_desimal(n, d) {
    const x = 10 ** d;
    return Math.round(n * x) / x;
}

console.log(choose_desimal(3.1415926535, 2)); // Output: 3.14
console.log(choose_desimal(123.4567, 0)); // Output: 123
console.log(choose_desimal(0.12345, 4)); // Output: 0.1235