function nilaiRandom(min, max) {
    if (min === null && max === null) return 0;

    if (max === null) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(nilaiRandom(null, null));

console.log(nilaiRandom(1, 10));

console.log(nilaiRandom(5, 1));

console.log(nilaiRandom(5, null));

console.log(nilaiRandom(null, 2));